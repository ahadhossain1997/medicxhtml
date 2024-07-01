var Accordion = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;

  var links = this.el.find('.medicx-accordion-header');
  links.on('click', {
      el: this.el,
      multiple: this.multiple
  }, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
      $next = $this.next();

  $next.slideToggle();
  $this.parent().toggleClass('open');

  if (!e.data.multiple) {
      $el.find('.medicx-accordion-body').not($next).slideUp().parent().removeClass('open');
  };
}
var accordion = new Accordion($('.medicx-accordion-wrap1'), false);