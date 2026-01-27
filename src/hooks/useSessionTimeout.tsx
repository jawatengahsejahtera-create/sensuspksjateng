import { useEffect, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes in milliseconds

export const useSessionTimeout = () => {
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  const handleLogout = useCallback(async () => {
    toast({
      title: "Sesi Berakhir",
      description: "Anda telah logout otomatis karena tidak ada aktivitas selama 30 menit.",
      variant: "destructive",
    });
    await supabase.auth.signOut();
  }, [toast]);

  const resetTimer = useCallback(() => {
    lastActivityRef.current = Date.now();
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      handleLogout();
    }, SESSION_TIMEOUT_MS);
  }, [handleLogout]);

  useEffect(() => {
    // Activity events to track
    const activityEvents = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    // Start the timer
    resetTimer();

    // Add event listeners for user activity
    const handleActivity = () => {
      resetTimer();
    };

    activityEvents.forEach((event) => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    // Check session on visibility change (when user comes back to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const timeSinceLastActivity = Date.now() - lastActivityRef.current;
        if (timeSinceLastActivity >= SESSION_TIMEOUT_MS) {
          handleLogout();
        } else {
          resetTimer();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      activityEvents.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resetTimer, handleLogout]);

  return { resetTimer };
};
