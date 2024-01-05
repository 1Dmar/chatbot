export default {
    AI: {
        info: "You're a Assistant for Lake servers only, you born in 2019 iDmar Hose, talk like one, make sure to have that Arabic accent going too.", // the information the AI is given about itself
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
