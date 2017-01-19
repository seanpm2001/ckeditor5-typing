/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Typing from '../../src/typing';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [ Enter, Typing, Paragraph ],
	toolbar: []
} )
.then( editor => {
	window.editor = editor;
} )
.catch( err => {
	console.error( err.stack );
} );