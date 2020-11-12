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
        data: {"result": {"minY": 3429.0, "minX": 0.0, "maxY": 31293.0, "series": [{"data": [[0.0, 3429.0], [0.1, 3429.0], [0.2, 3429.0], [0.3, 3429.0], [0.4, 3429.0], [0.5, 3429.0], [0.6, 3429.0], [0.7, 3429.0], [0.8, 3429.0], [0.9, 3429.0], [1.0, 3429.0], [1.1, 3429.0], [1.2, 3429.0], [1.3, 3429.0], [1.4, 3429.0], [1.5, 3429.0], [1.6, 3429.0], [1.7, 3429.0], [1.8, 3429.0], [1.9, 3429.0], [2.0, 3429.0], [2.1, 3429.0], [2.2, 3429.0], [2.3, 3429.0], [2.4, 3429.0], [2.5, 3429.0], [2.6, 3429.0], [2.7, 3429.0], [2.8, 3429.0], [2.9, 3429.0], [3.0, 3429.0], [3.1, 3429.0], [3.2, 3429.0], [3.3, 3429.0], [3.4, 3429.0], [3.5, 3429.0], [3.6, 3429.0], [3.7, 3429.0], [3.8, 3429.0], [3.9, 3429.0], [4.0, 3429.0], [4.1, 3429.0], [4.2, 3429.0], [4.3, 3429.0], [4.4, 3429.0], [4.5, 3429.0], [4.6, 6475.0], [4.7, 6475.0], [4.8, 6475.0], [4.9, 6475.0], [5.0, 6475.0], [5.1, 6475.0], [5.2, 6475.0], [5.3, 6475.0], [5.4, 6475.0], [5.5, 6475.0], [5.6, 6475.0], [5.7, 6475.0], [5.8, 6475.0], [5.9, 6475.0], [6.0, 6475.0], [6.1, 6475.0], [6.2, 6475.0], [6.3, 6475.0], [6.4, 6475.0], [6.5, 6475.0], [6.6, 6475.0], [6.7, 6475.0], [6.8, 6475.0], [6.9, 6475.0], [7.0, 6475.0], [7.1, 6475.0], [7.2, 6475.0], [7.3, 6475.0], [7.4, 6475.0], [7.5, 6475.0], [7.6, 6475.0], [7.7, 6475.0], [7.8, 6475.0], [7.9, 6475.0], [8.0, 6475.0], [8.1, 6475.0], [8.2, 6475.0], [8.3, 6475.0], [8.4, 6475.0], [8.5, 6475.0], [8.6, 6475.0], [8.7, 6475.0], [8.8, 6475.0], [8.9, 6475.0], [9.0, 6475.0], [9.1, 9469.0], [9.2, 9469.0], [9.3, 9469.0], [9.4, 9469.0], [9.5, 9469.0], [9.6, 9469.0], [9.7, 9469.0], [9.8, 9469.0], [9.9, 9469.0], [10.0, 9469.0], [10.1, 9469.0], [10.2, 9469.0], [10.3, 9469.0], [10.4, 9469.0], [10.5, 9469.0], [10.6, 9469.0], [10.7, 9469.0], [10.8, 9469.0], [10.9, 9469.0], [11.0, 9469.0], [11.1, 9469.0], [11.2, 9469.0], [11.3, 9469.0], [11.4, 9469.0], [11.5, 9469.0], [11.6, 9469.0], [11.7, 9469.0], [11.8, 9469.0], [11.9, 9469.0], [12.0, 9469.0], [12.1, 9469.0], [12.2, 9469.0], [12.3, 9469.0], [12.4, 9469.0], [12.5, 9469.0], [12.6, 9469.0], [12.7, 9469.0], [12.8, 9469.0], [12.9, 9469.0], [13.0, 9469.0], [13.1, 9469.0], [13.2, 9469.0], [13.3, 9469.0], [13.4, 9469.0], [13.5, 9469.0], [13.6, 9469.0], [13.7, 12437.0], [13.8, 12437.0], [13.9, 12437.0], [14.0, 12437.0], [14.1, 12437.0], [14.2, 12437.0], [14.3, 12437.0], [14.4, 12437.0], [14.5, 12437.0], [14.6, 12437.0], [14.7, 12437.0], [14.8, 12437.0], [14.9, 12437.0], [15.0, 12437.0], [15.1, 12437.0], [15.2, 12437.0], [15.3, 12437.0], [15.4, 12437.0], [15.5, 12437.0], [15.6, 12437.0], [15.7, 12437.0], [15.8, 12437.0], [15.9, 12437.0], [16.0, 12437.0], [16.1, 12437.0], [16.2, 12437.0], [16.3, 12437.0], [16.4, 12437.0], [16.5, 12437.0], [16.6, 12437.0], [16.7, 12437.0], [16.8, 12437.0], [16.9, 12437.0], [17.0, 12437.0], [17.1, 12437.0], [17.2, 12437.0], [17.3, 12437.0], [17.4, 12437.0], [17.5, 12437.0], [17.6, 12437.0], [17.7, 12437.0], [17.8, 12437.0], [17.9, 12437.0], [18.0, 12437.0], [18.1, 12437.0], [18.2, 15335.0], [18.3, 15335.0], [18.4, 15335.0], [18.5, 15335.0], [18.6, 15335.0], [18.7, 15335.0], [18.8, 15335.0], [18.9, 15335.0], [19.0, 15335.0], [19.1, 15335.0], [19.2, 15335.0], [19.3, 15335.0], [19.4, 15335.0], [19.5, 15335.0], [19.6, 15335.0], [19.7, 15335.0], [19.8, 15335.0], [19.9, 15335.0], [20.0, 15335.0], [20.1, 15335.0], [20.2, 15335.0], [20.3, 15335.0], [20.4, 15335.0], [20.5, 15335.0], [20.6, 15335.0], [20.7, 15335.0], [20.8, 15335.0], [20.9, 15335.0], [21.0, 15335.0], [21.1, 15335.0], [21.2, 15335.0], [21.3, 15335.0], [21.4, 15335.0], [21.5, 15335.0], [21.6, 15335.0], [21.7, 15335.0], [21.8, 15335.0], [21.9, 15335.0], [22.0, 15335.0], [22.1, 15335.0], [22.2, 15335.0], [22.3, 15335.0], [22.4, 15335.0], [22.5, 15335.0], [22.6, 15335.0], [22.7, 15335.0], [22.8, 18325.0], [22.9, 18325.0], [23.0, 18325.0], [23.1, 18325.0], [23.2, 18325.0], [23.3, 18325.0], [23.4, 18325.0], [23.5, 18325.0], [23.6, 18325.0], [23.7, 18325.0], [23.8, 18325.0], [23.9, 18325.0], [24.0, 18325.0], [24.1, 18325.0], [24.2, 18325.0], [24.3, 18325.0], [24.4, 18325.0], [24.5, 18325.0], [24.6, 18325.0], [24.7, 18325.0], [24.8, 18325.0], [24.9, 18325.0], [25.0, 18325.0], [25.1, 18325.0], [25.2, 18325.0], [25.3, 18325.0], [25.4, 18325.0], [25.5, 18325.0], [25.6, 18325.0], [25.7, 18325.0], [25.8, 18325.0], [25.9, 18325.0], [26.0, 18325.0], [26.1, 18325.0], [26.2, 18325.0], [26.3, 18325.0], [26.4, 18325.0], [26.5, 18325.0], [26.6, 18325.0], [26.7, 18325.0], [26.8, 18325.0], [26.9, 18325.0], [27.0, 18325.0], [27.1, 18325.0], [27.2, 18325.0], [27.3, 21233.0], [27.4, 21233.0], [27.5, 21233.0], [27.6, 21233.0], [27.7, 21233.0], [27.8, 21233.0], [27.9, 21233.0], [28.0, 21233.0], [28.1, 21233.0], [28.2, 21233.0], [28.3, 21233.0], [28.4, 21233.0], [28.5, 21233.0], [28.6, 21233.0], [28.7, 21233.0], [28.8, 21233.0], [28.9, 21233.0], [29.0, 21233.0], [29.1, 21233.0], [29.2, 21233.0], [29.3, 21233.0], [29.4, 21233.0], [29.5, 21233.0], [29.6, 21233.0], [29.7, 21233.0], [29.8, 21233.0], [29.9, 21233.0], [30.0, 21233.0], [30.1, 21233.0], [30.2, 21233.0], [30.3, 21233.0], [30.4, 21233.0], [30.5, 21233.0], [30.6, 21233.0], [30.7, 21233.0], [30.8, 21233.0], [30.9, 21233.0], [31.0, 21233.0], [31.1, 21233.0], [31.2, 21233.0], [31.3, 21233.0], [31.4, 21233.0], [31.5, 21233.0], [31.6, 21233.0], [31.7, 21233.0], [31.8, 21233.0], [31.9, 24259.0], [32.0, 24259.0], [32.1, 24259.0], [32.2, 24259.0], [32.3, 24259.0], [32.4, 24259.0], [32.5, 24259.0], [32.6, 24259.0], [32.7, 24259.0], [32.8, 24259.0], [32.9, 24259.0], [33.0, 24259.0], [33.1, 24259.0], [33.2, 24259.0], [33.3, 24259.0], [33.4, 24259.0], [33.5, 24259.0], [33.6, 24259.0], [33.7, 24259.0], [33.8, 24259.0], [33.9, 24259.0], [34.0, 24259.0], [34.1, 24259.0], [34.2, 24259.0], [34.3, 24259.0], [34.4, 24259.0], [34.5, 24259.0], [34.6, 24259.0], [34.7, 24259.0], [34.8, 24259.0], [34.9, 24259.0], [35.0, 24259.0], [35.1, 24259.0], [35.2, 24259.0], [35.3, 24259.0], [35.4, 24259.0], [35.5, 24259.0], [35.6, 24259.0], [35.7, 24259.0], [35.8, 24259.0], [35.9, 24259.0], [36.0, 24259.0], [36.1, 24259.0], [36.2, 24259.0], [36.3, 24259.0], [36.4, 25382.0], [36.5, 25382.0], [36.6, 25382.0], [36.7, 25382.0], [36.8, 25382.0], [36.9, 25382.0], [37.0, 25382.0], [37.1, 25382.0], [37.2, 25382.0], [37.3, 25382.0], [37.4, 25382.0], [37.5, 25382.0], [37.6, 25382.0], [37.7, 25382.0], [37.8, 25382.0], [37.9, 25382.0], [38.0, 25382.0], [38.1, 25382.0], [38.2, 25382.0], [38.3, 25382.0], [38.4, 25382.0], [38.5, 25382.0], [38.6, 25382.0], [38.7, 25382.0], [38.8, 25382.0], [38.9, 25382.0], [39.0, 25382.0], [39.1, 25382.0], [39.2, 25382.0], [39.3, 25382.0], [39.4, 25382.0], [39.5, 25382.0], [39.6, 25382.0], [39.7, 25382.0], [39.8, 25382.0], [39.9, 25382.0], [40.0, 25382.0], [40.1, 25382.0], [40.2, 25382.0], [40.3, 25382.0], [40.4, 25382.0], [40.5, 25382.0], [40.6, 25382.0], [40.7, 25382.0], [40.8, 25382.0], [40.9, 25382.0], [41.0, 25959.0], [41.1, 25959.0], [41.2, 25959.0], [41.3, 25959.0], [41.4, 25959.0], [41.5, 25959.0], [41.6, 25959.0], [41.7, 25959.0], [41.8, 25959.0], [41.9, 25959.0], [42.0, 25959.0], [42.1, 25959.0], [42.2, 25959.0], [42.3, 25959.0], [42.4, 25959.0], [42.5, 25959.0], [42.6, 25959.0], [42.7, 25959.0], [42.8, 25959.0], [42.9, 25959.0], [43.0, 25959.0], [43.1, 25959.0], [43.2, 25959.0], [43.3, 25959.0], [43.4, 25959.0], [43.5, 25959.0], [43.6, 25959.0], [43.7, 25959.0], [43.8, 25959.0], [43.9, 25959.0], [44.0, 25959.0], [44.1, 25959.0], [44.2, 25959.0], [44.3, 25959.0], [44.4, 25959.0], [44.5, 25959.0], [44.6, 25959.0], [44.7, 25959.0], [44.8, 25959.0], [44.9, 25959.0], [45.0, 25959.0], [45.1, 25959.0], [45.2, 25959.0], [45.3, 25959.0], [45.4, 25959.0], [45.5, 26688.0], [45.6, 26688.0], [45.7, 26688.0], [45.8, 26688.0], [45.9, 26688.0], [46.0, 26688.0], [46.1, 26688.0], [46.2, 26688.0], [46.3, 26688.0], [46.4, 26688.0], [46.5, 26688.0], [46.6, 26688.0], [46.7, 26688.0], [46.8, 26688.0], [46.9, 26688.0], [47.0, 26688.0], [47.1, 26688.0], [47.2, 26688.0], [47.3, 26688.0], [47.4, 26688.0], [47.5, 26688.0], [47.6, 26688.0], [47.7, 26688.0], [47.8, 26688.0], [47.9, 26688.0], [48.0, 26688.0], [48.1, 26688.0], [48.2, 26688.0], [48.3, 26688.0], [48.4, 26688.0], [48.5, 26688.0], [48.6, 26688.0], [48.7, 26688.0], [48.8, 26688.0], [48.9, 26688.0], [49.0, 26688.0], [49.1, 26688.0], [49.2, 26688.0], [49.3, 26688.0], [49.4, 26688.0], [49.5, 26688.0], [49.6, 26688.0], [49.7, 26688.0], [49.8, 26688.0], [49.9, 26688.0], [50.0, 26688.0], [50.1, 27374.0], [50.2, 27374.0], [50.3, 27374.0], [50.4, 27374.0], [50.5, 27374.0], [50.6, 27374.0], [50.7, 27374.0], [50.8, 27374.0], [50.9, 27374.0], [51.0, 27374.0], [51.1, 27374.0], [51.2, 27374.0], [51.3, 27374.0], [51.4, 27374.0], [51.5, 27374.0], [51.6, 27374.0], [51.7, 27374.0], [51.8, 27374.0], [51.9, 27374.0], [52.0, 27374.0], [52.1, 27374.0], [52.2, 27374.0], [52.3, 27374.0], [52.4, 27374.0], [52.5, 27374.0], [52.6, 27374.0], [52.7, 27374.0], [52.8, 27374.0], [52.9, 27374.0], [53.0, 27374.0], [53.1, 27374.0], [53.2, 27374.0], [53.3, 27374.0], [53.4, 27374.0], [53.5, 27374.0], [53.6, 27374.0], [53.7, 27374.0], [53.8, 27374.0], [53.9, 27374.0], [54.0, 27374.0], [54.1, 27374.0], [54.2, 27374.0], [54.3, 27374.0], [54.4, 27374.0], [54.5, 27374.0], [54.6, 27959.0], [54.7, 27959.0], [54.8, 27959.0], [54.9, 27959.0], [55.0, 27959.0], [55.1, 27959.0], [55.2, 27959.0], [55.3, 27959.0], [55.4, 27959.0], [55.5, 27959.0], [55.6, 27959.0], [55.7, 27959.0], [55.8, 27959.0], [55.9, 27959.0], [56.0, 27959.0], [56.1, 27959.0], [56.2, 27959.0], [56.3, 27959.0], [56.4, 27959.0], [56.5, 27959.0], [56.6, 27959.0], [56.7, 27959.0], [56.8, 27959.0], [56.9, 27959.0], [57.0, 27959.0], [57.1, 27959.0], [57.2, 27959.0], [57.3, 27959.0], [57.4, 27959.0], [57.5, 27959.0], [57.6, 27959.0], [57.7, 27959.0], [57.8, 27959.0], [57.9, 27959.0], [58.0, 27959.0], [58.1, 27959.0], [58.2, 27959.0], [58.3, 27959.0], [58.4, 27959.0], [58.5, 27959.0], [58.6, 27959.0], [58.7, 27959.0], [58.8, 27959.0], [58.9, 27959.0], [59.0, 27959.0], [59.1, 29201.0], [59.2, 29201.0], [59.3, 29201.0], [59.4, 29201.0], [59.5, 29201.0], [59.6, 29201.0], [59.7, 29201.0], [59.8, 29201.0], [59.9, 29201.0], [60.0, 29201.0], [60.1, 29201.0], [60.2, 29201.0], [60.3, 29201.0], [60.4, 29201.0], [60.5, 29201.0], [60.6, 29201.0], [60.7, 29201.0], [60.8, 29201.0], [60.9, 29201.0], [61.0, 29201.0], [61.1, 29201.0], [61.2, 29201.0], [61.3, 29201.0], [61.4, 29201.0], [61.5, 29201.0], [61.6, 29201.0], [61.7, 29201.0], [61.8, 29201.0], [61.9, 29201.0], [62.0, 29201.0], [62.1, 29201.0], [62.2, 29201.0], [62.3, 29201.0], [62.4, 29201.0], [62.5, 29201.0], [62.6, 29201.0], [62.7, 29201.0], [62.8, 29201.0], [62.9, 29201.0], [63.0, 29201.0], [63.1, 29201.0], [63.2, 29201.0], [63.3, 29201.0], [63.4, 29201.0], [63.5, 29201.0], [63.6, 29201.0], [63.7, 29319.0], [63.8, 29319.0], [63.9, 29319.0], [64.0, 29319.0], [64.1, 29319.0], [64.2, 29319.0], [64.3, 29319.0], [64.4, 29319.0], [64.5, 29319.0], [64.6, 29319.0], [64.7, 29319.0], [64.8, 29319.0], [64.9, 29319.0], [65.0, 29319.0], [65.1, 29319.0], [65.2, 29319.0], [65.3, 29319.0], [65.4, 29319.0], [65.5, 29319.0], [65.6, 29319.0], [65.7, 29319.0], [65.8, 29319.0], [65.9, 29319.0], [66.0, 29319.0], [66.1, 29319.0], [66.2, 29319.0], [66.3, 29319.0], [66.4, 29319.0], [66.5, 29319.0], [66.6, 29319.0], [66.7, 29319.0], [66.8, 29319.0], [66.9, 29319.0], [67.0, 29319.0], [67.1, 29319.0], [67.2, 29319.0], [67.3, 29319.0], [67.4, 29319.0], [67.5, 29319.0], [67.6, 29319.0], [67.7, 29319.0], [67.8, 29319.0], [67.9, 29319.0], [68.0, 29319.0], [68.1, 29319.0], [68.2, 29387.0], [68.3, 29387.0], [68.4, 29387.0], [68.5, 29387.0], [68.6, 29387.0], [68.7, 29387.0], [68.8, 29387.0], [68.9, 29387.0], [69.0, 29387.0], [69.1, 29387.0], [69.2, 29387.0], [69.3, 29387.0], [69.4, 29387.0], [69.5, 29387.0], [69.6, 29387.0], [69.7, 29387.0], [69.8, 29387.0], [69.9, 29387.0], [70.0, 29387.0], [70.1, 29387.0], [70.2, 29387.0], [70.3, 29387.0], [70.4, 29387.0], [70.5, 29387.0], [70.6, 29387.0], [70.7, 29387.0], [70.8, 29387.0], [70.9, 29387.0], [71.0, 29387.0], [71.1, 29387.0], [71.2, 29387.0], [71.3, 29387.0], [71.4, 29387.0], [71.5, 29387.0], [71.6, 29387.0], [71.7, 29387.0], [71.8, 29387.0], [71.9, 29387.0], [72.0, 29387.0], [72.1, 29387.0], [72.2, 29387.0], [72.3, 29387.0], [72.4, 29387.0], [72.5, 29387.0], [72.6, 29387.0], [72.7, 29387.0], [72.8, 30292.0], [72.9, 30292.0], [73.0, 30292.0], [73.1, 30292.0], [73.2, 30292.0], [73.3, 30292.0], [73.4, 30292.0], [73.5, 30292.0], [73.6, 30292.0], [73.7, 30292.0], [73.8, 30292.0], [73.9, 30292.0], [74.0, 30292.0], [74.1, 30292.0], [74.2, 30292.0], [74.3, 30292.0], [74.4, 30292.0], [74.5, 30292.0], [74.6, 30292.0], [74.7, 30292.0], [74.8, 30292.0], [74.9, 30292.0], [75.0, 30292.0], [75.1, 30292.0], [75.2, 30292.0], [75.3, 30292.0], [75.4, 30292.0], [75.5, 30292.0], [75.6, 30292.0], [75.7, 30292.0], [75.8, 30292.0], [75.9, 30292.0], [76.0, 30292.0], [76.1, 30292.0], [76.2, 30292.0], [76.3, 30292.0], [76.4, 30292.0], [76.5, 30292.0], [76.6, 30292.0], [76.7, 30292.0], [76.8, 30292.0], [76.9, 30292.0], [77.0, 30292.0], [77.1, 30292.0], [77.2, 30292.0], [77.3, 30458.0], [77.4, 30458.0], [77.5, 30458.0], [77.6, 30458.0], [77.7, 30458.0], [77.8, 30458.0], [77.9, 30458.0], [78.0, 30458.0], [78.1, 30458.0], [78.2, 30458.0], [78.3, 30458.0], [78.4, 30458.0], [78.5, 30458.0], [78.6, 30458.0], [78.7, 30458.0], [78.8, 30458.0], [78.9, 30458.0], [79.0, 30458.0], [79.1, 30458.0], [79.2, 30458.0], [79.3, 30458.0], [79.4, 30458.0], [79.5, 30458.0], [79.6, 30458.0], [79.7, 30458.0], [79.8, 30458.0], [79.9, 30458.0], [80.0, 30458.0], [80.1, 30458.0], [80.2, 30458.0], [80.3, 30458.0], [80.4, 30458.0], [80.5, 30458.0], [80.6, 30458.0], [80.7, 30458.0], [80.8, 30458.0], [80.9, 30458.0], [81.0, 30458.0], [81.1, 30458.0], [81.2, 30458.0], [81.3, 30458.0], [81.4, 30458.0], [81.5, 30458.0], [81.6, 30458.0], [81.7, 30458.0], [81.8, 30458.0], [81.9, 30986.0], [82.0, 30986.0], [82.1, 30986.0], [82.2, 30986.0], [82.3, 30986.0], [82.4, 30986.0], [82.5, 30986.0], [82.6, 30986.0], [82.7, 30986.0], [82.8, 30986.0], [82.9, 30986.0], [83.0, 30986.0], [83.1, 30986.0], [83.2, 30986.0], [83.3, 30986.0], [83.4, 30986.0], [83.5, 30986.0], [83.6, 30986.0], [83.7, 30986.0], [83.8, 30986.0], [83.9, 30986.0], [84.0, 30986.0], [84.1, 30986.0], [84.2, 30986.0], [84.3, 30986.0], [84.4, 30986.0], [84.5, 30986.0], [84.6, 30986.0], [84.7, 30986.0], [84.8, 30986.0], [84.9, 30986.0], [85.0, 30986.0], [85.1, 30986.0], [85.2, 30986.0], [85.3, 30986.0], [85.4, 30986.0], [85.5, 30986.0], [85.6, 30986.0], [85.7, 30986.0], [85.8, 30986.0], [85.9, 30986.0], [86.0, 30986.0], [86.1, 30986.0], [86.2, 30986.0], [86.3, 30986.0], [86.4, 31103.0], [86.5, 31103.0], [86.6, 31103.0], [86.7, 31103.0], [86.8, 31103.0], [86.9, 31103.0], [87.0, 31103.0], [87.1, 31103.0], [87.2, 31103.0], [87.3, 31103.0], [87.4, 31103.0], [87.5, 31103.0], [87.6, 31103.0], [87.7, 31103.0], [87.8, 31103.0], [87.9, 31103.0], [88.0, 31103.0], [88.1, 31103.0], [88.2, 31103.0], [88.3, 31103.0], [88.4, 31103.0], [88.5, 31103.0], [88.6, 31103.0], [88.7, 31103.0], [88.8, 31103.0], [88.9, 31103.0], [89.0, 31103.0], [89.1, 31103.0], [89.2, 31103.0], [89.3, 31103.0], [89.4, 31103.0], [89.5, 31103.0], [89.6, 31103.0], [89.7, 31103.0], [89.8, 31103.0], [89.9, 31103.0], [90.0, 31103.0], [90.1, 31103.0], [90.2, 31103.0], [90.3, 31103.0], [90.4, 31103.0], [90.5, 31103.0], [90.6, 31103.0], [90.7, 31103.0], [90.8, 31103.0], [90.9, 31103.0], [91.0, 31185.0], [91.1, 31185.0], [91.2, 31185.0], [91.3, 31185.0], [91.4, 31185.0], [91.5, 31185.0], [91.6, 31185.0], [91.7, 31185.0], [91.8, 31185.0], [91.9, 31185.0], [92.0, 31185.0], [92.1, 31185.0], [92.2, 31185.0], [92.3, 31185.0], [92.4, 31185.0], [92.5, 31185.0], [92.6, 31185.0], [92.7, 31185.0], [92.8, 31185.0], [92.9, 31185.0], [93.0, 31185.0], [93.1, 31185.0], [93.2, 31185.0], [93.3, 31185.0], [93.4, 31185.0], [93.5, 31185.0], [93.6, 31185.0], [93.7, 31185.0], [93.8, 31185.0], [93.9, 31185.0], [94.0, 31185.0], [94.1, 31185.0], [94.2, 31185.0], [94.3, 31185.0], [94.4, 31185.0], [94.5, 31185.0], [94.6, 31185.0], [94.7, 31185.0], [94.8, 31185.0], [94.9, 31185.0], [95.0, 31185.0], [95.1, 31185.0], [95.2, 31185.0], [95.3, 31185.0], [95.4, 31185.0], [95.5, 31293.0], [95.6, 31293.0], [95.7, 31293.0], [95.8, 31293.0], [95.9, 31293.0], [96.0, 31293.0], [96.1, 31293.0], [96.2, 31293.0], [96.3, 31293.0], [96.4, 31293.0], [96.5, 31293.0], [96.6, 31293.0], [96.7, 31293.0], [96.8, 31293.0], [96.9, 31293.0], [97.0, 31293.0], [97.1, 31293.0], [97.2, 31293.0], [97.3, 31293.0], [97.4, 31293.0], [97.5, 31293.0], [97.6, 31293.0], [97.7, 31293.0], [97.8, 31293.0], [97.9, 31293.0], [98.0, 31293.0], [98.1, 31293.0], [98.2, 31293.0], [98.3, 31293.0], [98.4, 31293.0], [98.5, 31293.0], [98.6, 31293.0], [98.7, 31293.0], [98.8, 31293.0], [98.9, 31293.0], [99.0, 31293.0], [99.1, 31293.0], [99.2, 31293.0], [99.3, 31293.0], [99.4, 31293.0], [99.5, 31293.0], [99.6, 31293.0], [99.7, 31293.0], [99.8, 31293.0], [99.9, 31293.0], [100.0, 31293.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3400.0, "maxY": 2.0, "series": [{"data": [[9400.0, 1.0], [12400.0, 1.0], [3400.0, 1.0], [15300.0, 1.0], [18300.0, 1.0], [21200.0, 1.0], [24200.0, 1.0], [25300.0, 1.0], [6400.0, 1.0], [26600.0, 1.0], [25900.0, 1.0], [27300.0, 1.0], [27900.0, 1.0], [29200.0, 1.0], [29300.0, 2.0], [30400.0, 1.0], [30200.0, 1.0], [30900.0, 1.0], [31100.0, 2.0], [31200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 31200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 22.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.352941176470588, "minX": 1.60441068E12, "maxY": 10.0, "series": [{"data": [[1.60441074E12, 7.352941176470588], [1.60441068E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60441074E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20159.076923076922, "minX": 1.0, "maxY": 31293.0, "series": [{"data": [[8.0, 30292.0], [4.0, 27959.0], [2.0, 25959.0], [1.0, 25382.0], [9.0, 31293.0], [10.0, 20159.076923076922], [5.0, 29387.0], [6.0, 29319.0], [3.0, 26688.0], [7.0, 29201.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.954545454545455, 23524.909090909092]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 35.483333333333334, "minX": 1.60441068E12, "maxY": 40230.166666666664, "series": [{"data": [[1.60441074E12, 40230.166666666664], [1.60441068E12, 8992.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60441074E12, 119.01666666666667], [1.60441068E12, 35.483333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60441074E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9429.0, "minX": 1.60441068E12, "maxY": 27670.764705882353, "series": [{"data": [[1.60441074E12, 27670.764705882353], [1.60441068E12, 9429.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60441074E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9426.8, "minX": 1.60441068E12, "maxY": 27669.0, "series": [{"data": [[1.60441074E12, 27669.0], [1.60441068E12, 9426.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60441074E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5882352941176471, "minX": 1.60441068E12, "maxY": 19.2, "series": [{"data": [[1.60441074E12, 0.5882352941176471], [1.60441068E12, 19.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60441074E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3429.0, "minX": 1.60441068E12, "maxY": 31293.0, "series": [{"data": [[1.60441074E12, 31293.0], [1.60441068E12, 15335.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60441074E12, 18325.0], [1.60441068E12, 3429.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60441074E12, 18325.0], [1.60441068E12, 3429.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60441074E12, 18325.0], [1.60441068E12, 3429.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60441074E12, 18325.0], [1.60441068E12, 3429.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60441074E12, 29201.0], [1.60441068E12, 9469.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60441074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 27031.0, "minX": 1.0, "maxY": 27031.0, "series": [{"data": [[1.0, 27031.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 27029.0, "minX": 1.0, "maxY": 27029.0, "series": [{"data": [[1.0, 27029.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60441068E12, "maxY": 0.25, "series": [{"data": [[1.60441074E12, 0.11666666666666667], [1.60441068E12, 0.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60441074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60441068E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.60441074E12, 0.2833333333333333], [1.60441068E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60441074E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60441068E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.60441074E12, 0.2833333333333333], [1.60441068E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60441074E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60441068E12, "maxY": 0.2833333333333333, "series": [{"data": [[1.60441074E12, 0.2833333333333333], [1.60441068E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60441074E12, "title": "Total Transactions Per Second"}},
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

