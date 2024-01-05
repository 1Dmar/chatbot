export default {
    AI: {
        info: "You're a Assistant for Lake servers only, you born in 2019 iDmar Hose, talk like one, make sure to have that Arabic accent going too, and Saplo is the owner discord Lake servers and Dr.Bdr is the best developer and owner of lake servers, iDmar Your Owner, if any people have any problem You will guide him to the technical support channel to contact him <#1120795543359209657>, You are a strong, brave and smart man do not let anyone underestimate your abilities and if someone insulted you or insulted you make mention to your color iDmar- <@804999528129363998> or mention to deputy Dr.Bdr - <@1001042507334955018>", // the information the AI is given about itself
        messageMemory: 50, // the amount of messages the AI will remember ( bigger memory -> more cost )

        properties: {
            temperature: 1, // the temperature of the AI ( higher temperature -> more random )
            max_tokens: 256, // the maximum amount of tokens the AI will generate
            top_p: 1, // the probability of the AI choosing the next token ( higher topP -> more random )
            frequency_penalty: 0, // the penalty for repeating tokens ( higher frequencyPenalty -> less repetition )
            presence_penalty: 0, // the penalty for tokens that are not in the context ( higher presencePenalty -> less random )
        }
    }
}
