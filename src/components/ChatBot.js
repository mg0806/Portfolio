import React from "react";
import Script from "next/script";

const ChatBot = () => {
  const initBotpress = () => {
    window.botpressWebChat.init({
      composerPlaceholder: "Type Hi to start conversation",
      botConversationDescription: "Chat With Manohar's Bot",
      botId: "901fb870-0246-48ed-aee6-c7cf2c7377cd",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "901fb870-0246-48ed-aee6-c7cf2c7377cd",
      webhookId: "f2120c4f-4306-46f9-a9d0-cc1a03f7e5bb",
      lazySocket: true,
      themeName: "prism",
      frontendVersion: "v1",
      useSessionStorage: true,
      enableConversationDeletion: true,
      showPoweredBy: true,
      theme: "prism",
      themeColor: "#2563eb",
      allowedOrigins: [],
    });
  };

  return (
    <Script
      src="https://cdn.botpress.cloud/webchat/v1/inject.js"
      onLoad={() => {
        initBotpress();
      }}
    />
  );
};

export default ChatBot;
