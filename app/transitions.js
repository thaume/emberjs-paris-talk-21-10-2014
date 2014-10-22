import Post from './models/post';

export default function(){

  // Project creation 'wizard'
  this.transition(
    this.fromRoute('projects.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('steps.description'),
    this.use('toLeft')//,
    // this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('steps.participants'),
    this.use('custom-fade')//,
    // this.reverse('toRight')
  );

  // Posts pagination
  this.transition(
    this.withinRoute('posts.show'),
    this.betweenNonEmptyModels(),
    this.toModel({ instanceOf: Post }),
    this.toModel(function(fromModel) {
      return this.get('id') > fromModel.get('id');
    }),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
