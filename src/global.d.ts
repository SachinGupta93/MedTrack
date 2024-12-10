declare global {
    interface Window {
      plugSDK: {
        init: (config: any) => void;
        onEvent: (callback: (payload: any) => void) => void;
        initSearchAgent: () => void;
        toggleSearchAgent: () => void;
      };
    }
  }
  
  export {};