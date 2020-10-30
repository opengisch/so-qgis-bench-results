/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 187.0, "minX": 0.0, "maxY": 573.0, "series": [{"data": [[0.0, 187.0], [0.1, 187.0], [0.2, 187.0], [0.3, 187.0], [0.4, 187.0], [0.5, 187.0], [0.6, 192.0], [0.7, 192.0], [0.8, 192.0], [0.9, 192.0], [1.0, 192.0], [1.1, 202.0], [1.2, 202.0], [1.3, 202.0], [1.4, 202.0], [1.5, 202.0], [1.6, 206.0], [1.7, 206.0], [1.8, 206.0], [1.9, 206.0], [2.0, 206.0], [2.1, 239.0], [2.2, 239.0], [2.3, 239.0], [2.4, 239.0], [2.5, 239.0], [2.6, 248.0], [2.7, 248.0], [2.8, 248.0], [2.9, 248.0], [3.0, 248.0], [3.1, 250.0], [3.2, 250.0], [3.3, 250.0], [3.4, 250.0], [3.5, 250.0], [3.6, 250.0], [3.7, 250.0], [3.8, 250.0], [3.9, 250.0], [4.0, 250.0], [4.1, 256.0], [4.2, 256.0], [4.3, 256.0], [4.4, 256.0], [4.5, 256.0], [4.6, 297.0], [4.7, 297.0], [4.8, 297.0], [4.9, 297.0], [5.0, 297.0], [5.1, 317.0], [5.2, 317.0], [5.3, 317.0], [5.4, 317.0], [5.5, 317.0], [5.6, 325.0], [5.7, 325.0], [5.8, 325.0], [5.9, 325.0], [6.0, 325.0], [6.1, 363.0], [6.2, 363.0], [6.3, 363.0], [6.4, 363.0], [6.5, 363.0], [6.6, 365.0], [6.7, 365.0], [6.8, 365.0], [6.9, 365.0], [7.0, 365.0], [7.1, 371.0], [7.2, 371.0], [7.3, 371.0], [7.4, 371.0], [7.5, 371.0], [7.6, 397.0], [7.7, 397.0], [7.8, 397.0], [7.9, 397.0], [8.0, 397.0], [8.1, 407.0], [8.2, 407.0], [8.3, 407.0], [8.4, 407.0], [8.5, 407.0], [8.6, 410.0], [8.7, 410.0], [8.8, 410.0], [8.9, 410.0], [9.0, 410.0], [9.1, 412.0], [9.2, 412.0], [9.3, 412.0], [9.4, 412.0], [9.5, 412.0], [9.6, 412.0], [9.7, 412.0], [9.8, 412.0], [9.9, 412.0], [10.0, 412.0], [10.1, 412.0], [10.2, 413.0], [10.3, 413.0], [10.4, 413.0], [10.5, 413.0], [10.6, 413.0], [10.7, 416.0], [10.8, 416.0], [10.9, 416.0], [11.0, 416.0], [11.1, 416.0], [11.2, 417.0], [11.3, 417.0], [11.4, 417.0], [11.5, 417.0], [11.6, 417.0], [11.7, 421.0], [11.8, 421.0], [11.9, 421.0], [12.0, 421.0], [12.1, 421.0], [12.2, 422.0], [12.3, 422.0], [12.4, 422.0], [12.5, 422.0], [12.6, 422.0], [12.7, 425.0], [12.8, 425.0], [12.9, 425.0], [13.0, 425.0], [13.1, 425.0], [13.2, 427.0], [13.3, 427.0], [13.4, 427.0], [13.5, 427.0], [13.6, 427.0], [13.7, 427.0], [13.8, 427.0], [13.9, 427.0], [14.0, 427.0], [14.1, 427.0], [14.2, 431.0], [14.3, 431.0], [14.4, 431.0], [14.5, 431.0], [14.6, 431.0], [14.7, 433.0], [14.8, 433.0], [14.9, 433.0], [15.0, 433.0], [15.1, 433.0], [15.2, 434.0], [15.3, 434.0], [15.4, 434.0], [15.5, 434.0], [15.6, 434.0], [15.7, 434.0], [15.8, 434.0], [15.9, 434.0], [16.0, 434.0], [16.1, 434.0], [16.2, 435.0], [16.3, 435.0], [16.4, 435.0], [16.5, 435.0], [16.6, 435.0], [16.7, 440.0], [16.8, 440.0], [16.9, 440.0], [17.0, 440.0], [17.1, 440.0], [17.2, 441.0], [17.3, 441.0], [17.4, 441.0], [17.5, 441.0], [17.6, 441.0], [17.7, 441.0], [17.8, 441.0], [17.9, 441.0], [18.0, 441.0], [18.1, 441.0], [18.2, 441.0], [18.3, 441.0], [18.4, 441.0], [18.5, 441.0], [18.6, 441.0], [18.7, 442.0], [18.8, 442.0], [18.9, 442.0], [19.0, 442.0], [19.1, 442.0], [19.2, 443.0], [19.3, 443.0], [19.4, 443.0], [19.5, 443.0], [19.6, 443.0], [19.7, 443.0], [19.8, 443.0], [19.9, 443.0], [20.0, 443.0], [20.1, 443.0], [20.2, 443.0], [20.3, 443.0], [20.4, 443.0], [20.5, 443.0], [20.6, 443.0], [20.7, 443.0], [20.8, 444.0], [20.9, 444.0], [21.0, 444.0], [21.1, 444.0], [21.2, 444.0], [21.3, 445.0], [21.4, 445.0], [21.5, 445.0], [21.6, 445.0], [21.7, 445.0], [21.8, 445.0], [21.9, 445.0], [22.0, 445.0], [22.1, 445.0], [22.2, 445.0], [22.3, 446.0], [22.4, 446.0], [22.5, 446.0], [22.6, 446.0], [22.7, 446.0], [22.8, 446.0], [22.9, 446.0], [23.0, 446.0], [23.1, 446.0], [23.2, 446.0], [23.3, 446.0], [23.4, 446.0], [23.5, 446.0], [23.6, 446.0], [23.7, 446.0], [23.8, 446.0], [23.9, 446.0], [24.0, 446.0], [24.1, 446.0], [24.2, 446.0], [24.3, 447.0], [24.4, 447.0], [24.5, 447.0], [24.6, 447.0], [24.7, 447.0], [24.8, 449.0], [24.9, 449.0], [25.0, 449.0], [25.1, 449.0], [25.2, 449.0], [25.3, 449.0], [25.4, 449.0], [25.5, 449.0], [25.6, 449.0], [25.7, 449.0], [25.8, 450.0], [25.9, 450.0], [26.0, 450.0], [26.1, 450.0], [26.2, 450.0], [26.3, 450.0], [26.4, 450.0], [26.5, 450.0], [26.6, 450.0], [26.7, 450.0], [26.8, 451.0], [26.9, 451.0], [27.0, 451.0], [27.1, 451.0], [27.2, 451.0], [27.3, 451.0], [27.4, 451.0], [27.5, 451.0], [27.6, 451.0], [27.7, 451.0], [27.8, 452.0], [27.9, 452.0], [28.0, 452.0], [28.1, 452.0], [28.2, 452.0], [28.3, 452.0], [28.4, 452.0], [28.5, 452.0], [28.6, 452.0], [28.7, 452.0], [28.8, 452.0], [28.9, 452.0], [29.0, 452.0], [29.1, 452.0], [29.2, 452.0], [29.3, 453.0], [29.4, 453.0], [29.5, 453.0], [29.6, 453.0], [29.7, 453.0], [29.8, 453.0], [29.9, 453.0], [30.0, 453.0], [30.1, 453.0], [30.2, 453.0], [30.3, 453.0], [30.4, 453.0], [30.5, 453.0], [30.6, 453.0], [30.7, 453.0], [30.8, 453.0], [30.9, 454.0], [31.0, 454.0], [31.1, 454.0], [31.2, 454.0], [31.3, 454.0], [31.4, 454.0], [31.5, 454.0], [31.6, 454.0], [31.7, 454.0], [31.8, 454.0], [31.9, 456.0], [32.0, 456.0], [32.1, 456.0], [32.2, 456.0], [32.3, 456.0], [32.4, 456.0], [32.5, 456.0], [32.6, 456.0], [32.7, 456.0], [32.8, 456.0], [32.9, 456.0], [33.0, 456.0], [33.1, 456.0], [33.2, 456.0], [33.3, 456.0], [33.4, 457.0], [33.5, 457.0], [33.6, 457.0], [33.7, 457.0], [33.8, 457.0], [33.9, 457.0], [34.0, 457.0], [34.1, 457.0], [34.2, 457.0], [34.3, 457.0], [34.4, 457.0], [34.5, 457.0], [34.6, 457.0], [34.7, 457.0], [34.8, 457.0], [34.9, 457.0], [35.0, 457.0], [35.1, 457.0], [35.2, 457.0], [35.3, 457.0], [35.4, 457.0], [35.5, 457.0], [35.6, 457.0], [35.7, 457.0], [35.8, 457.0], [35.9, 457.0], [36.0, 457.0], [36.1, 457.0], [36.2, 457.0], [36.3, 457.0], [36.4, 457.0], [36.5, 457.0], [36.6, 457.0], [36.7, 457.0], [36.8, 457.0], [36.9, 457.0], [37.0, 457.0], [37.1, 457.0], [37.2, 457.0], [37.3, 457.0], [37.4, 457.0], [37.5, 457.0], [37.6, 457.0], [37.7, 457.0], [37.8, 457.0], [37.9, 457.0], [38.0, 457.0], [38.1, 457.0], [38.2, 457.0], [38.3, 457.0], [38.4, 458.0], [38.5, 458.0], [38.6, 458.0], [38.7, 458.0], [38.8, 458.0], [38.9, 458.0], [39.0, 458.0], [39.1, 458.0], [39.2, 458.0], [39.3, 458.0], [39.4, 458.0], [39.5, 458.0], [39.6, 458.0], [39.7, 458.0], [39.8, 458.0], [39.9, 458.0], [40.0, 458.0], [40.1, 458.0], [40.2, 458.0], [40.3, 458.0], [40.4, 458.0], [40.5, 458.0], [40.6, 458.0], [40.7, 458.0], [40.8, 458.0], [40.9, 458.0], [41.0, 459.0], [41.1, 459.0], [41.2, 459.0], [41.3, 459.0], [41.4, 459.0], [41.5, 459.0], [41.6, 459.0], [41.7, 459.0], [41.8, 459.0], [41.9, 459.0], [42.0, 459.0], [42.1, 459.0], [42.2, 459.0], [42.3, 459.0], [42.4, 459.0], [42.5, 459.0], [42.6, 459.0], [42.7, 459.0], [42.8, 459.0], [42.9, 459.0], [43.0, 459.0], [43.1, 459.0], [43.2, 459.0], [43.3, 459.0], [43.4, 459.0], [43.5, 460.0], [43.6, 460.0], [43.7, 460.0], [43.8, 460.0], [43.9, 460.0], [44.0, 460.0], [44.1, 460.0], [44.2, 460.0], [44.3, 460.0], [44.4, 460.0], [44.5, 460.0], [44.6, 460.0], [44.7, 460.0], [44.8, 460.0], [44.9, 460.0], [45.0, 461.0], [45.1, 461.0], [45.2, 461.0], [45.3, 461.0], [45.4, 461.0], [45.5, 461.0], [45.6, 461.0], [45.7, 461.0], [45.8, 461.0], [45.9, 461.0], [46.0, 462.0], [46.1, 462.0], [46.2, 462.0], [46.3, 462.0], [46.4, 462.0], [46.5, 463.0], [46.6, 463.0], [46.7, 463.0], [46.8, 463.0], [46.9, 463.0], [47.0, 464.0], [47.1, 464.0], [47.2, 464.0], [47.3, 464.0], [47.4, 464.0], [47.5, 464.0], [47.6, 464.0], [47.7, 464.0], [47.8, 464.0], [47.9, 464.0], [48.0, 464.0], [48.1, 464.0], [48.2, 464.0], [48.3, 464.0], [48.4, 464.0], [48.5, 465.0], [48.6, 465.0], [48.7, 465.0], [48.8, 465.0], [48.9, 465.0], [49.0, 465.0], [49.1, 465.0], [49.2, 465.0], [49.3, 465.0], [49.4, 465.0], [49.5, 466.0], [49.6, 466.0], [49.7, 466.0], [49.8, 466.0], [49.9, 466.0], [50.0, 466.0], [50.1, 466.0], [50.2, 466.0], [50.3, 466.0], [50.4, 466.0], [50.5, 466.0], [50.6, 466.0], [50.7, 466.0], [50.8, 466.0], [50.9, 466.0], [51.0, 466.0], [51.1, 466.0], [51.2, 466.0], [51.3, 466.0], [51.4, 466.0], [51.5, 466.0], [51.6, 466.0], [51.7, 466.0], [51.8, 466.0], [51.9, 466.0], [52.0, 466.0], [52.1, 467.0], [52.2, 467.0], [52.3, 467.0], [52.4, 467.0], [52.5, 467.0], [52.6, 467.0], [52.7, 467.0], [52.8, 467.0], [52.9, 467.0], [53.0, 467.0], [53.1, 467.0], [53.2, 467.0], [53.3, 467.0], [53.4, 467.0], [53.5, 467.0], [53.6, 467.0], [53.7, 467.0], [53.8, 467.0], [53.9, 467.0], [54.0, 467.0], [54.1, 468.0], [54.2, 468.0], [54.3, 468.0], [54.4, 468.0], [54.5, 468.0], [54.6, 468.0], [54.7, 468.0], [54.8, 468.0], [54.9, 468.0], [55.0, 468.0], [55.1, 468.0], [55.2, 468.0], [55.3, 468.0], [55.4, 468.0], [55.5, 468.0], [55.6, 470.0], [55.7, 470.0], [55.8, 470.0], [55.9, 470.0], [56.0, 470.0], [56.1, 471.0], [56.2, 471.0], [56.3, 471.0], [56.4, 471.0], [56.5, 471.0], [56.6, 471.0], [56.7, 471.0], [56.8, 471.0], [56.9, 471.0], [57.0, 471.0], [57.1, 472.0], [57.2, 472.0], [57.3, 472.0], [57.4, 472.0], [57.5, 472.0], [57.6, 473.0], [57.7, 473.0], [57.8, 473.0], [57.9, 473.0], [58.0, 473.0], [58.1, 473.0], [58.2, 473.0], [58.3, 473.0], [58.4, 473.0], [58.5, 473.0], [58.6, 473.0], [58.7, 473.0], [58.8, 473.0], [58.9, 473.0], [59.0, 473.0], [59.1, 475.0], [59.2, 475.0], [59.3, 475.0], [59.4, 475.0], [59.5, 475.0], [59.6, 475.0], [59.7, 475.0], [59.8, 475.0], [59.9, 475.0], [60.0, 475.0], [60.1, 475.0], [60.2, 475.0], [60.3, 475.0], [60.4, 475.0], [60.5, 475.0], [60.6, 475.0], [60.7, 475.0], [60.8, 475.0], [60.9, 475.0], [61.0, 475.0], [61.1, 475.0], [61.2, 476.0], [61.3, 476.0], [61.4, 476.0], [61.5, 476.0], [61.6, 476.0], [61.7, 477.0], [61.8, 477.0], [61.9, 477.0], [62.0, 477.0], [62.1, 477.0], [62.2, 477.0], [62.3, 477.0], [62.4, 477.0], [62.5, 477.0], [62.6, 477.0], [62.7, 477.0], [62.8, 477.0], [62.9, 477.0], [63.0, 477.0], [63.1, 477.0], [63.2, 478.0], [63.3, 478.0], [63.4, 478.0], [63.5, 478.0], [63.6, 478.0], [63.7, 478.0], [63.8, 478.0], [63.9, 478.0], [64.0, 478.0], [64.1, 478.0], [64.2, 479.0], [64.3, 479.0], [64.4, 479.0], [64.5, 479.0], [64.6, 479.0], [64.7, 481.0], [64.8, 481.0], [64.9, 481.0], [65.0, 481.0], [65.1, 481.0], [65.2, 481.0], [65.3, 481.0], [65.4, 481.0], [65.5, 481.0], [65.6, 481.0], [65.7, 481.0], [65.8, 481.0], [65.9, 481.0], [66.0, 481.0], [66.1, 481.0], [66.2, 484.0], [66.3, 484.0], [66.4, 484.0], [66.5, 484.0], [66.6, 484.0], [66.7, 486.0], [66.8, 486.0], [66.9, 486.0], [67.0, 486.0], [67.1, 486.0], [67.2, 486.0], [67.3, 486.0], [67.4, 486.0], [67.5, 486.0], [67.6, 486.0], [67.7, 487.0], [67.8, 487.0], [67.9, 487.0], [68.0, 487.0], [68.1, 487.0], [68.2, 487.0], [68.3, 487.0], [68.4, 487.0], [68.5, 487.0], [68.6, 487.0], [68.7, 488.0], [68.8, 488.0], [68.9, 488.0], [69.0, 488.0], [69.1, 488.0], [69.2, 490.0], [69.3, 490.0], [69.4, 490.0], [69.5, 490.0], [69.6, 490.0], [69.7, 490.0], [69.8, 490.0], [69.9, 490.0], [70.0, 490.0], [70.1, 490.0], [70.2, 490.0], [70.3, 491.0], [70.4, 491.0], [70.5, 491.0], [70.6, 491.0], [70.7, 491.0], [70.8, 492.0], [70.9, 492.0], [71.0, 492.0], [71.1, 492.0], [71.2, 492.0], [71.3, 494.0], [71.4, 494.0], [71.5, 494.0], [71.6, 494.0], [71.7, 494.0], [71.8, 496.0], [71.9, 496.0], [72.0, 496.0], [72.1, 496.0], [72.2, 496.0], [72.3, 496.0], [72.4, 496.0], [72.5, 496.0], [72.6, 496.0], [72.7, 496.0], [72.8, 498.0], [72.9, 498.0], [73.0, 498.0], [73.1, 498.0], [73.2, 498.0], [73.3, 498.0], [73.4, 498.0], [73.5, 498.0], [73.6, 498.0], [73.7, 498.0], [73.8, 499.0], [73.9, 499.0], [74.0, 499.0], [74.1, 499.0], [74.2, 499.0], [74.3, 499.0], [74.4, 499.0], [74.5, 499.0], [74.6, 499.0], [74.7, 499.0], [74.8, 499.0], [74.9, 499.0], [75.0, 499.0], [75.1, 499.0], [75.2, 499.0], [75.3, 499.0], [75.4, 499.0], [75.5, 499.0], [75.6, 499.0], [75.7, 499.0], [75.8, 500.0], [75.9, 500.0], [76.0, 500.0], [76.1, 500.0], [76.2, 500.0], [76.3, 501.0], [76.4, 501.0], [76.5, 501.0], [76.6, 501.0], [76.7, 501.0], [76.8, 501.0], [76.9, 501.0], [77.0, 501.0], [77.1, 501.0], [77.2, 501.0], [77.3, 502.0], [77.4, 502.0], [77.5, 502.0], [77.6, 502.0], [77.7, 502.0], [77.8, 502.0], [77.9, 502.0], [78.0, 502.0], [78.1, 502.0], [78.2, 502.0], [78.3, 507.0], [78.4, 507.0], [78.5, 507.0], [78.6, 507.0], [78.7, 507.0], [78.8, 508.0], [78.9, 508.0], [79.0, 508.0], [79.1, 508.0], [79.2, 508.0], [79.3, 510.0], [79.4, 510.0], [79.5, 510.0], [79.6, 510.0], [79.7, 510.0], [79.8, 510.0], [79.9, 510.0], [80.0, 510.0], [80.1, 510.0], [80.2, 510.0], [80.3, 510.0], [80.4, 511.0], [80.5, 511.0], [80.6, 511.0], [80.7, 511.0], [80.8, 511.0], [80.9, 511.0], [81.0, 511.0], [81.1, 511.0], [81.2, 511.0], [81.3, 511.0], [81.4, 524.0], [81.5, 524.0], [81.6, 524.0], [81.7, 524.0], [81.8, 524.0], [81.9, 526.0], [82.0, 526.0], [82.1, 526.0], [82.2, 526.0], [82.3, 526.0], [82.4, 528.0], [82.5, 528.0], [82.6, 528.0], [82.7, 528.0], [82.8, 528.0], [82.9, 528.0], [83.0, 528.0], [83.1, 528.0], [83.2, 528.0], [83.3, 528.0], [83.4, 529.0], [83.5, 529.0], [83.6, 529.0], [83.7, 529.0], [83.8, 529.0], [83.9, 530.0], [84.0, 530.0], [84.1, 530.0], [84.2, 530.0], [84.3, 530.0], [84.4, 530.0], [84.5, 530.0], [84.6, 530.0], [84.7, 530.0], [84.8, 530.0], [84.9, 531.0], [85.0, 531.0], [85.1, 531.0], [85.2, 531.0], [85.3, 531.0], [85.4, 532.0], [85.5, 532.0], [85.6, 532.0], [85.7, 532.0], [85.8, 532.0], [85.9, 534.0], [86.0, 534.0], [86.1, 534.0], [86.2, 534.0], [86.3, 534.0], [86.4, 536.0], [86.5, 536.0], [86.6, 536.0], [86.7, 536.0], [86.8, 536.0], [86.9, 536.0], [87.0, 536.0], [87.1, 536.0], [87.2, 536.0], [87.3, 536.0], [87.4, 538.0], [87.5, 538.0], [87.6, 538.0], [87.7, 538.0], [87.8, 538.0], [87.9, 538.0], [88.0, 538.0], [88.1, 538.0], [88.2, 538.0], [88.3, 538.0], [88.4, 541.0], [88.5, 541.0], [88.6, 541.0], [88.7, 541.0], [88.8, 541.0], [88.9, 544.0], [89.0, 544.0], [89.1, 544.0], [89.2, 544.0], [89.3, 544.0], [89.4, 545.0], [89.5, 545.0], [89.6, 545.0], [89.7, 545.0], [89.8, 545.0], [89.9, 545.0], [90.0, 545.0], [90.1, 545.0], [90.2, 545.0], [90.3, 545.0], [90.4, 545.0], [90.5, 546.0], [90.6, 546.0], [90.7, 546.0], [90.8, 546.0], [90.9, 546.0], [91.0, 547.0], [91.1, 547.0], [91.2, 547.0], [91.3, 547.0], [91.4, 547.0], [91.5, 549.0], [91.6, 549.0], [91.7, 549.0], [91.8, 549.0], [91.9, 549.0], [92.0, 551.0], [92.1, 551.0], [92.2, 551.0], [92.3, 551.0], [92.4, 551.0], [92.5, 553.0], [92.6, 553.0], [92.7, 553.0], [92.8, 553.0], [92.9, 553.0], [93.0, 554.0], [93.1, 554.0], [93.2, 554.0], [93.3, 554.0], [93.4, 554.0], [93.5, 556.0], [93.6, 556.0], [93.7, 556.0], [93.8, 556.0], [93.9, 556.0], [94.0, 556.0], [94.1, 556.0], [94.2, 556.0], [94.3, 556.0], [94.4, 556.0], [94.5, 556.0], [94.6, 556.0], [94.7, 556.0], [94.8, 556.0], [94.9, 556.0], [95.0, 556.0], [95.1, 556.0], [95.2, 556.0], [95.3, 556.0], [95.4, 556.0], [95.5, 557.0], [95.6, 557.0], [95.7, 557.0], [95.8, 557.0], [95.9, 557.0], [96.0, 558.0], [96.1, 558.0], [96.2, 558.0], [96.3, 558.0], [96.4, 558.0], [96.5, 558.0], [96.6, 558.0], [96.7, 558.0], [96.8, 558.0], [96.9, 558.0], [97.0, 560.0], [97.1, 560.0], [97.2, 560.0], [97.3, 560.0], [97.4, 560.0], [97.5, 560.0], [97.6, 560.0], [97.7, 560.0], [97.8, 560.0], [97.9, 560.0], [98.0, 563.0], [98.1, 563.0], [98.2, 563.0], [98.3, 563.0], [98.4, 563.0], [98.5, 563.0], [98.6, 563.0], [98.7, 563.0], [98.8, 563.0], [98.9, 563.0], [99.0, 566.0], [99.1, 566.0], [99.2, 566.0], [99.3, 566.0], [99.4, 566.0], [99.5, 573.0], [99.6, 573.0], [99.7, 573.0], [99.8, 573.0], [99.9, 573.0], [100.0, 573.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 134.0, "series": [{"data": [[300.0, 6.0], [200.0, 8.0], [100.0, 2.0], [400.0, 134.0], [500.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 47.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 151.0, "series": [{"data": [[0.0, 151.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 47.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.585858585858585, "minX": 1.60400928E12, "maxY": 9.585858585858585, "series": [{"data": [[1.60400928E12, 9.585858585858585]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60400928E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 278.75, "minX": 1.0, "maxY": 560.0, "series": [{"data": [[4.0, 373.5], [8.0, 353.3333333333333], [2.0, 553.0], [1.0, 558.0], [9.0, 386.6666666666667], [5.0, 346.0], [10.0, 473.4438202247191], [6.0, 278.75], [3.0, 560.0], [7.0, 390.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.585858585858585, 463.85858585858585]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1588.9, "minX": 1.60400928E12, "maxY": 3131.6666666666665, "series": [{"data": [[1.60400928E12, 3131.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60400928E12, 1588.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60400928E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 463.85858585858585, "minX": 1.60400928E12, "maxY": 463.85858585858585, "series": [{"data": [[1.60400928E12, 463.85858585858585]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60400928E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 463.7575757575758, "minX": 1.60400928E12, "maxY": 463.7575757575758, "series": [{"data": [[1.60400928E12, 463.7575757575758]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60400928E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.40909090909090895, "minX": 1.60400928E12, "maxY": 0.40909090909090895, "series": [{"data": [[1.60400928E12, 0.40909090909090895]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60400928E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 187.0, "minX": 1.60400928E12, "maxY": 573.0, "series": [{"data": [[1.60400928E12, 573.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60400928E12, 190.95499976277353]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60400928E12, 191.8505000948906]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60400928E12, 191.45249988138676]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60400928E12, 187.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60400928E12, 466.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60400928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 206.0, "minX": 5.0, "maxY": 549.0, "series": [{"data": [[18.0, 534.0], [19.0, 544.0], [5.0, 206.0], [20.0, 466.0], [21.0, 460.0], [22.0, 459.5], [23.0, 459.0], [6.0, 549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 206.0, "minX": 5.0, "maxY": 549.0, "series": [{"data": [[18.0, 534.0], [19.0, 544.0], [5.0, 206.0], [20.0, 466.0], [21.0, 460.0], [22.0, 459.5], [23.0, 459.0], [6.0, 549.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3, "minX": 1.60400928E12, "maxY": 3.3, "series": [{"data": [[1.60400928E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60400928E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3, "minX": 1.60400928E12, "maxY": 3.3, "series": [{"data": [[1.60400928E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60400928E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3, "minX": 1.60400928E12, "maxY": 3.3, "series": [{"data": [[1.60400928E12, 3.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60400928E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3, "minX": 1.60400928E12, "maxY": 3.3, "series": [{"data": [[1.60400928E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60400928E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

