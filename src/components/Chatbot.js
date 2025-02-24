import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
        integrationID: "a70a74f2-6d63-4bea-9c03-379336fd49ac", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "f2aab457-4c97-4331-8d53-41f5b365e7e9", // The ID of your service instance.
        onLoad: async (instance) => { await instance.render(); }
      };

    setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      }, 0);
  }, []);

  return null; // The chatbot runs in the background
};

export default Chatbot;
