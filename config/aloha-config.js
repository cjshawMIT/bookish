// Generated by CoffeeScript 1.6.2
(function() {
  define(['jquery'], function(jQuery) {
    this.Aloha = this.Aloha || {};
    this.Aloha.settings = {
      jQuery: jQuery,
      logLevels: {
        error: true,
        warn: true,
        info: false,
        debug: false
      },
      sidebar: {
        disabled: true
      },
      requireConfig: {
        paths: {
          jqueryui: '../../oerpub/js/jquery-ui-1.9.0.custom-aloha'
        }
      },
      errorhandling: true,
      plugins: {
        load: ['oer/toolbar', 'common/ui', 'common/format', 'common/contenthandler', 'common/paste', 'common/block', 'common/list', 'common/table', 'extra/draganddropfiles', 'common/image', 'oer/popover', 'oer/math', 'oer/assorted', 'oer/semanticblock', 'oer/note'],
        draganddropfiles: {
          upload: {
            config: {
              method: 'POST',
              url: '/resource',
              fieldName: 'upload',
              send_multipart_form: true,
              callback: function(resp) {
                var $img;

                if (!(resp.match(/^http/) || resp.match(/^\//) || resp.match(/^[a-z]/))) {
                  alert('You dropped a file and we sent a message to the server to do something with it.\nIt responded with some gibberish so we are showing you some other file to show it worked');
                  resp = 'src/test/AlohaEditorLogo.png';
                }
                $img = Aloha.jQuery('.aloha-image-uploading').add('#' + this.id);
                $img.attr('src', resp);
                $img.removeClass('aloha-image-uploading');
                return console.log('Updated Image src as a result of upload');
              }
            }
          }
        },
        block: {
          defaults: {
            '.default-block': {},
            figure: {
              'aloha-block-type': 'EditableImageBlock'
            }
          }
        }
      }
    };
    return this.Aloha;
  });

}).call(this);
