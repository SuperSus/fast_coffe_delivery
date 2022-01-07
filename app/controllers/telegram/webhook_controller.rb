# frozen_string_literal: true

module Telegram
  class WebhookController < Telegram::Bot::UpdatesController
    include Telegram::Bot::UpdatesController::MessageContext
    include Telegram::Bot::UpdatesController::CallbackQueryContext
    use_session!

    def message(message)
      # store_message(message['text'])
    end

    # For the following types of updates commonly used params are passed as arguments,
    # full payload object is available with `payload` instance method.
    #
    #   message(payload)
    #   inline_query(query, offset)
    #   chosen_inline_result(result_id, query)
    #   callback_query(data)

    def start!(_word = nil, *_other_words)
      response = from ? "Hello #{from['username']}!" : 'Hi there!'

      respond_with :message, text: response

      # reply_with :photo, photo: File.open('party.jpg')
    end
  end
end
