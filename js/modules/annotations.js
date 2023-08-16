import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';


export function startRoughAnnotation(elem) {
  const element = document.getElementById(elem);
  const annotation = annotate(element, { type: 'highlight', color: '#f1fa8d' });
  annotation.show();
}

export function roughAnnotationBox(elem){
  const element = document.getElementById(elem);
  const annotation = annotate(element, {type: 'underline', color:'#595FD9'});
  annotation.show();
}