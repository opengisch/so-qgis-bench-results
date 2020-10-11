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
        data: {"result": {"minY": 269.0, "minX": 0.0, "maxY": 865.0, "series": [{"data": [[0.0, 269.0], [0.1, 269.0], [0.2, 269.0], [0.3, 269.0], [0.4, 269.0], [0.5, 269.0], [0.6, 269.0], [0.7, 269.0], [0.8, 269.0], [0.9, 269.0], [1.0, 269.0], [1.1, 269.0], [1.2, 269.0], [1.3, 269.0], [1.4, 269.0], [1.5, 269.0], [1.6, 269.0], [1.7, 269.0], [1.8, 269.0], [1.9, 269.0], [2.0, 269.0], [2.1, 269.0], [2.2, 269.0], [2.3, 269.0], [2.4, 269.0], [2.5, 269.0], [2.6, 269.0], [2.7, 269.0], [2.8, 269.0], [2.9, 269.0], [3.0, 269.0], [3.1, 269.0], [3.2, 269.0], [3.3, 269.0], [3.4, 351.0], [3.5, 351.0], [3.6, 351.0], [3.7, 351.0], [3.8, 351.0], [3.9, 351.0], [4.0, 351.0], [4.1, 351.0], [4.2, 351.0], [4.3, 351.0], [4.4, 351.0], [4.5, 351.0], [4.6, 351.0], [4.7, 351.0], [4.8, 351.0], [4.9, 351.0], [5.0, 351.0], [5.1, 351.0], [5.2, 351.0], [5.3, 351.0], [5.4, 351.0], [5.5, 351.0], [5.6, 351.0], [5.7, 351.0], [5.8, 351.0], [5.9, 351.0], [6.0, 351.0], [6.1, 351.0], [6.2, 351.0], [6.3, 351.0], [6.4, 351.0], [6.5, 351.0], [6.6, 351.0], [6.7, 366.0], [6.8, 366.0], [6.9, 366.0], [7.0, 366.0], [7.1, 366.0], [7.2, 366.0], [7.3, 366.0], [7.4, 366.0], [7.5, 366.0], [7.6, 366.0], [7.7, 366.0], [7.8, 366.0], [7.9, 366.0], [8.0, 366.0], [8.1, 366.0], [8.2, 366.0], [8.3, 366.0], [8.4, 366.0], [8.5, 366.0], [8.6, 366.0], [8.7, 366.0], [8.8, 366.0], [8.9, 366.0], [9.0, 366.0], [9.1, 366.0], [9.2, 366.0], [9.3, 366.0], [9.4, 366.0], [9.5, 366.0], [9.6, 366.0], [9.7, 366.0], [9.8, 366.0], [9.9, 366.0], [10.0, 390.0], [10.1, 390.0], [10.2, 390.0], [10.3, 390.0], [10.4, 390.0], [10.5, 390.0], [10.6, 390.0], [10.7, 390.0], [10.8, 390.0], [10.9, 390.0], [11.0, 390.0], [11.1, 390.0], [11.2, 390.0], [11.3, 390.0], [11.4, 390.0], [11.5, 390.0], [11.6, 390.0], [11.7, 390.0], [11.8, 390.0], [11.9, 390.0], [12.0, 390.0], [12.1, 390.0], [12.2, 390.0], [12.3, 390.0], [12.4, 390.0], [12.5, 390.0], [12.6, 390.0], [12.7, 390.0], [12.8, 390.0], [12.9, 390.0], [13.0, 390.0], [13.1, 390.0], [13.2, 390.0], [13.3, 390.0], [13.4, 392.0], [13.5, 392.0], [13.6, 392.0], [13.7, 392.0], [13.8, 392.0], [13.9, 392.0], [14.0, 392.0], [14.1, 392.0], [14.2, 392.0], [14.3, 392.0], [14.4, 392.0], [14.5, 392.0], [14.6, 392.0], [14.7, 392.0], [14.8, 392.0], [14.9, 392.0], [15.0, 392.0], [15.1, 392.0], [15.2, 392.0], [15.3, 392.0], [15.4, 392.0], [15.5, 392.0], [15.6, 392.0], [15.7, 392.0], [15.8, 392.0], [15.9, 392.0], [16.0, 392.0], [16.1, 392.0], [16.2, 392.0], [16.3, 392.0], [16.4, 392.0], [16.5, 392.0], [16.6, 392.0], [16.7, 408.0], [16.8, 408.0], [16.9, 408.0], [17.0, 408.0], [17.1, 408.0], [17.2, 408.0], [17.3, 408.0], [17.4, 408.0], [17.5, 408.0], [17.6, 408.0], [17.7, 408.0], [17.8, 408.0], [17.9, 408.0], [18.0, 408.0], [18.1, 408.0], [18.2, 408.0], [18.3, 408.0], [18.4, 408.0], [18.5, 408.0], [18.6, 408.0], [18.7, 408.0], [18.8, 408.0], [18.9, 408.0], [19.0, 408.0], [19.1, 408.0], [19.2, 408.0], [19.3, 408.0], [19.4, 408.0], [19.5, 408.0], [19.6, 408.0], [19.7, 408.0], [19.8, 408.0], [19.9, 408.0], [20.0, 417.0], [20.1, 417.0], [20.2, 417.0], [20.3, 417.0], [20.4, 417.0], [20.5, 417.0], [20.6, 417.0], [20.7, 417.0], [20.8, 417.0], [20.9, 417.0], [21.0, 417.0], [21.1, 417.0], [21.2, 417.0], [21.3, 417.0], [21.4, 417.0], [21.5, 417.0], [21.6, 417.0], [21.7, 417.0], [21.8, 417.0], [21.9, 417.0], [22.0, 417.0], [22.1, 417.0], [22.2, 417.0], [22.3, 417.0], [22.4, 417.0], [22.5, 417.0], [22.6, 417.0], [22.7, 417.0], [22.8, 417.0], [22.9, 417.0], [23.0, 417.0], [23.1, 417.0], [23.2, 417.0], [23.3, 417.0], [23.4, 472.0], [23.5, 472.0], [23.6, 472.0], [23.7, 472.0], [23.8, 472.0], [23.9, 472.0], [24.0, 472.0], [24.1, 472.0], [24.2, 472.0], [24.3, 472.0], [24.4, 472.0], [24.5, 472.0], [24.6, 472.0], [24.7, 472.0], [24.8, 472.0], [24.9, 472.0], [25.0, 472.0], [25.1, 472.0], [25.2, 472.0], [25.3, 472.0], [25.4, 472.0], [25.5, 472.0], [25.6, 472.0], [25.7, 472.0], [25.8, 472.0], [25.9, 472.0], [26.0, 472.0], [26.1, 472.0], [26.2, 472.0], [26.3, 472.0], [26.4, 472.0], [26.5, 472.0], [26.6, 472.0], [26.7, 487.0], [26.8, 487.0], [26.9, 487.0], [27.0, 487.0], [27.1, 487.0], [27.2, 487.0], [27.3, 487.0], [27.4, 487.0], [27.5, 487.0], [27.6, 487.0], [27.7, 487.0], [27.8, 487.0], [27.9, 487.0], [28.0, 487.0], [28.1, 487.0], [28.2, 487.0], [28.3, 487.0], [28.4, 487.0], [28.5, 487.0], [28.6, 487.0], [28.7, 487.0], [28.8, 487.0], [28.9, 487.0], [29.0, 487.0], [29.1, 487.0], [29.2, 487.0], [29.3, 487.0], [29.4, 487.0], [29.5, 487.0], [29.6, 487.0], [29.7, 487.0], [29.8, 487.0], [29.9, 487.0], [30.0, 548.0], [30.1, 548.0], [30.2, 548.0], [30.3, 548.0], [30.4, 548.0], [30.5, 548.0], [30.6, 548.0], [30.7, 548.0], [30.8, 548.0], [30.9, 548.0], [31.0, 548.0], [31.1, 548.0], [31.2, 548.0], [31.3, 548.0], [31.4, 548.0], [31.5, 548.0], [31.6, 548.0], [31.7, 548.0], [31.8, 548.0], [31.9, 548.0], [32.0, 548.0], [32.1, 548.0], [32.2, 548.0], [32.3, 548.0], [32.4, 548.0], [32.5, 548.0], [32.6, 548.0], [32.7, 548.0], [32.8, 548.0], [32.9, 548.0], [33.0, 548.0], [33.1, 548.0], [33.2, 548.0], [33.3, 548.0], [33.4, 556.0], [33.5, 556.0], [33.6, 556.0], [33.7, 556.0], [33.8, 556.0], [33.9, 556.0], [34.0, 556.0], [34.1, 556.0], [34.2, 556.0], [34.3, 556.0], [34.4, 556.0], [34.5, 556.0], [34.6, 556.0], [34.7, 556.0], [34.8, 556.0], [34.9, 556.0], [35.0, 556.0], [35.1, 556.0], [35.2, 556.0], [35.3, 556.0], [35.4, 556.0], [35.5, 556.0], [35.6, 556.0], [35.7, 556.0], [35.8, 556.0], [35.9, 556.0], [36.0, 556.0], [36.1, 556.0], [36.2, 556.0], [36.3, 556.0], [36.4, 556.0], [36.5, 556.0], [36.6, 556.0], [36.7, 619.0], [36.8, 619.0], [36.9, 619.0], [37.0, 619.0], [37.1, 619.0], [37.2, 619.0], [37.3, 619.0], [37.4, 619.0], [37.5, 619.0], [37.6, 619.0], [37.7, 619.0], [37.8, 619.0], [37.9, 619.0], [38.0, 619.0], [38.1, 619.0], [38.2, 619.0], [38.3, 619.0], [38.4, 619.0], [38.5, 619.0], [38.6, 619.0], [38.7, 619.0], [38.8, 619.0], [38.9, 619.0], [39.0, 619.0], [39.1, 619.0], [39.2, 619.0], [39.3, 619.0], [39.4, 619.0], [39.5, 619.0], [39.6, 619.0], [39.7, 619.0], [39.8, 619.0], [39.9, 619.0], [40.0, 621.0], [40.1, 621.0], [40.2, 621.0], [40.3, 621.0], [40.4, 621.0], [40.5, 621.0], [40.6, 621.0], [40.7, 621.0], [40.8, 621.0], [40.9, 621.0], [41.0, 621.0], [41.1, 621.0], [41.2, 621.0], [41.3, 621.0], [41.4, 621.0], [41.5, 621.0], [41.6, 621.0], [41.7, 621.0], [41.8, 621.0], [41.9, 621.0], [42.0, 621.0], [42.1, 621.0], [42.2, 621.0], [42.3, 621.0], [42.4, 621.0], [42.5, 621.0], [42.6, 621.0], [42.7, 621.0], [42.8, 621.0], [42.9, 621.0], [43.0, 621.0], [43.1, 621.0], [43.2, 621.0], [43.3, 621.0], [43.4, 676.0], [43.5, 676.0], [43.6, 676.0], [43.7, 676.0], [43.8, 676.0], [43.9, 676.0], [44.0, 676.0], [44.1, 676.0], [44.2, 676.0], [44.3, 676.0], [44.4, 676.0], [44.5, 676.0], [44.6, 676.0], [44.7, 676.0], [44.8, 676.0], [44.9, 676.0], [45.0, 676.0], [45.1, 676.0], [45.2, 676.0], [45.3, 676.0], [45.4, 676.0], [45.5, 676.0], [45.6, 676.0], [45.7, 676.0], [45.8, 676.0], [45.9, 676.0], [46.0, 676.0], [46.1, 676.0], [46.2, 676.0], [46.3, 676.0], [46.4, 676.0], [46.5, 676.0], [46.6, 676.0], [46.7, 699.0], [46.8, 699.0], [46.9, 699.0], [47.0, 699.0], [47.1, 699.0], [47.2, 699.0], [47.3, 699.0], [47.4, 699.0], [47.5, 699.0], [47.6, 699.0], [47.7, 699.0], [47.8, 699.0], [47.9, 699.0], [48.0, 699.0], [48.1, 699.0], [48.2, 699.0], [48.3, 699.0], [48.4, 699.0], [48.5, 699.0], [48.6, 699.0], [48.7, 699.0], [48.8, 699.0], [48.9, 699.0], [49.0, 699.0], [49.1, 699.0], [49.2, 699.0], [49.3, 699.0], [49.4, 699.0], [49.5, 699.0], [49.6, 699.0], [49.7, 699.0], [49.8, 699.0], [49.9, 699.0], [50.0, 699.0], [50.1, 712.0], [50.2, 712.0], [50.3, 712.0], [50.4, 712.0], [50.5, 712.0], [50.6, 712.0], [50.7, 712.0], [50.8, 712.0], [50.9, 712.0], [51.0, 712.0], [51.1, 712.0], [51.2, 712.0], [51.3, 712.0], [51.4, 712.0], [51.5, 712.0], [51.6, 712.0], [51.7, 712.0], [51.8, 712.0], [51.9, 712.0], [52.0, 712.0], [52.1, 712.0], [52.2, 712.0], [52.3, 712.0], [52.4, 712.0], [52.5, 712.0], [52.6, 712.0], [52.7, 712.0], [52.8, 712.0], [52.9, 712.0], [53.0, 712.0], [53.1, 712.0], [53.2, 712.0], [53.3, 712.0], [53.4, 716.0], [53.5, 716.0], [53.6, 716.0], [53.7, 716.0], [53.8, 716.0], [53.9, 716.0], [54.0, 716.0], [54.1, 716.0], [54.2, 716.0], [54.3, 716.0], [54.4, 716.0], [54.5, 716.0], [54.6, 716.0], [54.7, 716.0], [54.8, 716.0], [54.9, 716.0], [55.0, 716.0], [55.1, 716.0], [55.2, 716.0], [55.3, 716.0], [55.4, 716.0], [55.5, 716.0], [55.6, 716.0], [55.7, 716.0], [55.8, 716.0], [55.9, 716.0], [56.0, 716.0], [56.1, 716.0], [56.2, 716.0], [56.3, 716.0], [56.4, 716.0], [56.5, 716.0], [56.6, 716.0], [56.7, 726.0], [56.8, 726.0], [56.9, 726.0], [57.0, 726.0], [57.1, 726.0], [57.2, 726.0], [57.3, 726.0], [57.4, 726.0], [57.5, 726.0], [57.6, 726.0], [57.7, 726.0], [57.8, 726.0], [57.9, 726.0], [58.0, 726.0], [58.1, 726.0], [58.2, 726.0], [58.3, 726.0], [58.4, 726.0], [58.5, 726.0], [58.6, 726.0], [58.7, 726.0], [58.8, 726.0], [58.9, 726.0], [59.0, 726.0], [59.1, 726.0], [59.2, 726.0], [59.3, 726.0], [59.4, 726.0], [59.5, 726.0], [59.6, 726.0], [59.7, 726.0], [59.8, 726.0], [59.9, 726.0], [60.0, 726.0], [60.1, 729.0], [60.2, 729.0], [60.3, 729.0], [60.4, 729.0], [60.5, 729.0], [60.6, 729.0], [60.7, 729.0], [60.8, 729.0], [60.9, 729.0], [61.0, 729.0], [61.1, 729.0], [61.2, 729.0], [61.3, 729.0], [61.4, 729.0], [61.5, 729.0], [61.6, 729.0], [61.7, 729.0], [61.8, 729.0], [61.9, 729.0], [62.0, 729.0], [62.1, 729.0], [62.2, 729.0], [62.3, 729.0], [62.4, 729.0], [62.5, 729.0], [62.6, 729.0], [62.7, 729.0], [62.8, 729.0], [62.9, 729.0], [63.0, 729.0], [63.1, 729.0], [63.2, 729.0], [63.3, 729.0], [63.4, 734.0], [63.5, 734.0], [63.6, 734.0], [63.7, 734.0], [63.8, 734.0], [63.9, 734.0], [64.0, 734.0], [64.1, 734.0], [64.2, 734.0], [64.3, 734.0], [64.4, 734.0], [64.5, 734.0], [64.6, 734.0], [64.7, 734.0], [64.8, 734.0], [64.9, 734.0], [65.0, 734.0], [65.1, 734.0], [65.2, 734.0], [65.3, 734.0], [65.4, 734.0], [65.5, 734.0], [65.6, 734.0], [65.7, 734.0], [65.8, 734.0], [65.9, 734.0], [66.0, 734.0], [66.1, 734.0], [66.2, 734.0], [66.3, 734.0], [66.4, 734.0], [66.5, 734.0], [66.6, 734.0], [66.7, 735.0], [66.8, 735.0], [66.9, 735.0], [67.0, 735.0], [67.1, 735.0], [67.2, 735.0], [67.3, 735.0], [67.4, 735.0], [67.5, 735.0], [67.6, 735.0], [67.7, 735.0], [67.8, 735.0], [67.9, 735.0], [68.0, 735.0], [68.1, 735.0], [68.2, 735.0], [68.3, 735.0], [68.4, 735.0], [68.5, 735.0], [68.6, 735.0], [68.7, 735.0], [68.8, 735.0], [68.9, 735.0], [69.0, 735.0], [69.1, 735.0], [69.2, 735.0], [69.3, 735.0], [69.4, 735.0], [69.5, 735.0], [69.6, 735.0], [69.7, 735.0], [69.8, 735.0], [69.9, 735.0], [70.0, 735.0], [70.1, 735.0], [70.2, 735.0], [70.3, 735.0], [70.4, 735.0], [70.5, 735.0], [70.6, 735.0], [70.7, 735.0], [70.8, 735.0], [70.9, 735.0], [71.0, 735.0], [71.1, 735.0], [71.2, 735.0], [71.3, 735.0], [71.4, 735.0], [71.5, 735.0], [71.6, 735.0], [71.7, 735.0], [71.8, 735.0], [71.9, 735.0], [72.0, 735.0], [72.1, 735.0], [72.2, 735.0], [72.3, 735.0], [72.4, 735.0], [72.5, 735.0], [72.6, 735.0], [72.7, 735.0], [72.8, 735.0], [72.9, 735.0], [73.0, 735.0], [73.1, 735.0], [73.2, 735.0], [73.3, 735.0], [73.4, 741.0], [73.5, 741.0], [73.6, 741.0], [73.7, 741.0], [73.8, 741.0], [73.9, 741.0], [74.0, 741.0], [74.1, 741.0], [74.2, 741.0], [74.3, 741.0], [74.4, 741.0], [74.5, 741.0], [74.6, 741.0], [74.7, 741.0], [74.8, 741.0], [74.9, 741.0], [75.0, 741.0], [75.1, 741.0], [75.2, 741.0], [75.3, 741.0], [75.4, 741.0], [75.5, 741.0], [75.6, 741.0], [75.7, 741.0], [75.8, 741.0], [75.9, 741.0], [76.0, 741.0], [76.1, 741.0], [76.2, 741.0], [76.3, 741.0], [76.4, 741.0], [76.5, 741.0], [76.6, 741.0], [76.7, 745.0], [76.8, 745.0], [76.9, 745.0], [77.0, 745.0], [77.1, 745.0], [77.2, 745.0], [77.3, 745.0], [77.4, 745.0], [77.5, 745.0], [77.6, 745.0], [77.7, 745.0], [77.8, 745.0], [77.9, 745.0], [78.0, 745.0], [78.1, 745.0], [78.2, 745.0], [78.3, 745.0], [78.4, 745.0], [78.5, 745.0], [78.6, 745.0], [78.7, 745.0], [78.8, 745.0], [78.9, 745.0], [79.0, 745.0], [79.1, 745.0], [79.2, 745.0], [79.3, 745.0], [79.4, 745.0], [79.5, 745.0], [79.6, 745.0], [79.7, 745.0], [79.8, 745.0], [79.9, 745.0], [80.0, 745.0], [80.1, 770.0], [80.2, 770.0], [80.3, 770.0], [80.4, 770.0], [80.5, 770.0], [80.6, 770.0], [80.7, 770.0], [80.8, 770.0], [80.9, 770.0], [81.0, 770.0], [81.1, 770.0], [81.2, 770.0], [81.3, 770.0], [81.4, 770.0], [81.5, 770.0], [81.6, 770.0], [81.7, 770.0], [81.8, 770.0], [81.9, 770.0], [82.0, 770.0], [82.1, 770.0], [82.2, 770.0], [82.3, 770.0], [82.4, 770.0], [82.5, 770.0], [82.6, 770.0], [82.7, 770.0], [82.8, 770.0], [82.9, 770.0], [83.0, 770.0], [83.1, 770.0], [83.2, 770.0], [83.3, 770.0], [83.4, 784.0], [83.5, 784.0], [83.6, 784.0], [83.7, 784.0], [83.8, 784.0], [83.9, 784.0], [84.0, 784.0], [84.1, 784.0], [84.2, 784.0], [84.3, 784.0], [84.4, 784.0], [84.5, 784.0], [84.6, 784.0], [84.7, 784.0], [84.8, 784.0], [84.9, 784.0], [85.0, 784.0], [85.1, 784.0], [85.2, 784.0], [85.3, 784.0], [85.4, 784.0], [85.5, 784.0], [85.6, 784.0], [85.7, 784.0], [85.8, 784.0], [85.9, 784.0], [86.0, 784.0], [86.1, 784.0], [86.2, 784.0], [86.3, 784.0], [86.4, 784.0], [86.5, 784.0], [86.6, 784.0], [86.7, 785.0], [86.8, 785.0], [86.9, 785.0], [87.0, 785.0], [87.1, 785.0], [87.2, 785.0], [87.3, 785.0], [87.4, 785.0], [87.5, 785.0], [87.6, 785.0], [87.7, 785.0], [87.8, 785.0], [87.9, 785.0], [88.0, 785.0], [88.1, 785.0], [88.2, 785.0], [88.3, 785.0], [88.4, 785.0], [88.5, 785.0], [88.6, 785.0], [88.7, 785.0], [88.8, 785.0], [88.9, 785.0], [89.0, 785.0], [89.1, 785.0], [89.2, 785.0], [89.3, 785.0], [89.4, 785.0], [89.5, 785.0], [89.6, 785.0], [89.7, 785.0], [89.8, 785.0], [89.9, 785.0], [90.0, 805.0], [90.1, 805.0], [90.2, 805.0], [90.3, 805.0], [90.4, 805.0], [90.5, 805.0], [90.6, 805.0], [90.7, 805.0], [90.8, 805.0], [90.9, 805.0], [91.0, 805.0], [91.1, 805.0], [91.2, 805.0], [91.3, 805.0], [91.4, 805.0], [91.5, 805.0], [91.6, 805.0], [91.7, 805.0], [91.8, 805.0], [91.9, 805.0], [92.0, 805.0], [92.1, 805.0], [92.2, 805.0], [92.3, 805.0], [92.4, 805.0], [92.5, 805.0], [92.6, 805.0], [92.7, 805.0], [92.8, 805.0], [92.9, 805.0], [93.0, 805.0], [93.1, 805.0], [93.2, 805.0], [93.3, 805.0], [93.4, 838.0], [93.5, 838.0], [93.6, 838.0], [93.7, 838.0], [93.8, 838.0], [93.9, 838.0], [94.0, 838.0], [94.1, 838.0], [94.2, 838.0], [94.3, 838.0], [94.4, 838.0], [94.5, 838.0], [94.6, 838.0], [94.7, 838.0], [94.8, 838.0], [94.9, 838.0], [95.0, 838.0], [95.1, 838.0], [95.2, 838.0], [95.3, 838.0], [95.4, 838.0], [95.5, 838.0], [95.6, 838.0], [95.7, 838.0], [95.8, 838.0], [95.9, 838.0], [96.0, 838.0], [96.1, 838.0], [96.2, 838.0], [96.3, 838.0], [96.4, 838.0], [96.5, 838.0], [96.6, 838.0], [96.7, 865.0], [96.8, 865.0], [96.9, 865.0], [97.0, 865.0], [97.1, 865.0], [97.2, 865.0], [97.3, 865.0], [97.4, 865.0], [97.5, 865.0], [97.6, 865.0], [97.7, 865.0], [97.8, 865.0], [97.9, 865.0], [98.0, 865.0], [98.1, 865.0], [98.2, 865.0], [98.3, 865.0], [98.4, 865.0], [98.5, 865.0], [98.6, 865.0], [98.7, 865.0], [98.8, 865.0], [98.9, 865.0], [99.0, 865.0], [99.1, 865.0], [99.2, 865.0], [99.3, 865.0], [99.4, 865.0], [99.5, 865.0], [99.6, 865.0], [99.7, 865.0], [99.8, 865.0], [99.9, 865.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 12.0, "series": [{"data": [[300.0, 4.0], [600.0, 4.0], [700.0, 12.0], [200.0, 1.0], [400.0, 4.0], [800.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 21.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.900000000000001, "minX": 1.60241748E12, "maxY": 7.900000000000001, "series": [{"data": [[1.60241748E12, 7.900000000000001]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241748E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 507.0, "minX": 1.0, "maxY": 865.0, "series": [{"data": [[8.0, 550.5], [4.0, 785.0], [2.0, 838.0], [1.0, 865.0], [9.0, 558.0], [5.0, 507.0], [10.0, 636.4666666666667], [6.0, 542.5], [3.0, 805.0], [7.0, 511.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.900000000000001, 623.0333333333334]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.60241748E12, "maxY": 13878.2, "series": [{"data": [[1.60241748E12, 13878.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60241748E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241748E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 623.0333333333334, "minX": 1.60241748E12, "maxY": 623.0333333333334, "series": [{"data": [[1.60241748E12, 623.0333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241748E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 622.6666666666665, "minX": 1.60241748E12, "maxY": 622.6666666666665, "series": [{"data": [[1.60241748E12, 622.6666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241748E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.5333333333333345, "minX": 1.60241748E12, "maxY": 3.5333333333333345, "series": [{"data": [[1.60241748E12, 3.5333333333333345]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241748E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 269.0, "minX": 1.60241748E12, "maxY": 865.0, "series": [{"data": [[1.60241748E12, 865.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60241748E12, 269.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60241748E12, 269.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60241748E12, 269.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60241748E12, 269.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60241748E12, 705.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 366.0, "minX": 5.0, "maxY": 741.0, "series": [{"data": [[5.0, 366.0], [12.0, 587.5], [13.0, 741.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 366.0, "minX": 5.0, "maxY": 741.0, "series": [{"data": [[5.0, 366.0], [12.0, 587.5], [13.0, 741.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60241748E12, "maxY": 0.5, "series": [{"data": [[1.60241748E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241748E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60241748E12, "maxY": 0.5, "series": [{"data": [[1.60241748E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60241748E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60241748E12, "maxY": 0.5, "series": [{"data": [[1.60241748E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241748E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60241748E12, "maxY": 0.5, "series": [{"data": [[1.60241748E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60241748E12, "title": "Total Transactions Per Second"}},
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

