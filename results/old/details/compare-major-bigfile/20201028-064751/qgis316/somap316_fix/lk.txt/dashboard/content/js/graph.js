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
        data: {"result": {"minY": 295.0, "minX": 0.0, "maxY": 881.0, "series": [{"data": [[0.0, 295.0], [0.1, 295.0], [0.2, 295.0], [0.3, 295.0], [0.4, 295.0], [0.5, 295.0], [0.6, 295.0], [0.7, 295.0], [0.8, 295.0], [0.9, 295.0], [1.0, 295.0], [1.1, 295.0], [1.2, 295.0], [1.3, 295.0], [1.4, 295.0], [1.5, 295.0], [1.6, 295.0], [1.7, 295.0], [1.8, 295.0], [1.9, 295.0], [2.0, 295.0], [2.1, 295.0], [2.2, 295.0], [2.3, 295.0], [2.4, 295.0], [2.5, 295.0], [2.6, 295.0], [2.7, 295.0], [2.8, 295.0], [2.9, 295.0], [3.0, 295.0], [3.1, 295.0], [3.2, 295.0], [3.3, 295.0], [3.4, 371.0], [3.5, 371.0], [3.6, 371.0], [3.7, 371.0], [3.8, 371.0], [3.9, 371.0], [4.0, 371.0], [4.1, 371.0], [4.2, 371.0], [4.3, 371.0], [4.4, 371.0], [4.5, 371.0], [4.6, 371.0], [4.7, 371.0], [4.8, 371.0], [4.9, 371.0], [5.0, 371.0], [5.1, 371.0], [5.2, 371.0], [5.3, 371.0], [5.4, 371.0], [5.5, 371.0], [5.6, 371.0], [5.7, 371.0], [5.8, 371.0], [5.9, 371.0], [6.0, 371.0], [6.1, 371.0], [6.2, 371.0], [6.3, 371.0], [6.4, 371.0], [6.5, 371.0], [6.6, 371.0], [6.7, 400.0], [6.8, 400.0], [6.9, 400.0], [7.0, 400.0], [7.1, 400.0], [7.2, 400.0], [7.3, 400.0], [7.4, 400.0], [7.5, 400.0], [7.6, 400.0], [7.7, 400.0], [7.8, 400.0], [7.9, 400.0], [8.0, 400.0], [8.1, 400.0], [8.2, 400.0], [8.3, 400.0], [8.4, 400.0], [8.5, 400.0], [8.6, 400.0], [8.7, 400.0], [8.8, 400.0], [8.9, 400.0], [9.0, 400.0], [9.1, 400.0], [9.2, 400.0], [9.3, 400.0], [9.4, 400.0], [9.5, 400.0], [9.6, 400.0], [9.7, 400.0], [9.8, 400.0], [9.9, 400.0], [10.0, 408.0], [10.1, 408.0], [10.2, 408.0], [10.3, 408.0], [10.4, 408.0], [10.5, 408.0], [10.6, 408.0], [10.7, 408.0], [10.8, 408.0], [10.9, 408.0], [11.0, 408.0], [11.1, 408.0], [11.2, 408.0], [11.3, 408.0], [11.4, 408.0], [11.5, 408.0], [11.6, 408.0], [11.7, 408.0], [11.8, 408.0], [11.9, 408.0], [12.0, 408.0], [12.1, 408.0], [12.2, 408.0], [12.3, 408.0], [12.4, 408.0], [12.5, 408.0], [12.6, 408.0], [12.7, 408.0], [12.8, 408.0], [12.9, 408.0], [13.0, 408.0], [13.1, 408.0], [13.2, 408.0], [13.3, 408.0], [13.4, 415.0], [13.5, 415.0], [13.6, 415.0], [13.7, 415.0], [13.8, 415.0], [13.9, 415.0], [14.0, 415.0], [14.1, 415.0], [14.2, 415.0], [14.3, 415.0], [14.4, 415.0], [14.5, 415.0], [14.6, 415.0], [14.7, 415.0], [14.8, 415.0], [14.9, 415.0], [15.0, 415.0], [15.1, 415.0], [15.2, 415.0], [15.3, 415.0], [15.4, 415.0], [15.5, 415.0], [15.6, 415.0], [15.7, 415.0], [15.8, 415.0], [15.9, 415.0], [16.0, 415.0], [16.1, 415.0], [16.2, 415.0], [16.3, 415.0], [16.4, 415.0], [16.5, 415.0], [16.6, 415.0], [16.7, 430.0], [16.8, 430.0], [16.9, 430.0], [17.0, 430.0], [17.1, 430.0], [17.2, 430.0], [17.3, 430.0], [17.4, 430.0], [17.5, 430.0], [17.6, 430.0], [17.7, 430.0], [17.8, 430.0], [17.9, 430.0], [18.0, 430.0], [18.1, 430.0], [18.2, 430.0], [18.3, 430.0], [18.4, 430.0], [18.5, 430.0], [18.6, 430.0], [18.7, 430.0], [18.8, 430.0], [18.9, 430.0], [19.0, 430.0], [19.1, 430.0], [19.2, 430.0], [19.3, 430.0], [19.4, 430.0], [19.5, 430.0], [19.6, 430.0], [19.7, 430.0], [19.8, 430.0], [19.9, 430.0], [20.0, 483.0], [20.1, 483.0], [20.2, 483.0], [20.3, 483.0], [20.4, 483.0], [20.5, 483.0], [20.6, 483.0], [20.7, 483.0], [20.8, 483.0], [20.9, 483.0], [21.0, 483.0], [21.1, 483.0], [21.2, 483.0], [21.3, 483.0], [21.4, 483.0], [21.5, 483.0], [21.6, 483.0], [21.7, 483.0], [21.8, 483.0], [21.9, 483.0], [22.0, 483.0], [22.1, 483.0], [22.2, 483.0], [22.3, 483.0], [22.4, 483.0], [22.5, 483.0], [22.6, 483.0], [22.7, 483.0], [22.8, 483.0], [22.9, 483.0], [23.0, 483.0], [23.1, 483.0], [23.2, 483.0], [23.3, 483.0], [23.4, 557.0], [23.5, 557.0], [23.6, 557.0], [23.7, 557.0], [23.8, 557.0], [23.9, 557.0], [24.0, 557.0], [24.1, 557.0], [24.2, 557.0], [24.3, 557.0], [24.4, 557.0], [24.5, 557.0], [24.6, 557.0], [24.7, 557.0], [24.8, 557.0], [24.9, 557.0], [25.0, 557.0], [25.1, 557.0], [25.2, 557.0], [25.3, 557.0], [25.4, 557.0], [25.5, 557.0], [25.6, 557.0], [25.7, 557.0], [25.8, 557.0], [25.9, 557.0], [26.0, 557.0], [26.1, 557.0], [26.2, 557.0], [26.3, 557.0], [26.4, 557.0], [26.5, 557.0], [26.6, 557.0], [26.7, 566.0], [26.8, 566.0], [26.9, 566.0], [27.0, 566.0], [27.1, 566.0], [27.2, 566.0], [27.3, 566.0], [27.4, 566.0], [27.5, 566.0], [27.6, 566.0], [27.7, 566.0], [27.8, 566.0], [27.9, 566.0], [28.0, 566.0], [28.1, 566.0], [28.2, 566.0], [28.3, 566.0], [28.4, 566.0], [28.5, 566.0], [28.6, 566.0], [28.7, 566.0], [28.8, 566.0], [28.9, 566.0], [29.0, 566.0], [29.1, 566.0], [29.2, 566.0], [29.3, 566.0], [29.4, 566.0], [29.5, 566.0], [29.6, 566.0], [29.7, 566.0], [29.8, 566.0], [29.9, 566.0], [30.0, 631.0], [30.1, 631.0], [30.2, 631.0], [30.3, 631.0], [30.4, 631.0], [30.5, 631.0], [30.6, 631.0], [30.7, 631.0], [30.8, 631.0], [30.9, 631.0], [31.0, 631.0], [31.1, 631.0], [31.2, 631.0], [31.3, 631.0], [31.4, 631.0], [31.5, 631.0], [31.6, 631.0], [31.7, 631.0], [31.8, 631.0], [31.9, 631.0], [32.0, 631.0], [32.1, 631.0], [32.2, 631.0], [32.3, 631.0], [32.4, 631.0], [32.5, 631.0], [32.6, 631.0], [32.7, 631.0], [32.8, 631.0], [32.9, 631.0], [33.0, 631.0], [33.1, 631.0], [33.2, 631.0], [33.3, 631.0], [33.4, 634.0], [33.5, 634.0], [33.6, 634.0], [33.7, 634.0], [33.8, 634.0], [33.9, 634.0], [34.0, 634.0], [34.1, 634.0], [34.2, 634.0], [34.3, 634.0], [34.4, 634.0], [34.5, 634.0], [34.6, 634.0], [34.7, 634.0], [34.8, 634.0], [34.9, 634.0], [35.0, 634.0], [35.1, 634.0], [35.2, 634.0], [35.3, 634.0], [35.4, 634.0], [35.5, 634.0], [35.6, 634.0], [35.7, 634.0], [35.8, 634.0], [35.9, 634.0], [36.0, 634.0], [36.1, 634.0], [36.2, 634.0], [36.3, 634.0], [36.4, 634.0], [36.5, 634.0], [36.6, 634.0], [36.7, 703.0], [36.8, 703.0], [36.9, 703.0], [37.0, 703.0], [37.1, 703.0], [37.2, 703.0], [37.3, 703.0], [37.4, 703.0], [37.5, 703.0], [37.6, 703.0], [37.7, 703.0], [37.8, 703.0], [37.9, 703.0], [38.0, 703.0], [38.1, 703.0], [38.2, 703.0], [38.3, 703.0], [38.4, 703.0], [38.5, 703.0], [38.6, 703.0], [38.7, 703.0], [38.8, 703.0], [38.9, 703.0], [39.0, 703.0], [39.1, 703.0], [39.2, 703.0], [39.3, 703.0], [39.4, 703.0], [39.5, 703.0], [39.6, 703.0], [39.7, 703.0], [39.8, 703.0], [39.9, 703.0], [40.0, 704.0], [40.1, 704.0], [40.2, 704.0], [40.3, 704.0], [40.4, 704.0], [40.5, 704.0], [40.6, 704.0], [40.7, 704.0], [40.8, 704.0], [40.9, 704.0], [41.0, 704.0], [41.1, 704.0], [41.2, 704.0], [41.3, 704.0], [41.4, 704.0], [41.5, 704.0], [41.6, 704.0], [41.7, 704.0], [41.8, 704.0], [41.9, 704.0], [42.0, 704.0], [42.1, 704.0], [42.2, 704.0], [42.3, 704.0], [42.4, 704.0], [42.5, 704.0], [42.6, 704.0], [42.7, 704.0], [42.8, 704.0], [42.9, 704.0], [43.0, 704.0], [43.1, 704.0], [43.2, 704.0], [43.3, 704.0], [43.4, 739.0], [43.5, 739.0], [43.6, 739.0], [43.7, 739.0], [43.8, 739.0], [43.9, 739.0], [44.0, 739.0], [44.1, 739.0], [44.2, 739.0], [44.3, 739.0], [44.4, 739.0], [44.5, 739.0], [44.6, 739.0], [44.7, 739.0], [44.8, 739.0], [44.9, 739.0], [45.0, 739.0], [45.1, 739.0], [45.2, 739.0], [45.3, 739.0], [45.4, 739.0], [45.5, 739.0], [45.6, 739.0], [45.7, 739.0], [45.8, 739.0], [45.9, 739.0], [46.0, 739.0], [46.1, 739.0], [46.2, 739.0], [46.3, 739.0], [46.4, 739.0], [46.5, 739.0], [46.6, 739.0], [46.7, 742.0], [46.8, 742.0], [46.9, 742.0], [47.0, 742.0], [47.1, 742.0], [47.2, 742.0], [47.3, 742.0], [47.4, 742.0], [47.5, 742.0], [47.6, 742.0], [47.7, 742.0], [47.8, 742.0], [47.9, 742.0], [48.0, 742.0], [48.1, 742.0], [48.2, 742.0], [48.3, 742.0], [48.4, 742.0], [48.5, 742.0], [48.6, 742.0], [48.7, 742.0], [48.8, 742.0], [48.9, 742.0], [49.0, 742.0], [49.1, 742.0], [49.2, 742.0], [49.3, 742.0], [49.4, 742.0], [49.5, 742.0], [49.6, 742.0], [49.7, 742.0], [49.8, 742.0], [49.9, 742.0], [50.0, 742.0], [50.1, 742.0], [50.2, 742.0], [50.3, 742.0], [50.4, 742.0], [50.5, 742.0], [50.6, 742.0], [50.7, 742.0], [50.8, 742.0], [50.9, 742.0], [51.0, 742.0], [51.1, 742.0], [51.2, 742.0], [51.3, 742.0], [51.4, 742.0], [51.5, 742.0], [51.6, 742.0], [51.7, 742.0], [51.8, 742.0], [51.9, 742.0], [52.0, 742.0], [52.1, 742.0], [52.2, 742.0], [52.3, 742.0], [52.4, 742.0], [52.5, 742.0], [52.6, 742.0], [52.7, 742.0], [52.8, 742.0], [52.9, 742.0], [53.0, 742.0], [53.1, 742.0], [53.2, 742.0], [53.3, 742.0], [53.4, 743.0], [53.5, 743.0], [53.6, 743.0], [53.7, 743.0], [53.8, 743.0], [53.9, 743.0], [54.0, 743.0], [54.1, 743.0], [54.2, 743.0], [54.3, 743.0], [54.4, 743.0], [54.5, 743.0], [54.6, 743.0], [54.7, 743.0], [54.8, 743.0], [54.9, 743.0], [55.0, 743.0], [55.1, 743.0], [55.2, 743.0], [55.3, 743.0], [55.4, 743.0], [55.5, 743.0], [55.6, 743.0], [55.7, 743.0], [55.8, 743.0], [55.9, 743.0], [56.0, 743.0], [56.1, 743.0], [56.2, 743.0], [56.3, 743.0], [56.4, 743.0], [56.5, 743.0], [56.6, 743.0], [56.7, 744.0], [56.8, 744.0], [56.9, 744.0], [57.0, 744.0], [57.1, 744.0], [57.2, 744.0], [57.3, 744.0], [57.4, 744.0], [57.5, 744.0], [57.6, 744.0], [57.7, 744.0], [57.8, 744.0], [57.9, 744.0], [58.0, 744.0], [58.1, 744.0], [58.2, 744.0], [58.3, 744.0], [58.4, 744.0], [58.5, 744.0], [58.6, 744.0], [58.7, 744.0], [58.8, 744.0], [58.9, 744.0], [59.0, 744.0], [59.1, 744.0], [59.2, 744.0], [59.3, 744.0], [59.4, 744.0], [59.5, 744.0], [59.6, 744.0], [59.7, 744.0], [59.8, 744.0], [59.9, 744.0], [60.0, 744.0], [60.1, 745.0], [60.2, 745.0], [60.3, 745.0], [60.4, 745.0], [60.5, 745.0], [60.6, 745.0], [60.7, 745.0], [60.8, 745.0], [60.9, 745.0], [61.0, 745.0], [61.1, 745.0], [61.2, 745.0], [61.3, 745.0], [61.4, 745.0], [61.5, 745.0], [61.6, 745.0], [61.7, 745.0], [61.8, 745.0], [61.9, 745.0], [62.0, 745.0], [62.1, 745.0], [62.2, 745.0], [62.3, 745.0], [62.4, 745.0], [62.5, 745.0], [62.6, 745.0], [62.7, 745.0], [62.8, 745.0], [62.9, 745.0], [63.0, 745.0], [63.1, 745.0], [63.2, 745.0], [63.3, 745.0], [63.4, 747.0], [63.5, 747.0], [63.6, 747.0], [63.7, 747.0], [63.8, 747.0], [63.9, 747.0], [64.0, 747.0], [64.1, 747.0], [64.2, 747.0], [64.3, 747.0], [64.4, 747.0], [64.5, 747.0], [64.6, 747.0], [64.7, 747.0], [64.8, 747.0], [64.9, 747.0], [65.0, 747.0], [65.1, 747.0], [65.2, 747.0], [65.3, 747.0], [65.4, 747.0], [65.5, 747.0], [65.6, 747.0], [65.7, 747.0], [65.8, 747.0], [65.9, 747.0], [66.0, 747.0], [66.1, 747.0], [66.2, 747.0], [66.3, 747.0], [66.4, 747.0], [66.5, 747.0], [66.6, 747.0], [66.7, 762.0], [66.8, 762.0], [66.9, 762.0], [67.0, 762.0], [67.1, 762.0], [67.2, 762.0], [67.3, 762.0], [67.4, 762.0], [67.5, 762.0], [67.6, 762.0], [67.7, 762.0], [67.8, 762.0], [67.9, 762.0], [68.0, 762.0], [68.1, 762.0], [68.2, 762.0], [68.3, 762.0], [68.4, 762.0], [68.5, 762.0], [68.6, 762.0], [68.7, 762.0], [68.8, 762.0], [68.9, 762.0], [69.0, 762.0], [69.1, 762.0], [69.2, 762.0], [69.3, 762.0], [69.4, 762.0], [69.5, 762.0], [69.6, 762.0], [69.7, 762.0], [69.8, 762.0], [69.9, 762.0], [70.0, 783.0], [70.1, 783.0], [70.2, 783.0], [70.3, 783.0], [70.4, 783.0], [70.5, 783.0], [70.6, 783.0], [70.7, 783.0], [70.8, 783.0], [70.9, 783.0], [71.0, 783.0], [71.1, 783.0], [71.2, 783.0], [71.3, 783.0], [71.4, 783.0], [71.5, 783.0], [71.6, 783.0], [71.7, 783.0], [71.8, 783.0], [71.9, 783.0], [72.0, 783.0], [72.1, 783.0], [72.2, 783.0], [72.3, 783.0], [72.4, 783.0], [72.5, 783.0], [72.6, 783.0], [72.7, 783.0], [72.8, 783.0], [72.9, 783.0], [73.0, 783.0], [73.1, 783.0], [73.2, 783.0], [73.3, 783.0], [73.4, 786.0], [73.5, 786.0], [73.6, 786.0], [73.7, 786.0], [73.8, 786.0], [73.9, 786.0], [74.0, 786.0], [74.1, 786.0], [74.2, 786.0], [74.3, 786.0], [74.4, 786.0], [74.5, 786.0], [74.6, 786.0], [74.7, 786.0], [74.8, 786.0], [74.9, 786.0], [75.0, 786.0], [75.1, 786.0], [75.2, 786.0], [75.3, 786.0], [75.4, 786.0], [75.5, 786.0], [75.6, 786.0], [75.7, 786.0], [75.8, 786.0], [75.9, 786.0], [76.0, 786.0], [76.1, 786.0], [76.2, 786.0], [76.3, 786.0], [76.4, 786.0], [76.5, 786.0], [76.6, 786.0], [76.7, 788.0], [76.8, 788.0], [76.9, 788.0], [77.0, 788.0], [77.1, 788.0], [77.2, 788.0], [77.3, 788.0], [77.4, 788.0], [77.5, 788.0], [77.6, 788.0], [77.7, 788.0], [77.8, 788.0], [77.9, 788.0], [78.0, 788.0], [78.1, 788.0], [78.2, 788.0], [78.3, 788.0], [78.4, 788.0], [78.5, 788.0], [78.6, 788.0], [78.7, 788.0], [78.8, 788.0], [78.9, 788.0], [79.0, 788.0], [79.1, 788.0], [79.2, 788.0], [79.3, 788.0], [79.4, 788.0], [79.5, 788.0], [79.6, 788.0], [79.7, 788.0], [79.8, 788.0], [79.9, 788.0], [80.0, 790.0], [80.1, 790.0], [80.2, 790.0], [80.3, 790.0], [80.4, 790.0], [80.5, 790.0], [80.6, 790.0], [80.7, 790.0], [80.8, 790.0], [80.9, 790.0], [81.0, 790.0], [81.1, 790.0], [81.2, 790.0], [81.3, 790.0], [81.4, 790.0], [81.5, 790.0], [81.6, 790.0], [81.7, 790.0], [81.8, 790.0], [81.9, 790.0], [82.0, 790.0], [82.1, 790.0], [82.2, 790.0], [82.3, 790.0], [82.4, 790.0], [82.5, 790.0], [82.6, 790.0], [82.7, 790.0], [82.8, 790.0], [82.9, 790.0], [83.0, 790.0], [83.1, 790.0], [83.2, 790.0], [83.3, 790.0], [83.4, 836.0], [83.5, 836.0], [83.6, 836.0], [83.7, 836.0], [83.8, 836.0], [83.9, 836.0], [84.0, 836.0], [84.1, 836.0], [84.2, 836.0], [84.3, 836.0], [84.4, 836.0], [84.5, 836.0], [84.6, 836.0], [84.7, 836.0], [84.8, 836.0], [84.9, 836.0], [85.0, 836.0], [85.1, 836.0], [85.2, 836.0], [85.3, 836.0], [85.4, 836.0], [85.5, 836.0], [85.6, 836.0], [85.7, 836.0], [85.8, 836.0], [85.9, 836.0], [86.0, 836.0], [86.1, 836.0], [86.2, 836.0], [86.3, 836.0], [86.4, 836.0], [86.5, 836.0], [86.6, 836.0], [86.7, 842.0], [86.8, 842.0], [86.9, 842.0], [87.0, 842.0], [87.1, 842.0], [87.2, 842.0], [87.3, 842.0], [87.4, 842.0], [87.5, 842.0], [87.6, 842.0], [87.7, 842.0], [87.8, 842.0], [87.9, 842.0], [88.0, 842.0], [88.1, 842.0], [88.2, 842.0], [88.3, 842.0], [88.4, 842.0], [88.5, 842.0], [88.6, 842.0], [88.7, 842.0], [88.8, 842.0], [88.9, 842.0], [89.0, 842.0], [89.1, 842.0], [89.2, 842.0], [89.3, 842.0], [89.4, 842.0], [89.5, 842.0], [89.6, 842.0], [89.7, 842.0], [89.8, 842.0], [89.9, 842.0], [90.0, 847.0], [90.1, 847.0], [90.2, 847.0], [90.3, 847.0], [90.4, 847.0], [90.5, 847.0], [90.6, 847.0], [90.7, 847.0], [90.8, 847.0], [90.9, 847.0], [91.0, 847.0], [91.1, 847.0], [91.2, 847.0], [91.3, 847.0], [91.4, 847.0], [91.5, 847.0], [91.6, 847.0], [91.7, 847.0], [91.8, 847.0], [91.9, 847.0], [92.0, 847.0], [92.1, 847.0], [92.2, 847.0], [92.3, 847.0], [92.4, 847.0], [92.5, 847.0], [92.6, 847.0], [92.7, 847.0], [92.8, 847.0], [92.9, 847.0], [93.0, 847.0], [93.1, 847.0], [93.2, 847.0], [93.3, 847.0], [93.4, 853.0], [93.5, 853.0], [93.6, 853.0], [93.7, 853.0], [93.8, 853.0], [93.9, 853.0], [94.0, 853.0], [94.1, 853.0], [94.2, 853.0], [94.3, 853.0], [94.4, 853.0], [94.5, 853.0], [94.6, 853.0], [94.7, 853.0], [94.8, 853.0], [94.9, 853.0], [95.0, 853.0], [95.1, 853.0], [95.2, 853.0], [95.3, 853.0], [95.4, 853.0], [95.5, 853.0], [95.6, 853.0], [95.7, 853.0], [95.8, 853.0], [95.9, 853.0], [96.0, 853.0], [96.1, 853.0], [96.2, 853.0], [96.3, 853.0], [96.4, 853.0], [96.5, 853.0], [96.6, 853.0], [96.7, 881.0], [96.8, 881.0], [96.9, 881.0], [97.0, 881.0], [97.1, 881.0], [97.2, 881.0], [97.3, 881.0], [97.4, 881.0], [97.5, 881.0], [97.6, 881.0], [97.7, 881.0], [97.8, 881.0], [97.9, 881.0], [98.0, 881.0], [98.1, 881.0], [98.2, 881.0], [98.3, 881.0], [98.4, 881.0], [98.5, 881.0], [98.6, 881.0], [98.7, 881.0], [98.8, 881.0], [98.9, 881.0], [99.0, 881.0], [99.1, 881.0], [99.2, 881.0], [99.3, 881.0], [99.4, 881.0], [99.5, 881.0], [99.6, 881.0], [99.7, 881.0], [99.8, 881.0], [99.9, 881.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 14.0, "series": [{"data": [[300.0, 1.0], [600.0, 2.0], [700.0, 14.0], [200.0, 1.0], [400.0, 5.0], [800.0, 5.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.966666666666664, "minX": 1.6038684E12, "maxY": 7.966666666666664, "series": [{"data": [[1.6038684E12, 7.966666666666664]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038684E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 519.0, "minX": 1.0, "maxY": 881.0, "series": [{"data": [[8.0, 573.5], [4.0, 762.0], [2.0, 836.0], [1.0, 881.0], [9.0, 524.0], [5.0, 519.0], [10.0, 711.3333333333334], [6.0, 559.0], [3.0, 786.0], [7.0, 578.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.966666666666664, 665.5666666666665]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 209.36666666666667, "minX": 1.6038684E12, "maxY": 13877.7, "series": [{"data": [[1.6038684E12, 13877.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038684E12, 209.36666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038684E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 665.5666666666665, "minX": 1.6038684E12, "maxY": 665.5666666666665, "series": [{"data": [[1.6038684E12, 665.5666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038684E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 665.1999999999998, "minX": 1.6038684E12, "maxY": 665.1999999999998, "series": [{"data": [[1.6038684E12, 665.1999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038684E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.8666666666666654, "minX": 1.6038684E12, "maxY": 2.8666666666666654, "series": [{"data": [[1.6038684E12, 2.8666666666666654]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038684E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 295.0, "minX": 1.6038684E12, "maxY": 881.0, "series": [{"data": [[1.6038684E12, 881.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038684E12, 295.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038684E12, 295.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038684E12, 295.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038684E12, 295.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038684E12, 742.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038684E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 811.0, "series": [{"data": [[1.0, 295.0], [4.0, 811.0], [11.0, 483.0], [14.0, 746.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 291.0, "minX": 1.0, "maxY": 810.5, "series": [{"data": [[1.0, 291.0], [4.0, 810.5], [11.0, 483.0], [14.0, 745.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6038684E12, "maxY": 0.5, "series": [{"data": [[1.6038684E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038684E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6038684E12, "maxY": 0.5, "series": [{"data": [[1.6038684E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6038684E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6038684E12, "maxY": 0.5, "series": [{"data": [[1.6038684E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038684E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.6038684E12, "maxY": 0.5, "series": [{"data": [[1.6038684E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6038684E12, "title": "Total Transactions Per Second"}},
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

