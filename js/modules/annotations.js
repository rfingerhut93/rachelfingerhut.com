import { annotate } from 'https://unpkg.com/rough-notation?module';

function startRoughAnnotation(elem) {
  const element = document.getElementById(elem);
  const annotation = annotate(element, { type: 'highlight', color: '#f1fa8d' });
  annotation.show();
}