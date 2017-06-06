if ( typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function' ) {
    var define = function( factory ) {
        factory( require, exports, module );
    };
}
/**
 * @preserve Copyright 2012 Martijn van de Rijdt & Modilabs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define( function( require, exports, module ) {
    'use strict';
    var Widget = require( 'enketo-core/src/js/Widget' );
    var $ = require( 'jquery' );
    require( 'enketo-core/src/js/plugins' );
    var bikram_sambat_bs = require('bikram-sambat-bootstrap');

    var pluginName = 'bikramsambatdatepicker';

    function Bikramsambatdatepicker( element, options ) {
        this.namespace = pluginName;
        Widget.call( this, element, options );
        this._init();
    }

    //copy the prototype functions from the Widget super class
    Bikramsambatdatepicker.prototype = Object.create( Widget.prototype );

    //ensure the constructor is the new one
    Bikramsambatdatepicker.prototype.constructor = Bikramsambatdatepicker;

    Bikramsambatdatepicker.prototype._init = function() {
        // TODO if UI language is not set to nepali, return immediately

        var $el = $( this.element );
        $el.parent().append(TEMPLATE);
    };

    Bikramsambatdatepicker.prototype.destroy = function( element ) {
        /* jshint unused:false */
    };

    $.fn[ pluginName ] = function( options, event ) {
        return this.each( function() {
            var $this = $( this ),
                data = $this.data( pluginName );

            options = options || {};

            if ( !data && typeof options === 'object' ) {
                $this.data( pluginName, ( data = new Bikramsambatdatepicker( this, options, event ) ) );
            } else if ( data && typeof options === 'string' ) {
                data[ options ]( this );
            }
        } );
    };

    module.exports = {
        'name': pluginName,
        'selector': 'input[type=date]'
    };
} );

var TEMPLATE =
        '<div class="input-group bikram-sambat-input-group">' +
            '<input name="day" type="tel" class="form-control devanagari-number-input" placeholder="गते" aria-label="गते" maxlength="2">' +
            '<input name="month" type="hidden">' +
            '<div class="input-group-btn">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                    'महिना <span class="caret"></span>' +
                '</button>' +
                '<ul class="dropdown-menu">' +
                    '<li><a href="#">बैशाख</a></li>' +
                    '<li><a href="#">जेठ</a></li>' +
                    '<li><a href="#">असार</a></li>' +
                    '<li><a href="#">साउन</a></li>' +
                    '<li><a href="#">भदौ</a></li>' +
                    '<li><a href="#">असोज</a></li>' +
                    '<li><a href="#">कार्तिक</a></li>' +
                    '<li><a href="#">मंसिर</a></li>' +
                    '<li><a href="#">पौष</a></li>' +
                    '<li><a href="#">माघ</a></li>' +
                    '<li><a href="#">फाल्गुन</a></li>' +
                    '<li><a href="#">चैत</a></li>' +
                '</ul>' +
            '</div>' +
            '<input name="year" type="tel" class="form-control devanagari-number-input" placeholder="साल" aria-label="साल" maxlength="4">' +
        '</div>';
