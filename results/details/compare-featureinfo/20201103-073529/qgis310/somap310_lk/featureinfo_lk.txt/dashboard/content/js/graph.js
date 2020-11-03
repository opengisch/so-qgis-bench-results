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
        data: {"result": {"minY": 210.0, "minX": 0.0, "maxY": 613.0, "series": [{"data": [[0.0, 210.0], [0.1, 210.0], [0.2, 210.0], [0.3, 210.0], [0.4, 210.0], [0.5, 210.0], [0.6, 225.0], [0.7, 225.0], [0.8, 225.0], [0.9, 225.0], [1.0, 225.0], [1.1, 253.0], [1.2, 253.0], [1.3, 253.0], [1.4, 253.0], [1.5, 253.0], [1.6, 261.0], [1.7, 261.0], [1.8, 261.0], [1.9, 261.0], [2.0, 261.0], [2.1, 273.0], [2.2, 273.0], [2.3, 273.0], [2.4, 273.0], [2.5, 273.0], [2.6, 283.0], [2.7, 283.0], [2.8, 283.0], [2.9, 283.0], [3.0, 283.0], [3.1, 286.0], [3.2, 286.0], [3.3, 286.0], [3.4, 286.0], [3.5, 286.0], [3.6, 299.0], [3.7, 299.0], [3.8, 299.0], [3.9, 299.0], [4.0, 299.0], [4.1, 350.0], [4.2, 350.0], [4.3, 350.0], [4.4, 350.0], [4.5, 350.0], [4.6, 354.0], [4.7, 354.0], [4.8, 354.0], [4.9, 354.0], [5.0, 354.0], [5.1, 380.0], [5.2, 380.0], [5.3, 380.0], [5.4, 380.0], [5.5, 380.0], [5.6, 430.0], [5.7, 430.0], [5.8, 430.0], [5.9, 430.0], [6.0, 430.0], [6.1, 430.0], [6.2, 430.0], [6.3, 430.0], [6.4, 430.0], [6.5, 430.0], [6.6, 461.0], [6.7, 461.0], [6.8, 461.0], [6.9, 461.0], [7.0, 461.0], [7.1, 479.0], [7.2, 479.0], [7.3, 479.0], [7.4, 479.0], [7.5, 479.0], [7.6, 480.0], [7.7, 480.0], [7.8, 480.0], [7.9, 480.0], [8.0, 480.0], [8.1, 482.0], [8.2, 482.0], [8.3, 482.0], [8.4, 482.0], [8.5, 482.0], [8.6, 482.0], [8.7, 482.0], [8.8, 482.0], [8.9, 482.0], [9.0, 482.0], [9.1, 482.0], [9.2, 482.0], [9.3, 482.0], [9.4, 482.0], [9.5, 482.0], [9.6, 490.0], [9.7, 490.0], [9.8, 490.0], [9.9, 490.0], [10.0, 490.0], [10.1, 490.0], [10.2, 499.0], [10.3, 499.0], [10.4, 499.0], [10.5, 499.0], [10.6, 499.0], [10.7, 500.0], [10.8, 500.0], [10.9, 500.0], [11.0, 500.0], [11.1, 500.0], [11.2, 504.0], [11.3, 504.0], [11.4, 504.0], [11.5, 504.0], [11.6, 504.0], [11.7, 504.0], [11.8, 504.0], [11.9, 504.0], [12.0, 504.0], [12.1, 504.0], [12.2, 505.0], [12.3, 505.0], [12.4, 505.0], [12.5, 505.0], [12.6, 505.0], [12.7, 507.0], [12.8, 507.0], [12.9, 507.0], [13.0, 507.0], [13.1, 507.0], [13.2, 508.0], [13.3, 508.0], [13.4, 508.0], [13.5, 508.0], [13.6, 508.0], [13.7, 511.0], [13.8, 511.0], [13.9, 511.0], [14.0, 511.0], [14.1, 511.0], [14.2, 511.0], [14.3, 511.0], [14.4, 511.0], [14.5, 511.0], [14.6, 511.0], [14.7, 516.0], [14.8, 516.0], [14.9, 516.0], [15.0, 516.0], [15.1, 516.0], [15.2, 518.0], [15.3, 518.0], [15.4, 518.0], [15.5, 518.0], [15.6, 518.0], [15.7, 518.0], [15.8, 518.0], [15.9, 518.0], [16.0, 518.0], [16.1, 518.0], [16.2, 520.0], [16.3, 520.0], [16.4, 520.0], [16.5, 520.0], [16.6, 520.0], [16.7, 521.0], [16.8, 521.0], [16.9, 521.0], [17.0, 521.0], [17.1, 521.0], [17.2, 525.0], [17.3, 525.0], [17.4, 525.0], [17.5, 525.0], [17.6, 525.0], [17.7, 527.0], [17.8, 527.0], [17.9, 527.0], [18.0, 527.0], [18.1, 527.0], [18.2, 527.0], [18.3, 527.0], [18.4, 527.0], [18.5, 527.0], [18.6, 527.0], [18.7, 527.0], [18.8, 527.0], [18.9, 527.0], [19.0, 527.0], [19.1, 527.0], [19.2, 527.0], [19.3, 527.0], [19.4, 527.0], [19.5, 527.0], [19.6, 527.0], [19.7, 530.0], [19.8, 530.0], [19.9, 530.0], [20.0, 530.0], [20.1, 530.0], [20.2, 530.0], [20.3, 530.0], [20.4, 530.0], [20.5, 530.0], [20.6, 530.0], [20.7, 530.0], [20.8, 530.0], [20.9, 530.0], [21.0, 530.0], [21.1, 530.0], [21.2, 530.0], [21.3, 531.0], [21.4, 531.0], [21.5, 531.0], [21.6, 531.0], [21.7, 531.0], [21.8, 532.0], [21.9, 532.0], [22.0, 532.0], [22.1, 532.0], [22.2, 532.0], [22.3, 533.0], [22.4, 533.0], [22.5, 533.0], [22.6, 533.0], [22.7, 533.0], [22.8, 534.0], [22.9, 534.0], [23.0, 534.0], [23.1, 534.0], [23.2, 534.0], [23.3, 535.0], [23.4, 535.0], [23.5, 535.0], [23.6, 535.0], [23.7, 535.0], [23.8, 535.0], [23.9, 535.0], [24.0, 535.0], [24.1, 535.0], [24.2, 535.0], [24.3, 537.0], [24.4, 537.0], [24.5, 537.0], [24.6, 537.0], [24.7, 537.0], [24.8, 537.0], [24.9, 537.0], [25.0, 537.0], [25.1, 537.0], [25.2, 537.0], [25.3, 538.0], [25.4, 538.0], [25.5, 538.0], [25.6, 538.0], [25.7, 538.0], [25.8, 539.0], [25.9, 539.0], [26.0, 539.0], [26.1, 539.0], [26.2, 539.0], [26.3, 540.0], [26.4, 540.0], [26.5, 540.0], [26.6, 540.0], [26.7, 540.0], [26.8, 540.0], [26.9, 540.0], [27.0, 540.0], [27.1, 540.0], [27.2, 540.0], [27.3, 540.0], [27.4, 540.0], [27.5, 540.0], [27.6, 540.0], [27.7, 540.0], [27.8, 541.0], [27.9, 541.0], [28.0, 541.0], [28.1, 541.0], [28.2, 541.0], [28.3, 541.0], [28.4, 541.0], [28.5, 541.0], [28.6, 541.0], [28.7, 541.0], [28.8, 541.0], [28.9, 541.0], [29.0, 541.0], [29.1, 541.0], [29.2, 541.0], [29.3, 542.0], [29.4, 542.0], [29.5, 542.0], [29.6, 542.0], [29.7, 542.0], [29.8, 542.0], [29.9, 542.0], [30.0, 542.0], [30.1, 542.0], [30.2, 542.0], [30.3, 542.0], [30.4, 542.0], [30.5, 542.0], [30.6, 542.0], [30.7, 542.0], [30.8, 542.0], [30.9, 542.0], [31.0, 542.0], [31.1, 542.0], [31.2, 542.0], [31.3, 542.0], [31.4, 542.0], [31.5, 542.0], [31.6, 542.0], [31.7, 542.0], [31.8, 542.0], [31.9, 543.0], [32.0, 543.0], [32.1, 543.0], [32.2, 543.0], [32.3, 543.0], [32.4, 543.0], [32.5, 543.0], [32.6, 543.0], [32.7, 543.0], [32.8, 543.0], [32.9, 544.0], [33.0, 544.0], [33.1, 544.0], [33.2, 544.0], [33.3, 544.0], [33.4, 544.0], [33.5, 544.0], [33.6, 544.0], [33.7, 544.0], [33.8, 544.0], [33.9, 545.0], [34.0, 545.0], [34.1, 545.0], [34.2, 545.0], [34.3, 545.0], [34.4, 545.0], [34.5, 545.0], [34.6, 545.0], [34.7, 545.0], [34.8, 545.0], [34.9, 545.0], [35.0, 545.0], [35.1, 545.0], [35.2, 545.0], [35.3, 545.0], [35.4, 545.0], [35.5, 545.0], [35.6, 545.0], [35.7, 545.0], [35.8, 545.0], [35.9, 546.0], [36.0, 546.0], [36.1, 546.0], [36.2, 546.0], [36.3, 546.0], [36.4, 546.0], [36.5, 546.0], [36.6, 546.0], [36.7, 546.0], [36.8, 546.0], [36.9, 546.0], [37.0, 546.0], [37.1, 546.0], [37.2, 546.0], [37.3, 546.0], [37.4, 547.0], [37.5, 547.0], [37.6, 547.0], [37.7, 547.0], [37.8, 547.0], [37.9, 548.0], [38.0, 548.0], [38.1, 548.0], [38.2, 548.0], [38.3, 548.0], [38.4, 548.0], [38.5, 548.0], [38.6, 548.0], [38.7, 548.0], [38.8, 548.0], [38.9, 548.0], [39.0, 548.0], [39.1, 548.0], [39.2, 548.0], [39.3, 548.0], [39.4, 549.0], [39.5, 549.0], [39.6, 549.0], [39.7, 549.0], [39.8, 549.0], [39.9, 550.0], [40.0, 550.0], [40.1, 550.0], [40.2, 550.0], [40.3, 550.0], [40.4, 550.0], [40.5, 550.0], [40.6, 550.0], [40.7, 550.0], [40.8, 550.0], [40.9, 550.0], [41.0, 550.0], [41.1, 550.0], [41.2, 550.0], [41.3, 550.0], [41.4, 550.0], [41.5, 551.0], [41.6, 551.0], [41.7, 551.0], [41.8, 551.0], [41.9, 551.0], [42.0, 552.0], [42.1, 552.0], [42.2, 552.0], [42.3, 552.0], [42.4, 552.0], [42.5, 552.0], [42.6, 552.0], [42.7, 552.0], [42.8, 552.0], [42.9, 552.0], [43.0, 552.0], [43.1, 552.0], [43.2, 552.0], [43.3, 552.0], [43.4, 552.0], [43.5, 552.0], [43.6, 552.0], [43.7, 552.0], [43.8, 552.0], [43.9, 552.0], [44.0, 552.0], [44.1, 552.0], [44.2, 552.0], [44.3, 552.0], [44.4, 552.0], [44.5, 553.0], [44.6, 553.0], [44.7, 553.0], [44.8, 553.0], [44.9, 553.0], [45.0, 553.0], [45.1, 553.0], [45.2, 553.0], [45.3, 553.0], [45.4, 553.0], [45.5, 554.0], [45.6, 554.0], [45.7, 554.0], [45.8, 554.0], [45.9, 554.0], [46.0, 554.0], [46.1, 554.0], [46.2, 554.0], [46.3, 554.0], [46.4, 554.0], [46.5, 555.0], [46.6, 555.0], [46.7, 555.0], [46.8, 555.0], [46.9, 555.0], [47.0, 555.0], [47.1, 555.0], [47.2, 555.0], [47.3, 555.0], [47.4, 555.0], [47.5, 556.0], [47.6, 556.0], [47.7, 556.0], [47.8, 556.0], [47.9, 556.0], [48.0, 557.0], [48.1, 557.0], [48.2, 557.0], [48.3, 557.0], [48.4, 557.0], [48.5, 558.0], [48.6, 558.0], [48.7, 558.0], [48.8, 558.0], [48.9, 558.0], [49.0, 559.0], [49.1, 559.0], [49.2, 559.0], [49.3, 559.0], [49.4, 559.0], [49.5, 559.0], [49.6, 559.0], [49.7, 559.0], [49.8, 559.0], [49.9, 559.0], [50.0, 559.0], [50.1, 560.0], [50.2, 560.0], [50.3, 560.0], [50.4, 560.0], [50.5, 560.0], [50.6, 560.0], [50.7, 560.0], [50.8, 560.0], [50.9, 560.0], [51.0, 560.0], [51.1, 561.0], [51.2, 561.0], [51.3, 561.0], [51.4, 561.0], [51.5, 561.0], [51.6, 561.0], [51.7, 561.0], [51.8, 561.0], [51.9, 561.0], [52.0, 561.0], [52.1, 561.0], [52.2, 561.0], [52.3, 561.0], [52.4, 561.0], [52.5, 561.0], [52.6, 561.0], [52.7, 561.0], [52.8, 561.0], [52.9, 561.0], [53.0, 561.0], [53.1, 561.0], [53.2, 561.0], [53.3, 561.0], [53.4, 561.0], [53.5, 561.0], [53.6, 563.0], [53.7, 563.0], [53.8, 563.0], [53.9, 563.0], [54.0, 563.0], [54.1, 563.0], [54.2, 563.0], [54.3, 563.0], [54.4, 563.0], [54.5, 563.0], [54.6, 563.0], [54.7, 563.0], [54.8, 563.0], [54.9, 563.0], [55.0, 563.0], [55.1, 563.0], [55.2, 563.0], [55.3, 563.0], [55.4, 563.0], [55.5, 563.0], [55.6, 564.0], [55.7, 564.0], [55.8, 564.0], [55.9, 564.0], [56.0, 564.0], [56.1, 564.0], [56.2, 564.0], [56.3, 564.0], [56.4, 564.0], [56.5, 564.0], [56.6, 564.0], [56.7, 564.0], [56.8, 564.0], [56.9, 564.0], [57.0, 564.0], [57.1, 564.0], [57.2, 564.0], [57.3, 564.0], [57.4, 564.0], [57.5, 564.0], [57.6, 565.0], [57.7, 565.0], [57.8, 565.0], [57.9, 565.0], [58.0, 565.0], [58.1, 566.0], [58.2, 566.0], [58.3, 566.0], [58.4, 566.0], [58.5, 566.0], [58.6, 566.0], [58.7, 566.0], [58.8, 566.0], [58.9, 566.0], [59.0, 566.0], [59.1, 566.0], [59.2, 566.0], [59.3, 566.0], [59.4, 566.0], [59.5, 566.0], [59.6, 567.0], [59.7, 567.0], [59.8, 567.0], [59.9, 567.0], [60.0, 567.0], [60.1, 567.0], [60.2, 567.0], [60.3, 567.0], [60.4, 567.0], [60.5, 567.0], [60.6, 567.0], [60.7, 567.0], [60.8, 567.0], [60.9, 567.0], [61.0, 567.0], [61.1, 567.0], [61.2, 567.0], [61.3, 567.0], [61.4, 567.0], [61.5, 567.0], [61.6, 567.0], [61.7, 568.0], [61.8, 568.0], [61.9, 568.0], [62.0, 568.0], [62.1, 568.0], [62.2, 568.0], [62.3, 568.0], [62.4, 568.0], [62.5, 568.0], [62.6, 568.0], [62.7, 568.0], [62.8, 568.0], [62.9, 568.0], [63.0, 568.0], [63.1, 568.0], [63.2, 568.0], [63.3, 568.0], [63.4, 568.0], [63.5, 568.0], [63.6, 568.0], [63.7, 569.0], [63.8, 569.0], [63.9, 569.0], [64.0, 569.0], [64.1, 569.0], [64.2, 569.0], [64.3, 569.0], [64.4, 569.0], [64.5, 569.0], [64.6, 569.0], [64.7, 570.0], [64.8, 570.0], [64.9, 570.0], [65.0, 570.0], [65.1, 570.0], [65.2, 570.0], [65.3, 570.0], [65.4, 570.0], [65.5, 570.0], [65.6, 570.0], [65.7, 571.0], [65.8, 571.0], [65.9, 571.0], [66.0, 571.0], [66.1, 571.0], [66.2, 571.0], [66.3, 571.0], [66.4, 571.0], [66.5, 571.0], [66.6, 571.0], [66.7, 571.0], [66.8, 571.0], [66.9, 571.0], [67.0, 571.0], [67.1, 571.0], [67.2, 571.0], [67.3, 571.0], [67.4, 571.0], [67.5, 571.0], [67.6, 571.0], [67.7, 572.0], [67.8, 572.0], [67.9, 572.0], [68.0, 572.0], [68.1, 572.0], [68.2, 574.0], [68.3, 574.0], [68.4, 574.0], [68.5, 574.0], [68.6, 574.0], [68.7, 574.0], [68.8, 574.0], [68.9, 574.0], [69.0, 574.0], [69.1, 574.0], [69.2, 574.0], [69.3, 574.0], [69.4, 574.0], [69.5, 574.0], [69.6, 574.0], [69.7, 574.0], [69.8, 574.0], [69.9, 574.0], [70.0, 574.0], [70.1, 574.0], [70.2, 574.0], [70.3, 575.0], [70.4, 575.0], [70.5, 575.0], [70.6, 575.0], [70.7, 575.0], [70.8, 575.0], [70.9, 575.0], [71.0, 575.0], [71.1, 575.0], [71.2, 575.0], [71.3, 575.0], [71.4, 575.0], [71.5, 575.0], [71.6, 575.0], [71.7, 575.0], [71.8, 576.0], [71.9, 576.0], [72.0, 576.0], [72.1, 576.0], [72.2, 576.0], [72.3, 576.0], [72.4, 576.0], [72.5, 576.0], [72.6, 576.0], [72.7, 576.0], [72.8, 576.0], [72.9, 576.0], [73.0, 576.0], [73.1, 576.0], [73.2, 576.0], [73.3, 576.0], [73.4, 576.0], [73.5, 576.0], [73.6, 576.0], [73.7, 576.0], [73.8, 576.0], [73.9, 576.0], [74.0, 576.0], [74.1, 576.0], [74.2, 576.0], [74.3, 578.0], [74.4, 578.0], [74.5, 578.0], [74.6, 578.0], [74.7, 578.0], [74.8, 580.0], [74.9, 580.0], [75.0, 580.0], [75.1, 580.0], [75.2, 580.0], [75.3, 580.0], [75.4, 580.0], [75.5, 580.0], [75.6, 580.0], [75.7, 580.0], [75.8, 581.0], [75.9, 581.0], [76.0, 581.0], [76.1, 581.0], [76.2, 581.0], [76.3, 581.0], [76.4, 581.0], [76.5, 581.0], [76.6, 581.0], [76.7, 581.0], [76.8, 581.0], [76.9, 581.0], [77.0, 581.0], [77.1, 581.0], [77.2, 581.0], [77.3, 581.0], [77.4, 581.0], [77.5, 581.0], [77.6, 581.0], [77.7, 581.0], [77.8, 582.0], [77.9, 582.0], [78.0, 582.0], [78.1, 582.0], [78.2, 582.0], [78.3, 582.0], [78.4, 582.0], [78.5, 582.0], [78.6, 582.0], [78.7, 582.0], [78.8, 582.0], [78.9, 582.0], [79.0, 582.0], [79.1, 582.0], [79.2, 582.0], [79.3, 583.0], [79.4, 583.0], [79.5, 583.0], [79.6, 583.0], [79.7, 583.0], [79.8, 584.0], [79.9, 584.0], [80.0, 584.0], [80.1, 584.0], [80.2, 584.0], [80.3, 584.0], [80.4, 584.0], [80.5, 584.0], [80.6, 584.0], [80.7, 584.0], [80.8, 584.0], [80.9, 584.0], [81.0, 584.0], [81.1, 584.0], [81.2, 584.0], [81.3, 584.0], [81.4, 585.0], [81.5, 585.0], [81.6, 585.0], [81.7, 585.0], [81.8, 585.0], [81.9, 586.0], [82.0, 586.0], [82.1, 586.0], [82.2, 586.0], [82.3, 586.0], [82.4, 586.0], [82.5, 586.0], [82.6, 586.0], [82.7, 586.0], [82.8, 586.0], [82.9, 587.0], [83.0, 587.0], [83.1, 587.0], [83.2, 587.0], [83.3, 587.0], [83.4, 590.0], [83.5, 590.0], [83.6, 590.0], [83.7, 590.0], [83.8, 590.0], [83.9, 590.0], [84.0, 590.0], [84.1, 590.0], [84.2, 590.0], [84.3, 590.0], [84.4, 590.0], [84.5, 590.0], [84.6, 590.0], [84.7, 590.0], [84.8, 590.0], [84.9, 590.0], [85.0, 590.0], [85.1, 590.0], [85.2, 590.0], [85.3, 590.0], [85.4, 591.0], [85.5, 591.0], [85.6, 591.0], [85.7, 591.0], [85.8, 591.0], [85.9, 591.0], [86.0, 591.0], [86.1, 591.0], [86.2, 591.0], [86.3, 591.0], [86.4, 592.0], [86.5, 592.0], [86.6, 592.0], [86.7, 592.0], [86.8, 592.0], [86.9, 593.0], [87.0, 593.0], [87.1, 593.0], [87.2, 593.0], [87.3, 593.0], [87.4, 593.0], [87.5, 593.0], [87.6, 593.0], [87.7, 593.0], [87.8, 593.0], [87.9, 593.0], [88.0, 593.0], [88.1, 593.0], [88.2, 593.0], [88.3, 593.0], [88.4, 594.0], [88.5, 594.0], [88.6, 594.0], [88.7, 594.0], [88.8, 594.0], [88.9, 594.0], [89.0, 594.0], [89.1, 594.0], [89.2, 594.0], [89.3, 594.0], [89.4, 596.0], [89.5, 596.0], [89.6, 596.0], [89.7, 596.0], [89.8, 596.0], [89.9, 596.0], [90.0, 596.0], [90.1, 596.0], [90.2, 596.0], [90.3, 596.0], [90.4, 596.0], [90.5, 597.0], [90.6, 597.0], [90.7, 597.0], [90.8, 597.0], [90.9, 597.0], [91.0, 597.0], [91.1, 597.0], [91.2, 597.0], [91.3, 597.0], [91.4, 597.0], [91.5, 597.0], [91.6, 597.0], [91.7, 597.0], [91.8, 597.0], [91.9, 597.0], [92.0, 598.0], [92.1, 598.0], [92.2, 598.0], [92.3, 598.0], [92.4, 598.0], [92.5, 599.0], [92.6, 599.0], [92.7, 599.0], [92.8, 599.0], [92.9, 599.0], [93.0, 599.0], [93.1, 599.0], [93.2, 599.0], [93.3, 599.0], [93.4, 599.0], [93.5, 599.0], [93.6, 599.0], [93.7, 599.0], [93.8, 599.0], [93.9, 599.0], [94.0, 602.0], [94.1, 602.0], [94.2, 602.0], [94.3, 602.0], [94.4, 602.0], [94.5, 603.0], [94.6, 603.0], [94.7, 603.0], [94.8, 603.0], [94.9, 603.0], [95.0, 603.0], [95.1, 603.0], [95.2, 603.0], [95.3, 603.0], [95.4, 603.0], [95.5, 603.0], [95.6, 603.0], [95.7, 603.0], [95.8, 603.0], [95.9, 603.0], [96.0, 604.0], [96.1, 604.0], [96.2, 604.0], [96.3, 604.0], [96.4, 604.0], [96.5, 606.0], [96.6, 606.0], [96.7, 606.0], [96.8, 606.0], [96.9, 606.0], [97.0, 607.0], [97.1, 607.0], [97.2, 607.0], [97.3, 607.0], [97.4, 607.0], [97.5, 608.0], [97.6, 608.0], [97.7, 608.0], [97.8, 608.0], [97.9, 608.0], [98.0, 611.0], [98.1, 611.0], [98.2, 611.0], [98.3, 611.0], [98.4, 611.0], [98.5, 612.0], [98.6, 612.0], [98.7, 612.0], [98.8, 612.0], [98.9, 612.0], [99.0, 612.0], [99.1, 612.0], [99.2, 612.0], [99.3, 612.0], [99.4, 612.0], [99.5, 613.0], [99.6, 613.0], [99.7, 613.0], [99.8, 613.0], [99.9, 613.0], [100.0, 613.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 165.0, "series": [{"data": [[300.0, 3.0], [600.0, 12.0], [200.0, 8.0], [400.0, 10.0], [500.0, 165.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 176.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 176.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.616161616161614, "minX": 1.60438896E12, "maxY": 9.616161616161614, "series": [{"data": [[1.60438896E12, 9.616161616161614]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438896E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 344.0, "minX": 1.0, "maxY": 567.0, "series": [{"data": [[4.0, 389.5], [8.0, 383.3333333333333], [2.0, 561.0], [1.0, 563.0], [9.0, 453.0], [5.0, 368.6666666666667], [10.0, 555.1055555555556], [6.0, 401.5], [3.0, 567.0], [7.0, 344.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.616161616161614, 542.3535353535354]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1588.9, "minX": 1.60438896E12, "maxY": 3131.6666666666665, "series": [{"data": [[1.60438896E12, 3131.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438896E12, 1588.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438896E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 542.3535353535354, "minX": 1.60438896E12, "maxY": 542.3535353535354, "series": [{"data": [[1.60438896E12, 542.3535353535354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438896E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 542.2626262626263, "minX": 1.60438896E12, "maxY": 542.2626262626263, "series": [{"data": [[1.60438896E12, 542.2626262626263]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438896E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.45959595959595934, "minX": 1.60438896E12, "maxY": 0.45959595959595934, "series": [{"data": [[1.60438896E12, 0.45959595959595934]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438896E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 210.0, "minX": 1.60438896E12, "maxY": 613.0, "series": [{"data": [[1.60438896E12, 613.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438896E12, 221.86499928832055]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438896E12, 224.5515002846718]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438896E12, 223.35749964416027]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438896E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438896E12, 559.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438896E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 513.5, "minX": 3.0, "maxY": 598.5, "series": [{"data": [[16.0, 598.5], [17.0, 548.0], [18.0, 568.5], [19.0, 540.0], [20.0, 513.5], [3.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 513.5, "minX": 3.0, "maxY": 598.5, "series": [{"data": [[16.0, 598.5], [17.0, 548.0], [18.0, 568.5], [19.0, 540.0], [20.0, 513.5], [3.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60438896E12, "maxY": 3.3, "series": [{"data": [[1.60438896E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438896E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60438896E12, "maxY": 3.3, "series": [{"data": [[1.60438896E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438896E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60438896E12, "maxY": 3.3, "series": [{"data": [[1.60438896E12, 3.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438896E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60438896E12, "maxY": 3.3, "series": [{"data": [[1.60438896E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438896E12, "title": "Total Transactions Per Second"}},
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

