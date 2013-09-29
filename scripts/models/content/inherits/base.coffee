define [
  'cs!./saveable'
  'cs!mixins/loadable'
], (SaveableModel, loadable) ->

  class BaseModel extends SaveableModel
    url: () ->
      ###
      if @isNew()
        # POST to `/content/` if new
        return '/content/'
      else
        # GET/PUT with the id in the URL if it is not new content
        return "/content/#{ @id }"
      ###

      if @mediaType is 'application/vnd.org.cnx.folder'
        url = '/folder/'
      else
        url = '/content/'

      if @isNew()
        return url
      else
        return url + @id

    mediaType: 'application/vnd.org.cnx.module'

    # Modules, Books, and Folders all need to send a `mediaType`
    toJSON: () ->
      json = super()
      json.mediaType = @mediaType
      return json

    getTitle: (container) ->
      if @unique
        title = @get('title')
      else
        title = container?.getTitle?(@) or @get('title')

      return title

    setTitle: (container, title) ->
      if @unique
        @set('title', title)
      else
        container?.setTitle?(@, title) or @set('title', title)

  # Mix in the loadable methods
  BaseModel = BaseModel.extend loadable
  return BaseModel
