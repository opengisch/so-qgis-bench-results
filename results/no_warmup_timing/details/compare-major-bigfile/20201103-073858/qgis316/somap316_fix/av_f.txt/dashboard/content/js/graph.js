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
        data: {"result": {"minY": 4182.0, "minX": 0.0, "maxY": 39291.0, "series": [{"data": [[0.0, 4182.0], [0.1, 4182.0], [0.2, 4182.0], [0.3, 4182.0], [0.4, 4182.0], [0.5, 4182.0], [0.6, 4182.0], [0.7, 4182.0], [0.8, 4182.0], [0.9, 4182.0], [1.0, 4182.0], [1.1, 4182.0], [1.2, 4182.0], [1.3, 4182.0], [1.4, 4182.0], [1.5, 4182.0], [1.6, 4182.0], [1.7, 4182.0], [1.8, 4182.0], [1.9, 4182.0], [2.0, 4182.0], [2.1, 4182.0], [2.2, 4182.0], [2.3, 4182.0], [2.4, 4182.0], [2.5, 4182.0], [2.6, 4182.0], [2.7, 4182.0], [2.8, 4182.0], [2.9, 4182.0], [3.0, 4182.0], [3.1, 4182.0], [3.2, 4182.0], [3.3, 4182.0], [3.4, 4182.0], [3.5, 4182.0], [3.6, 4182.0], [3.7, 4182.0], [3.8, 4182.0], [3.9, 4182.0], [4.0, 4182.0], [4.1, 4182.0], [4.2, 4182.0], [4.3, 4182.0], [4.4, 4182.0], [4.5, 4182.0], [4.6, 8050.0], [4.7, 8050.0], [4.8, 8050.0], [4.9, 8050.0], [5.0, 8050.0], [5.1, 8050.0], [5.2, 8050.0], [5.3, 8050.0], [5.4, 8050.0], [5.5, 8050.0], [5.6, 8050.0], [5.7, 8050.0], [5.8, 8050.0], [5.9, 8050.0], [6.0, 8050.0], [6.1, 8050.0], [6.2, 8050.0], [6.3, 8050.0], [6.4, 8050.0], [6.5, 8050.0], [6.6, 8050.0], [6.7, 8050.0], [6.8, 8050.0], [6.9, 8050.0], [7.0, 8050.0], [7.1, 8050.0], [7.2, 8050.0], [7.3, 8050.0], [7.4, 8050.0], [7.5, 8050.0], [7.6, 8050.0], [7.7, 8050.0], [7.8, 8050.0], [7.9, 8050.0], [8.0, 8050.0], [8.1, 8050.0], [8.2, 8050.0], [8.3, 8050.0], [8.4, 8050.0], [8.5, 8050.0], [8.6, 8050.0], [8.7, 8050.0], [8.8, 8050.0], [8.9, 8050.0], [9.0, 8050.0], [9.1, 12056.0], [9.2, 12056.0], [9.3, 12056.0], [9.4, 12056.0], [9.5, 12056.0], [9.6, 12056.0], [9.7, 12056.0], [9.8, 12056.0], [9.9, 12056.0], [10.0, 12056.0], [10.1, 12056.0], [10.2, 12056.0], [10.3, 12056.0], [10.4, 12056.0], [10.5, 12056.0], [10.6, 12056.0], [10.7, 12056.0], [10.8, 12056.0], [10.9, 12056.0], [11.0, 12056.0], [11.1, 12056.0], [11.2, 12056.0], [11.3, 12056.0], [11.4, 12056.0], [11.5, 12056.0], [11.6, 12056.0], [11.7, 12056.0], [11.8, 12056.0], [11.9, 12056.0], [12.0, 12056.0], [12.1, 12056.0], [12.2, 12056.0], [12.3, 12056.0], [12.4, 12056.0], [12.5, 12056.0], [12.6, 12056.0], [12.7, 12056.0], [12.8, 12056.0], [12.9, 12056.0], [13.0, 12056.0], [13.1, 12056.0], [13.2, 12056.0], [13.3, 12056.0], [13.4, 12056.0], [13.5, 12056.0], [13.6, 12056.0], [13.7, 15761.0], [13.8, 15761.0], [13.9, 15761.0], [14.0, 15761.0], [14.1, 15761.0], [14.2, 15761.0], [14.3, 15761.0], [14.4, 15761.0], [14.5, 15761.0], [14.6, 15761.0], [14.7, 15761.0], [14.8, 15761.0], [14.9, 15761.0], [15.0, 15761.0], [15.1, 15761.0], [15.2, 15761.0], [15.3, 15761.0], [15.4, 15761.0], [15.5, 15761.0], [15.6, 15761.0], [15.7, 15761.0], [15.8, 15761.0], [15.9, 15761.0], [16.0, 15761.0], [16.1, 15761.0], [16.2, 15761.0], [16.3, 15761.0], [16.4, 15761.0], [16.5, 15761.0], [16.6, 15761.0], [16.7, 15761.0], [16.8, 15761.0], [16.9, 15761.0], [17.0, 15761.0], [17.1, 15761.0], [17.2, 15761.0], [17.3, 15761.0], [17.4, 15761.0], [17.5, 15761.0], [17.6, 15761.0], [17.7, 15761.0], [17.8, 15761.0], [17.9, 15761.0], [18.0, 15761.0], [18.1, 15761.0], [18.2, 19420.0], [18.3, 19420.0], [18.4, 19420.0], [18.5, 19420.0], [18.6, 19420.0], [18.7, 19420.0], [18.8, 19420.0], [18.9, 19420.0], [19.0, 19420.0], [19.1, 19420.0], [19.2, 19420.0], [19.3, 19420.0], [19.4, 19420.0], [19.5, 19420.0], [19.6, 19420.0], [19.7, 19420.0], [19.8, 19420.0], [19.9, 19420.0], [20.0, 19420.0], [20.1, 19420.0], [20.2, 19420.0], [20.3, 19420.0], [20.4, 19420.0], [20.5, 19420.0], [20.6, 19420.0], [20.7, 19420.0], [20.8, 19420.0], [20.9, 19420.0], [21.0, 19420.0], [21.1, 19420.0], [21.2, 19420.0], [21.3, 19420.0], [21.4, 19420.0], [21.5, 19420.0], [21.6, 19420.0], [21.7, 19420.0], [21.8, 19420.0], [21.9, 19420.0], [22.0, 19420.0], [22.1, 19420.0], [22.2, 19420.0], [22.3, 19420.0], [22.4, 19420.0], [22.5, 19420.0], [22.6, 19420.0], [22.7, 19420.0], [22.8, 21682.0], [22.9, 21682.0], [23.0, 21682.0], [23.1, 21682.0], [23.2, 21682.0], [23.3, 21682.0], [23.4, 21682.0], [23.5, 21682.0], [23.6, 21682.0], [23.7, 21682.0], [23.8, 21682.0], [23.9, 21682.0], [24.0, 21682.0], [24.1, 21682.0], [24.2, 21682.0], [24.3, 21682.0], [24.4, 21682.0], [24.5, 21682.0], [24.6, 21682.0], [24.7, 21682.0], [24.8, 21682.0], [24.9, 21682.0], [25.0, 21682.0], [25.1, 21682.0], [25.2, 21682.0], [25.3, 21682.0], [25.4, 21682.0], [25.5, 21682.0], [25.6, 21682.0], [25.7, 21682.0], [25.8, 21682.0], [25.9, 21682.0], [26.0, 21682.0], [26.1, 21682.0], [26.2, 21682.0], [26.3, 21682.0], [26.4, 21682.0], [26.5, 21682.0], [26.6, 21682.0], [26.7, 21682.0], [26.8, 21682.0], [26.9, 21682.0], [27.0, 21682.0], [27.1, 21682.0], [27.2, 21682.0], [27.3, 23103.0], [27.4, 23103.0], [27.5, 23103.0], [27.6, 23103.0], [27.7, 23103.0], [27.8, 23103.0], [27.9, 23103.0], [28.0, 23103.0], [28.1, 23103.0], [28.2, 23103.0], [28.3, 23103.0], [28.4, 23103.0], [28.5, 23103.0], [28.6, 23103.0], [28.7, 23103.0], [28.8, 23103.0], [28.9, 23103.0], [29.0, 23103.0], [29.1, 23103.0], [29.2, 23103.0], [29.3, 23103.0], [29.4, 23103.0], [29.5, 23103.0], [29.6, 23103.0], [29.7, 23103.0], [29.8, 23103.0], [29.9, 23103.0], [30.0, 23103.0], [30.1, 23103.0], [30.2, 23103.0], [30.3, 23103.0], [30.4, 23103.0], [30.5, 23103.0], [30.6, 23103.0], [30.7, 23103.0], [30.8, 23103.0], [30.9, 23103.0], [31.0, 23103.0], [31.1, 23103.0], [31.2, 23103.0], [31.3, 23103.0], [31.4, 23103.0], [31.5, 23103.0], [31.6, 23103.0], [31.7, 23103.0], [31.8, 23103.0], [31.9, 23636.0], [32.0, 23636.0], [32.1, 23636.0], [32.2, 23636.0], [32.3, 23636.0], [32.4, 23636.0], [32.5, 23636.0], [32.6, 23636.0], [32.7, 23636.0], [32.8, 23636.0], [32.9, 23636.0], [33.0, 23636.0], [33.1, 23636.0], [33.2, 23636.0], [33.3, 23636.0], [33.4, 23636.0], [33.5, 23636.0], [33.6, 23636.0], [33.7, 23636.0], [33.8, 23636.0], [33.9, 23636.0], [34.0, 23636.0], [34.1, 23636.0], [34.2, 23636.0], [34.3, 23636.0], [34.4, 23636.0], [34.5, 23636.0], [34.6, 23636.0], [34.7, 23636.0], [34.8, 23636.0], [34.9, 23636.0], [35.0, 23636.0], [35.1, 23636.0], [35.2, 23636.0], [35.3, 23636.0], [35.4, 23636.0], [35.5, 23636.0], [35.6, 23636.0], [35.7, 23636.0], [35.8, 23636.0], [35.9, 23636.0], [36.0, 23636.0], [36.1, 23636.0], [36.2, 23636.0], [36.3, 23636.0], [36.4, 25528.0], [36.5, 25528.0], [36.6, 25528.0], [36.7, 25528.0], [36.8, 25528.0], [36.9, 25528.0], [37.0, 25528.0], [37.1, 25528.0], [37.2, 25528.0], [37.3, 25528.0], [37.4, 25528.0], [37.5, 25528.0], [37.6, 25528.0], [37.7, 25528.0], [37.8, 25528.0], [37.9, 25528.0], [38.0, 25528.0], [38.1, 25528.0], [38.2, 25528.0], [38.3, 25528.0], [38.4, 25528.0], [38.5, 25528.0], [38.6, 25528.0], [38.7, 25528.0], [38.8, 25528.0], [38.9, 25528.0], [39.0, 25528.0], [39.1, 25528.0], [39.2, 25528.0], [39.3, 25528.0], [39.4, 25528.0], [39.5, 25528.0], [39.6, 25528.0], [39.7, 25528.0], [39.8, 25528.0], [39.9, 25528.0], [40.0, 25528.0], [40.1, 25528.0], [40.2, 25528.0], [40.3, 25528.0], [40.4, 25528.0], [40.5, 25528.0], [40.6, 25528.0], [40.7, 25528.0], [40.8, 25528.0], [40.9, 25528.0], [41.0, 27227.0], [41.1, 27227.0], [41.2, 27227.0], [41.3, 27227.0], [41.4, 27227.0], [41.5, 27227.0], [41.6, 27227.0], [41.7, 27227.0], [41.8, 27227.0], [41.9, 27227.0], [42.0, 27227.0], [42.1, 27227.0], [42.2, 27227.0], [42.3, 27227.0], [42.4, 27227.0], [42.5, 27227.0], [42.6, 27227.0], [42.7, 27227.0], [42.8, 27227.0], [42.9, 27227.0], [43.0, 27227.0], [43.1, 27227.0], [43.2, 27227.0], [43.3, 27227.0], [43.4, 27227.0], [43.5, 27227.0], [43.6, 27227.0], [43.7, 27227.0], [43.8, 27227.0], [43.9, 27227.0], [44.0, 27227.0], [44.1, 27227.0], [44.2, 27227.0], [44.3, 27227.0], [44.4, 27227.0], [44.5, 27227.0], [44.6, 27227.0], [44.7, 27227.0], [44.8, 27227.0], [44.9, 27227.0], [45.0, 27227.0], [45.1, 27227.0], [45.2, 27227.0], [45.3, 27227.0], [45.4, 27227.0], [45.5, 29387.0], [45.6, 29387.0], [45.7, 29387.0], [45.8, 29387.0], [45.9, 29387.0], [46.0, 29387.0], [46.1, 29387.0], [46.2, 29387.0], [46.3, 29387.0], [46.4, 29387.0], [46.5, 29387.0], [46.6, 29387.0], [46.7, 29387.0], [46.8, 29387.0], [46.9, 29387.0], [47.0, 29387.0], [47.1, 29387.0], [47.2, 29387.0], [47.3, 29387.0], [47.4, 29387.0], [47.5, 29387.0], [47.6, 29387.0], [47.7, 29387.0], [47.8, 29387.0], [47.9, 29387.0], [48.0, 29387.0], [48.1, 29387.0], [48.2, 29387.0], [48.3, 29387.0], [48.4, 29387.0], [48.5, 29387.0], [48.6, 29387.0], [48.7, 29387.0], [48.8, 29387.0], [48.9, 29387.0], [49.0, 29387.0], [49.1, 29387.0], [49.2, 29387.0], [49.3, 29387.0], [49.4, 29387.0], [49.5, 29387.0], [49.6, 29387.0], [49.7, 29387.0], [49.8, 29387.0], [49.9, 29387.0], [50.0, 29387.0], [50.1, 31069.0], [50.2, 31069.0], [50.3, 31069.0], [50.4, 31069.0], [50.5, 31069.0], [50.6, 31069.0], [50.7, 31069.0], [50.8, 31069.0], [50.9, 31069.0], [51.0, 31069.0], [51.1, 31069.0], [51.2, 31069.0], [51.3, 31069.0], [51.4, 31069.0], [51.5, 31069.0], [51.6, 31069.0], [51.7, 31069.0], [51.8, 31069.0], [51.9, 31069.0], [52.0, 31069.0], [52.1, 31069.0], [52.2, 31069.0], [52.3, 31069.0], [52.4, 31069.0], [52.5, 31069.0], [52.6, 31069.0], [52.7, 31069.0], [52.8, 31069.0], [52.9, 31069.0], [53.0, 31069.0], [53.1, 31069.0], [53.2, 31069.0], [53.3, 31069.0], [53.4, 31069.0], [53.5, 31069.0], [53.6, 31069.0], [53.7, 31069.0], [53.8, 31069.0], [53.9, 31069.0], [54.0, 31069.0], [54.1, 31069.0], [54.2, 31069.0], [54.3, 31069.0], [54.4, 31069.0], [54.5, 31069.0], [54.6, 33107.0], [54.7, 33107.0], [54.8, 33107.0], [54.9, 33107.0], [55.0, 33107.0], [55.1, 33107.0], [55.2, 33107.0], [55.3, 33107.0], [55.4, 33107.0], [55.5, 33107.0], [55.6, 33107.0], [55.7, 33107.0], [55.8, 33107.0], [55.9, 33107.0], [56.0, 33107.0], [56.1, 33107.0], [56.2, 33107.0], [56.3, 33107.0], [56.4, 33107.0], [56.5, 33107.0], [56.6, 33107.0], [56.7, 33107.0], [56.8, 33107.0], [56.9, 33107.0], [57.0, 33107.0], [57.1, 33107.0], [57.2, 33107.0], [57.3, 33107.0], [57.4, 33107.0], [57.5, 33107.0], [57.6, 33107.0], [57.7, 33107.0], [57.8, 33107.0], [57.9, 33107.0], [58.0, 33107.0], [58.1, 33107.0], [58.2, 33107.0], [58.3, 33107.0], [58.4, 33107.0], [58.5, 33107.0], [58.6, 33107.0], [58.7, 33107.0], [58.8, 33107.0], [58.9, 33107.0], [59.0, 33107.0], [59.1, 33211.0], [59.2, 33211.0], [59.3, 33211.0], [59.4, 33211.0], [59.5, 33211.0], [59.6, 33211.0], [59.7, 33211.0], [59.8, 33211.0], [59.9, 33211.0], [60.0, 33211.0], [60.1, 33211.0], [60.2, 33211.0], [60.3, 33211.0], [60.4, 33211.0], [60.5, 33211.0], [60.6, 33211.0], [60.7, 33211.0], [60.8, 33211.0], [60.9, 33211.0], [61.0, 33211.0], [61.1, 33211.0], [61.2, 33211.0], [61.3, 33211.0], [61.4, 33211.0], [61.5, 33211.0], [61.6, 33211.0], [61.7, 33211.0], [61.8, 33211.0], [61.9, 33211.0], [62.0, 33211.0], [62.1, 33211.0], [62.2, 33211.0], [62.3, 33211.0], [62.4, 33211.0], [62.5, 33211.0], [62.6, 33211.0], [62.7, 33211.0], [62.8, 33211.0], [62.9, 33211.0], [63.0, 33211.0], [63.1, 33211.0], [63.2, 33211.0], [63.3, 33211.0], [63.4, 33211.0], [63.5, 33211.0], [63.6, 33211.0], [63.7, 33526.0], [63.8, 33526.0], [63.9, 33526.0], [64.0, 33526.0], [64.1, 33526.0], [64.2, 33526.0], [64.3, 33526.0], [64.4, 33526.0], [64.5, 33526.0], [64.6, 33526.0], [64.7, 33526.0], [64.8, 33526.0], [64.9, 33526.0], [65.0, 33526.0], [65.1, 33526.0], [65.2, 33526.0], [65.3, 33526.0], [65.4, 33526.0], [65.5, 33526.0], [65.6, 33526.0], [65.7, 33526.0], [65.8, 33526.0], [65.9, 33526.0], [66.0, 33526.0], [66.1, 33526.0], [66.2, 33526.0], [66.3, 33526.0], [66.4, 33526.0], [66.5, 33526.0], [66.6, 33526.0], [66.7, 33526.0], [66.8, 33526.0], [66.9, 33526.0], [67.0, 33526.0], [67.1, 33526.0], [67.2, 33526.0], [67.3, 33526.0], [67.4, 33526.0], [67.5, 33526.0], [67.6, 33526.0], [67.7, 33526.0], [67.8, 33526.0], [67.9, 33526.0], [68.0, 33526.0], [68.1, 33526.0], [68.2, 34745.0], [68.3, 34745.0], [68.4, 34745.0], [68.5, 34745.0], [68.6, 34745.0], [68.7, 34745.0], [68.8, 34745.0], [68.9, 34745.0], [69.0, 34745.0], [69.1, 34745.0], [69.2, 34745.0], [69.3, 34745.0], [69.4, 34745.0], [69.5, 34745.0], [69.6, 34745.0], [69.7, 34745.0], [69.8, 34745.0], [69.9, 34745.0], [70.0, 34745.0], [70.1, 34745.0], [70.2, 34745.0], [70.3, 34745.0], [70.4, 34745.0], [70.5, 34745.0], [70.6, 34745.0], [70.7, 34745.0], [70.8, 34745.0], [70.9, 34745.0], [71.0, 34745.0], [71.1, 34745.0], [71.2, 34745.0], [71.3, 34745.0], [71.4, 34745.0], [71.5, 34745.0], [71.6, 34745.0], [71.7, 34745.0], [71.8, 34745.0], [71.9, 34745.0], [72.0, 34745.0], [72.1, 34745.0], [72.2, 34745.0], [72.3, 34745.0], [72.4, 34745.0], [72.5, 34745.0], [72.6, 34745.0], [72.7, 34745.0], [72.8, 36457.0], [72.9, 36457.0], [73.0, 36457.0], [73.1, 36457.0], [73.2, 36457.0], [73.3, 36457.0], [73.4, 36457.0], [73.5, 36457.0], [73.6, 36457.0], [73.7, 36457.0], [73.8, 36457.0], [73.9, 36457.0], [74.0, 36457.0], [74.1, 36457.0], [74.2, 36457.0], [74.3, 36457.0], [74.4, 36457.0], [74.5, 36457.0], [74.6, 36457.0], [74.7, 36457.0], [74.8, 36457.0], [74.9, 36457.0], [75.0, 36457.0], [75.1, 36457.0], [75.2, 36457.0], [75.3, 36457.0], [75.4, 36457.0], [75.5, 36457.0], [75.6, 36457.0], [75.7, 36457.0], [75.8, 36457.0], [75.9, 36457.0], [76.0, 36457.0], [76.1, 36457.0], [76.2, 36457.0], [76.3, 36457.0], [76.4, 36457.0], [76.5, 36457.0], [76.6, 36457.0], [76.7, 36457.0], [76.8, 36457.0], [76.9, 36457.0], [77.0, 36457.0], [77.1, 36457.0], [77.2, 36457.0], [77.3, 38561.0], [77.4, 38561.0], [77.5, 38561.0], [77.6, 38561.0], [77.7, 38561.0], [77.8, 38561.0], [77.9, 38561.0], [78.0, 38561.0], [78.1, 38561.0], [78.2, 38561.0], [78.3, 38561.0], [78.4, 38561.0], [78.5, 38561.0], [78.6, 38561.0], [78.7, 38561.0], [78.8, 38561.0], [78.9, 38561.0], [79.0, 38561.0], [79.1, 38561.0], [79.2, 38561.0], [79.3, 38561.0], [79.4, 38561.0], [79.5, 38561.0], [79.6, 38561.0], [79.7, 38561.0], [79.8, 38561.0], [79.9, 38561.0], [80.0, 38561.0], [80.1, 38561.0], [80.2, 38561.0], [80.3, 38561.0], [80.4, 38561.0], [80.5, 38561.0], [80.6, 38561.0], [80.7, 38561.0], [80.8, 38561.0], [80.9, 38561.0], [81.0, 38561.0], [81.1, 38561.0], [81.2, 38561.0], [81.3, 38561.0], [81.4, 38561.0], [81.5, 38561.0], [81.6, 38561.0], [81.7, 38561.0], [81.8, 38561.0], [81.9, 39063.0], [82.0, 39063.0], [82.1, 39063.0], [82.2, 39063.0], [82.3, 39063.0], [82.4, 39063.0], [82.5, 39063.0], [82.6, 39063.0], [82.7, 39063.0], [82.8, 39063.0], [82.9, 39063.0], [83.0, 39063.0], [83.1, 39063.0], [83.2, 39063.0], [83.3, 39063.0], [83.4, 39063.0], [83.5, 39063.0], [83.6, 39063.0], [83.7, 39063.0], [83.8, 39063.0], [83.9, 39063.0], [84.0, 39063.0], [84.1, 39063.0], [84.2, 39063.0], [84.3, 39063.0], [84.4, 39063.0], [84.5, 39063.0], [84.6, 39063.0], [84.7, 39063.0], [84.8, 39063.0], [84.9, 39063.0], [85.0, 39063.0], [85.1, 39063.0], [85.2, 39063.0], [85.3, 39063.0], [85.4, 39063.0], [85.5, 39063.0], [85.6, 39063.0], [85.7, 39063.0], [85.8, 39063.0], [85.9, 39063.0], [86.0, 39063.0], [86.1, 39063.0], [86.2, 39063.0], [86.3, 39063.0], [86.4, 39138.0], [86.5, 39138.0], [86.6, 39138.0], [86.7, 39138.0], [86.8, 39138.0], [86.9, 39138.0], [87.0, 39138.0], [87.1, 39138.0], [87.2, 39138.0], [87.3, 39138.0], [87.4, 39138.0], [87.5, 39138.0], [87.6, 39138.0], [87.7, 39138.0], [87.8, 39138.0], [87.9, 39138.0], [88.0, 39138.0], [88.1, 39138.0], [88.2, 39138.0], [88.3, 39138.0], [88.4, 39138.0], [88.5, 39138.0], [88.6, 39138.0], [88.7, 39138.0], [88.8, 39138.0], [88.9, 39138.0], [89.0, 39138.0], [89.1, 39138.0], [89.2, 39138.0], [89.3, 39138.0], [89.4, 39138.0], [89.5, 39138.0], [89.6, 39138.0], [89.7, 39138.0], [89.8, 39138.0], [89.9, 39138.0], [90.0, 39138.0], [90.1, 39138.0], [90.2, 39138.0], [90.3, 39138.0], [90.4, 39138.0], [90.5, 39138.0], [90.6, 39138.0], [90.7, 39138.0], [90.8, 39138.0], [90.9, 39138.0], [91.0, 39225.0], [91.1, 39225.0], [91.2, 39225.0], [91.3, 39225.0], [91.4, 39225.0], [91.5, 39225.0], [91.6, 39225.0], [91.7, 39225.0], [91.8, 39225.0], [91.9, 39225.0], [92.0, 39225.0], [92.1, 39225.0], [92.2, 39225.0], [92.3, 39225.0], [92.4, 39225.0], [92.5, 39225.0], [92.6, 39225.0], [92.7, 39225.0], [92.8, 39225.0], [92.9, 39225.0], [93.0, 39225.0], [93.1, 39225.0], [93.2, 39225.0], [93.3, 39225.0], [93.4, 39225.0], [93.5, 39225.0], [93.6, 39225.0], [93.7, 39225.0], [93.8, 39225.0], [93.9, 39225.0], [94.0, 39225.0], [94.1, 39225.0], [94.2, 39225.0], [94.3, 39225.0], [94.4, 39225.0], [94.5, 39225.0], [94.6, 39225.0], [94.7, 39225.0], [94.8, 39225.0], [94.9, 39225.0], [95.0, 39225.0], [95.1, 39225.0], [95.2, 39225.0], [95.3, 39225.0], [95.4, 39225.0], [95.5, 39291.0], [95.6, 39291.0], [95.7, 39291.0], [95.8, 39291.0], [95.9, 39291.0], [96.0, 39291.0], [96.1, 39291.0], [96.2, 39291.0], [96.3, 39291.0], [96.4, 39291.0], [96.5, 39291.0], [96.6, 39291.0], [96.7, 39291.0], [96.8, 39291.0], [96.9, 39291.0], [97.0, 39291.0], [97.1, 39291.0], [97.2, 39291.0], [97.3, 39291.0], [97.4, 39291.0], [97.5, 39291.0], [97.6, 39291.0], [97.7, 39291.0], [97.8, 39291.0], [97.9, 39291.0], [98.0, 39291.0], [98.1, 39291.0], [98.2, 39291.0], [98.3, 39291.0], [98.4, 39291.0], [98.5, 39291.0], [98.6, 39291.0], [98.7, 39291.0], [98.8, 39291.0], [98.9, 39291.0], [99.0, 39291.0], [99.1, 39291.0], [99.2, 39291.0], [99.3, 39291.0], [99.4, 39291.0], [99.5, 39291.0], [99.6, 39291.0], [99.7, 39291.0], [99.8, 39291.0], [99.9, 39291.0], [100.0, 39291.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4100.0, "maxY": 2.0, "series": [{"data": [[34700.0, 1.0], [33500.0, 1.0], [33200.0, 1.0], [33100.0, 1.0], [36400.0, 1.0], [38500.0, 1.0], [39000.0, 1.0], [39200.0, 2.0], [39100.0, 1.0], [12000.0, 1.0], [15700.0, 1.0], [4100.0, 1.0], [19400.0, 1.0], [21600.0, 1.0], [23100.0, 1.0], [23600.0, 1.0], [25500.0, 1.0], [27200.0, 1.0], [29300.0, 1.0], [31000.0, 1.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60438956E12, "maxY": 10.0, "series": [{"data": [[1.60438962E12, 8.200000000000001], [1.60438956E12, 10.0], [1.60438968E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438968E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21682.0, "minX": 1.0, "maxY": 39291.0, "series": [{"data": [[8.0, 36457.0], [4.0, 29387.0], [2.0, 23636.0], [1.0, 21682.0], [9.0, 39291.0], [10.0, 25507.692307692305], [5.0, 33107.0], [6.0, 33211.0], [3.0, 25528.0], [7.0, 33526.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.954545454545455, 27610.227272727272]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.1, "minX": 1.60438956E12, "maxY": 43838.13333333333, "series": [{"data": [[1.60438962E12, 43838.13333333333], [1.60438956E12, 2390.883333333333], [1.60438968E12, 2993.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438962E12, 140.3], [1.60438956E12, 7.1], [1.60438968E12, 7.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438968E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4182.0, "minX": 1.60438956E12, "maxY": 29078.050000000003, "series": [{"data": [[1.60438962E12, 29078.050000000003], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438968E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4176.0, "minX": 1.60438956E12, "maxY": 29077.199999999997, "series": [{"data": [[1.60438962E12, 29077.199999999997], [1.60438956E12, 4176.0], [1.60438968E12, 21680.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438968E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438956E12, "maxY": 35.0, "series": [{"data": [[1.60438962E12, 2.600000000000001], [1.60438956E12, 35.0], [1.60438968E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438968E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4182.0, "minX": 1.60438956E12, "maxY": 39291.0, "series": [{"data": [[1.60438962E12, 39291.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438962E12, 8050.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438962E12, 8050.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438962E12, 8050.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438962E12, 8050.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438962E12, 32088.0], [1.60438956E12, 4182.0], [1.60438968E12, 21682.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438968E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 29387.0, "minX": 1.0, "maxY": 31069.0, "series": [{"data": [[1.0, 31069.0], [3.0, 29387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 29387.0, "minX": 1.0, "maxY": 31068.0, "series": [{"data": [[1.0, 31068.0], [3.0, 29387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.60438956E12, "maxY": 0.18333333333333332, "series": [{"data": [[1.60438962E12, 0.18333333333333332], [1.60438956E12, 0.18333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438962E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438956E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60438962E12, 0.3333333333333333], [1.60438956E12, 0.016666666666666666], [1.60438968E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438968E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438956E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60438962E12, 0.3333333333333333], [1.60438956E12, 0.016666666666666666], [1.60438968E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438968E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60438956E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.60438962E12, 0.3333333333333333], [1.60438956E12, 0.016666666666666666], [1.60438968E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438968E12, "title": "Total Transactions Per Second"}},
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

