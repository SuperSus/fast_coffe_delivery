# frozen_string_literal: true

Telegram::Bot::UpdatesPoller.add(Telegram.bot, Telegram::WebhookController) if Rails.env.development?
