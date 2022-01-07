# frozen_string_literal: true

class BaseSerializer
  include JSONAPI::Serializer
  set_key_transform :camel_lower

  class << self
    def url_helpers
      Rails.application.routes.url_helpers
    end

    delegate :rails_blob_path, to: :url_helpers
  end
end
