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
        data: {"result": {"minY": 132.0, "minX": 0.0, "maxY": 1168.0, "series": [{"data": [[0.0, 132.0], [0.1, 132.0], [0.2, 132.0], [0.3, 132.0], [0.4, 132.0], [0.5, 132.0], [0.6, 132.0], [0.7, 132.0], [0.8, 132.0], [0.9, 132.0], [1.0, 132.0], [1.1, 132.0], [1.2, 132.0], [1.3, 132.0], [1.4, 132.0], [1.5, 132.0], [1.6, 132.0], [1.7, 132.0], [1.8, 132.0], [1.9, 132.0], [2.0, 132.0], [2.1, 132.0], [2.2, 132.0], [2.3, 132.0], [2.4, 132.0], [2.5, 132.0], [2.6, 132.0], [2.7, 132.0], [2.8, 132.0], [2.9, 132.0], [3.0, 132.0], [3.1, 132.0], [3.2, 132.0], [3.3, 132.0], [3.4, 140.0], [3.5, 140.0], [3.6, 140.0], [3.7, 140.0], [3.8, 140.0], [3.9, 140.0], [4.0, 140.0], [4.1, 140.0], [4.2, 140.0], [4.3, 140.0], [4.4, 140.0], [4.5, 140.0], [4.6, 140.0], [4.7, 140.0], [4.8, 140.0], [4.9, 140.0], [5.0, 140.0], [5.1, 140.0], [5.2, 140.0], [5.3, 140.0], [5.4, 140.0], [5.5, 140.0], [5.6, 140.0], [5.7, 140.0], [5.8, 140.0], [5.9, 140.0], [6.0, 140.0], [6.1, 140.0], [6.2, 140.0], [6.3, 140.0], [6.4, 140.0], [6.5, 140.0], [6.6, 140.0], [6.7, 142.0], [6.8, 142.0], [6.9, 142.0], [7.0, 142.0], [7.1, 142.0], [7.2, 142.0], [7.3, 142.0], [7.4, 142.0], [7.5, 142.0], [7.6, 142.0], [7.7, 142.0], [7.8, 142.0], [7.9, 142.0], [8.0, 142.0], [8.1, 142.0], [8.2, 142.0], [8.3, 142.0], [8.4, 142.0], [8.5, 142.0], [8.6, 142.0], [8.7, 142.0], [8.8, 142.0], [8.9, 142.0], [9.0, 142.0], [9.1, 142.0], [9.2, 142.0], [9.3, 142.0], [9.4, 142.0], [9.5, 142.0], [9.6, 142.0], [9.7, 142.0], [9.8, 142.0], [9.9, 142.0], [10.0, 145.0], [10.1, 145.0], [10.2, 145.0], [10.3, 145.0], [10.4, 145.0], [10.5, 145.0], [10.6, 145.0], [10.7, 145.0], [10.8, 145.0], [10.9, 145.0], [11.0, 145.0], [11.1, 145.0], [11.2, 145.0], [11.3, 145.0], [11.4, 145.0], [11.5, 145.0], [11.6, 145.0], [11.7, 145.0], [11.8, 145.0], [11.9, 145.0], [12.0, 145.0], [12.1, 145.0], [12.2, 145.0], [12.3, 145.0], [12.4, 145.0], [12.5, 145.0], [12.6, 145.0], [12.7, 145.0], [12.8, 145.0], [12.9, 145.0], [13.0, 145.0], [13.1, 145.0], [13.2, 145.0], [13.3, 145.0], [13.4, 145.0], [13.5, 145.0], [13.6, 145.0], [13.7, 145.0], [13.8, 145.0], [13.9, 145.0], [14.0, 145.0], [14.1, 145.0], [14.2, 145.0], [14.3, 145.0], [14.4, 145.0], [14.5, 145.0], [14.6, 145.0], [14.7, 145.0], [14.8, 145.0], [14.9, 145.0], [15.0, 145.0], [15.1, 145.0], [15.2, 145.0], [15.3, 145.0], [15.4, 145.0], [15.5, 145.0], [15.6, 145.0], [15.7, 145.0], [15.8, 145.0], [15.9, 145.0], [16.0, 145.0], [16.1, 145.0], [16.2, 145.0], [16.3, 145.0], [16.4, 145.0], [16.5, 145.0], [16.6, 145.0], [16.7, 145.0], [16.8, 145.0], [16.9, 145.0], [17.0, 145.0], [17.1, 145.0], [17.2, 145.0], [17.3, 145.0], [17.4, 145.0], [17.5, 145.0], [17.6, 145.0], [17.7, 145.0], [17.8, 145.0], [17.9, 145.0], [18.0, 145.0], [18.1, 145.0], [18.2, 145.0], [18.3, 145.0], [18.4, 145.0], [18.5, 145.0], [18.6, 145.0], [18.7, 145.0], [18.8, 145.0], [18.9, 145.0], [19.0, 145.0], [19.1, 145.0], [19.2, 145.0], [19.3, 145.0], [19.4, 145.0], [19.5, 145.0], [19.6, 145.0], [19.7, 145.0], [19.8, 145.0], [19.9, 145.0], [20.0, 145.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 145.0], [20.7, 145.0], [20.8, 145.0], [20.9, 145.0], [21.0, 145.0], [21.1, 145.0], [21.2, 145.0], [21.3, 145.0], [21.4, 145.0], [21.5, 145.0], [21.6, 145.0], [21.7, 145.0], [21.8, 145.0], [21.9, 145.0], [22.0, 145.0], [22.1, 145.0], [22.2, 145.0], [22.3, 145.0], [22.4, 145.0], [22.5, 145.0], [22.6, 145.0], [22.7, 145.0], [22.8, 145.0], [22.9, 145.0], [23.0, 145.0], [23.1, 145.0], [23.2, 145.0], [23.3, 145.0], [23.4, 146.0], [23.5, 146.0], [23.6, 146.0], [23.7, 146.0], [23.8, 146.0], [23.9, 146.0], [24.0, 146.0], [24.1, 146.0], [24.2, 146.0], [24.3, 146.0], [24.4, 146.0], [24.5, 146.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 146.0], [25.0, 146.0], [25.1, 146.0], [25.2, 146.0], [25.3, 146.0], [25.4, 146.0], [25.5, 146.0], [25.6, 146.0], [25.7, 146.0], [25.8, 146.0], [25.9, 146.0], [26.0, 146.0], [26.1, 146.0], [26.2, 146.0], [26.3, 146.0], [26.4, 146.0], [26.5, 146.0], [26.6, 146.0], [26.7, 148.0], [26.8, 148.0], [26.9, 148.0], [27.0, 148.0], [27.1, 148.0], [27.2, 148.0], [27.3, 148.0], [27.4, 148.0], [27.5, 148.0], [27.6, 148.0], [27.7, 148.0], [27.8, 148.0], [27.9, 148.0], [28.0, 148.0], [28.1, 148.0], [28.2, 148.0], [28.3, 148.0], [28.4, 148.0], [28.5, 148.0], [28.6, 148.0], [28.7, 148.0], [28.8, 148.0], [28.9, 148.0], [29.0, 148.0], [29.1, 148.0], [29.2, 148.0], [29.3, 148.0], [29.4, 148.0], [29.5, 148.0], [29.6, 148.0], [29.7, 148.0], [29.8, 148.0], [29.9, 148.0], [30.0, 149.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 149.0], [31.0, 149.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 149.0], [31.5, 149.0], [31.6, 149.0], [31.7, 149.0], [31.8, 149.0], [31.9, 149.0], [32.0, 149.0], [32.1, 149.0], [32.2, 149.0], [32.3, 149.0], [32.4, 149.0], [32.5, 149.0], [32.6, 149.0], [32.7, 149.0], [32.8, 149.0], [32.9, 149.0], [33.0, 149.0], [33.1, 149.0], [33.2, 149.0], [33.3, 149.0], [33.4, 149.0], [33.5, 149.0], [33.6, 149.0], [33.7, 149.0], [33.8, 149.0], [33.9, 149.0], [34.0, 149.0], [34.1, 149.0], [34.2, 149.0], [34.3, 149.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 149.0], [35.0, 149.0], [35.1, 149.0], [35.2, 149.0], [35.3, 149.0], [35.4, 149.0], [35.5, 149.0], [35.6, 149.0], [35.7, 149.0], [35.8, 149.0], [35.9, 149.0], [36.0, 149.0], [36.1, 149.0], [36.2, 149.0], [36.3, 149.0], [36.4, 149.0], [36.5, 149.0], [36.6, 149.0], [36.7, 151.0], [36.8, 151.0], [36.9, 151.0], [37.0, 151.0], [37.1, 151.0], [37.2, 151.0], [37.3, 151.0], [37.4, 151.0], [37.5, 151.0], [37.6, 151.0], [37.7, 151.0], [37.8, 151.0], [37.9, 151.0], [38.0, 151.0], [38.1, 151.0], [38.2, 151.0], [38.3, 151.0], [38.4, 151.0], [38.5, 151.0], [38.6, 151.0], [38.7, 151.0], [38.8, 151.0], [38.9, 151.0], [39.0, 151.0], [39.1, 151.0], [39.2, 151.0], [39.3, 151.0], [39.4, 151.0], [39.5, 151.0], [39.6, 151.0], [39.7, 151.0], [39.8, 151.0], [39.9, 151.0], [40.0, 152.0], [40.1, 152.0], [40.2, 152.0], [40.3, 152.0], [40.4, 152.0], [40.5, 152.0], [40.6, 152.0], [40.7, 152.0], [40.8, 152.0], [40.9, 152.0], [41.0, 152.0], [41.1, 152.0], [41.2, 152.0], [41.3, 152.0], [41.4, 152.0], [41.5, 152.0], [41.6, 152.0], [41.7, 152.0], [41.8, 152.0], [41.9, 152.0], [42.0, 152.0], [42.1, 152.0], [42.2, 152.0], [42.3, 152.0], [42.4, 152.0], [42.5, 152.0], [42.6, 152.0], [42.7, 152.0], [42.8, 152.0], [42.9, 152.0], [43.0, 152.0], [43.1, 152.0], [43.2, 152.0], [43.3, 152.0], [43.4, 158.0], [43.5, 158.0], [43.6, 158.0], [43.7, 158.0], [43.8, 158.0], [43.9, 158.0], [44.0, 158.0], [44.1, 158.0], [44.2, 158.0], [44.3, 158.0], [44.4, 158.0], [44.5, 158.0], [44.6, 158.0], [44.7, 158.0], [44.8, 158.0], [44.9, 158.0], [45.0, 158.0], [45.1, 158.0], [45.2, 158.0], [45.3, 158.0], [45.4, 158.0], [45.5, 158.0], [45.6, 158.0], [45.7, 158.0], [45.8, 158.0], [45.9, 158.0], [46.0, 158.0], [46.1, 158.0], [46.2, 158.0], [46.3, 158.0], [46.4, 158.0], [46.5, 158.0], [46.6, 158.0], [46.7, 162.0], [46.8, 162.0], [46.9, 162.0], [47.0, 162.0], [47.1, 162.0], [47.2, 162.0], [47.3, 162.0], [47.4, 162.0], [47.5, 162.0], [47.6, 162.0], [47.7, 162.0], [47.8, 162.0], [47.9, 162.0], [48.0, 162.0], [48.1, 162.0], [48.2, 162.0], [48.3, 162.0], [48.4, 162.0], [48.5, 162.0], [48.6, 162.0], [48.7, 162.0], [48.8, 162.0], [48.9, 162.0], [49.0, 162.0], [49.1, 162.0], [49.2, 162.0], [49.3, 162.0], [49.4, 162.0], [49.5, 162.0], [49.6, 162.0], [49.7, 162.0], [49.8, 162.0], [49.9, 162.0], [50.0, 162.0], [50.1, 162.0], [50.2, 162.0], [50.3, 162.0], [50.4, 162.0], [50.5, 162.0], [50.6, 162.0], [50.7, 162.0], [50.8, 162.0], [50.9, 162.0], [51.0, 162.0], [51.1, 162.0], [51.2, 162.0], [51.3, 162.0], [51.4, 162.0], [51.5, 162.0], [51.6, 162.0], [51.7, 162.0], [51.8, 162.0], [51.9, 162.0], [52.0, 162.0], [52.1, 162.0], [52.2, 162.0], [52.3, 162.0], [52.4, 162.0], [52.5, 162.0], [52.6, 162.0], [52.7, 162.0], [52.8, 162.0], [52.9, 162.0], [53.0, 162.0], [53.1, 162.0], [53.2, 162.0], [53.3, 162.0], [53.4, 168.0], [53.5, 168.0], [53.6, 168.0], [53.7, 168.0], [53.8, 168.0], [53.9, 168.0], [54.0, 168.0], [54.1, 168.0], [54.2, 168.0], [54.3, 168.0], [54.4, 168.0], [54.5, 168.0], [54.6, 168.0], [54.7, 168.0], [54.8, 168.0], [54.9, 168.0], [55.0, 168.0], [55.1, 168.0], [55.2, 168.0], [55.3, 168.0], [55.4, 168.0], [55.5, 168.0], [55.6, 168.0], [55.7, 168.0], [55.8, 168.0], [55.9, 168.0], [56.0, 168.0], [56.1, 168.0], [56.2, 168.0], [56.3, 168.0], [56.4, 168.0], [56.5, 168.0], [56.6, 168.0], [56.7, 174.0], [56.8, 174.0], [56.9, 174.0], [57.0, 174.0], [57.1, 174.0], [57.2, 174.0], [57.3, 174.0], [57.4, 174.0], [57.5, 174.0], [57.6, 174.0], [57.7, 174.0], [57.8, 174.0], [57.9, 174.0], [58.0, 174.0], [58.1, 174.0], [58.2, 174.0], [58.3, 174.0], [58.4, 174.0], [58.5, 174.0], [58.6, 174.0], [58.7, 174.0], [58.8, 174.0], [58.9, 174.0], [59.0, 174.0], [59.1, 174.0], [59.2, 174.0], [59.3, 174.0], [59.4, 174.0], [59.5, 174.0], [59.6, 174.0], [59.7, 174.0], [59.8, 174.0], [59.9, 174.0], [60.0, 174.0], [60.1, 176.0], [60.2, 176.0], [60.3, 176.0], [60.4, 176.0], [60.5, 176.0], [60.6, 176.0], [60.7, 176.0], [60.8, 176.0], [60.9, 176.0], [61.0, 176.0], [61.1, 176.0], [61.2, 176.0], [61.3, 176.0], [61.4, 176.0], [61.5, 176.0], [61.6, 176.0], [61.7, 176.0], [61.8, 176.0], [61.9, 176.0], [62.0, 176.0], [62.1, 176.0], [62.2, 176.0], [62.3, 176.0], [62.4, 176.0], [62.5, 176.0], [62.6, 176.0], [62.7, 176.0], [62.8, 176.0], [62.9, 176.0], [63.0, 176.0], [63.1, 176.0], [63.2, 176.0], [63.3, 176.0], [63.4, 183.0], [63.5, 183.0], [63.6, 183.0], [63.7, 183.0], [63.8, 183.0], [63.9, 183.0], [64.0, 183.0], [64.1, 183.0], [64.2, 183.0], [64.3, 183.0], [64.4, 183.0], [64.5, 183.0], [64.6, 183.0], [64.7, 183.0], [64.8, 183.0], [64.9, 183.0], [65.0, 183.0], [65.1, 183.0], [65.2, 183.0], [65.3, 183.0], [65.4, 183.0], [65.5, 183.0], [65.6, 183.0], [65.7, 183.0], [65.8, 183.0], [65.9, 183.0], [66.0, 183.0], [66.1, 183.0], [66.2, 183.0], [66.3, 183.0], [66.4, 183.0], [66.5, 183.0], [66.6, 183.0], [66.7, 248.0], [66.8, 248.0], [66.9, 248.0], [67.0, 248.0], [67.1, 248.0], [67.2, 248.0], [67.3, 248.0], [67.4, 248.0], [67.5, 248.0], [67.6, 248.0], [67.7, 248.0], [67.8, 248.0], [67.9, 248.0], [68.0, 248.0], [68.1, 248.0], [68.2, 248.0], [68.3, 248.0], [68.4, 248.0], [68.5, 248.0], [68.6, 248.0], [68.7, 248.0], [68.8, 248.0], [68.9, 248.0], [69.0, 248.0], [69.1, 248.0], [69.2, 248.0], [69.3, 248.0], [69.4, 248.0], [69.5, 248.0], [69.6, 248.0], [69.7, 248.0], [69.8, 248.0], [69.9, 248.0], [70.0, 307.0], [70.1, 307.0], [70.2, 307.0], [70.3, 307.0], [70.4, 307.0], [70.5, 307.0], [70.6, 307.0], [70.7, 307.0], [70.8, 307.0], [70.9, 307.0], [71.0, 307.0], [71.1, 307.0], [71.2, 307.0], [71.3, 307.0], [71.4, 307.0], [71.5, 307.0], [71.6, 307.0], [71.7, 307.0], [71.8, 307.0], [71.9, 307.0], [72.0, 307.0], [72.1, 307.0], [72.2, 307.0], [72.3, 307.0], [72.4, 307.0], [72.5, 307.0], [72.6, 307.0], [72.7, 307.0], [72.8, 307.0], [72.9, 307.0], [73.0, 307.0], [73.1, 307.0], [73.2, 307.0], [73.3, 307.0], [73.4, 745.0], [73.5, 745.0], [73.6, 745.0], [73.7, 745.0], [73.8, 745.0], [73.9, 745.0], [74.0, 745.0], [74.1, 745.0], [74.2, 745.0], [74.3, 745.0], [74.4, 745.0], [74.5, 745.0], [74.6, 745.0], [74.7, 745.0], [74.8, 745.0], [74.9, 745.0], [75.0, 745.0], [75.1, 745.0], [75.2, 745.0], [75.3, 745.0], [75.4, 745.0], [75.5, 745.0], [75.6, 745.0], [75.7, 745.0], [75.8, 745.0], [75.9, 745.0], [76.0, 745.0], [76.1, 745.0], [76.2, 745.0], [76.3, 745.0], [76.4, 745.0], [76.5, 745.0], [76.6, 745.0], [76.7, 761.0], [76.8, 761.0], [76.9, 761.0], [77.0, 761.0], [77.1, 761.0], [77.2, 761.0], [77.3, 761.0], [77.4, 761.0], [77.5, 761.0], [77.6, 761.0], [77.7, 761.0], [77.8, 761.0], [77.9, 761.0], [78.0, 761.0], [78.1, 761.0], [78.2, 761.0], [78.3, 761.0], [78.4, 761.0], [78.5, 761.0], [78.6, 761.0], [78.7, 761.0], [78.8, 761.0], [78.9, 761.0], [79.0, 761.0], [79.1, 761.0], [79.2, 761.0], [79.3, 761.0], [79.4, 761.0], [79.5, 761.0], [79.6, 761.0], [79.7, 761.0], [79.8, 761.0], [79.9, 761.0], [80.0, 798.0], [80.1, 798.0], [80.2, 798.0], [80.3, 798.0], [80.4, 798.0], [80.5, 798.0], [80.6, 798.0], [80.7, 798.0], [80.8, 798.0], [80.9, 798.0], [81.0, 798.0], [81.1, 798.0], [81.2, 798.0], [81.3, 798.0], [81.4, 798.0], [81.5, 798.0], [81.6, 798.0], [81.7, 798.0], [81.8, 798.0], [81.9, 798.0], [82.0, 798.0], [82.1, 798.0], [82.2, 798.0], [82.3, 798.0], [82.4, 798.0], [82.5, 798.0], [82.6, 798.0], [82.7, 798.0], [82.8, 798.0], [82.9, 798.0], [83.0, 798.0], [83.1, 798.0], [83.2, 798.0], [83.3, 798.0], [83.4, 831.0], [83.5, 831.0], [83.6, 831.0], [83.7, 831.0], [83.8, 831.0], [83.9, 831.0], [84.0, 831.0], [84.1, 831.0], [84.2, 831.0], [84.3, 831.0], [84.4, 831.0], [84.5, 831.0], [84.6, 831.0], [84.7, 831.0], [84.8, 831.0], [84.9, 831.0], [85.0, 831.0], [85.1, 831.0], [85.2, 831.0], [85.3, 831.0], [85.4, 831.0], [85.5, 831.0], [85.6, 831.0], [85.7, 831.0], [85.8, 831.0], [85.9, 831.0], [86.0, 831.0], [86.1, 831.0], [86.2, 831.0], [86.3, 831.0], [86.4, 831.0], [86.5, 831.0], [86.6, 831.0], [86.7, 1150.0], [86.8, 1150.0], [86.9, 1150.0], [87.0, 1150.0], [87.1, 1150.0], [87.2, 1150.0], [87.3, 1150.0], [87.4, 1150.0], [87.5, 1150.0], [87.6, 1150.0], [87.7, 1150.0], [87.8, 1150.0], [87.9, 1150.0], [88.0, 1150.0], [88.1, 1150.0], [88.2, 1150.0], [88.3, 1150.0], [88.4, 1150.0], [88.5, 1150.0], [88.6, 1150.0], [88.7, 1150.0], [88.8, 1150.0], [88.9, 1150.0], [89.0, 1150.0], [89.1, 1150.0], [89.2, 1150.0], [89.3, 1150.0], [89.4, 1150.0], [89.5, 1150.0], [89.6, 1150.0], [89.7, 1150.0], [89.8, 1150.0], [89.9, 1150.0], [90.0, 1152.0], [90.1, 1152.0], [90.2, 1152.0], [90.3, 1152.0], [90.4, 1152.0], [90.5, 1152.0], [90.6, 1152.0], [90.7, 1152.0], [90.8, 1152.0], [90.9, 1152.0], [91.0, 1152.0], [91.1, 1152.0], [91.2, 1152.0], [91.3, 1152.0], [91.4, 1152.0], [91.5, 1152.0], [91.6, 1152.0], [91.7, 1152.0], [91.8, 1152.0], [91.9, 1152.0], [92.0, 1152.0], [92.1, 1152.0], [92.2, 1152.0], [92.3, 1152.0], [92.4, 1152.0], [92.5, 1152.0], [92.6, 1152.0], [92.7, 1152.0], [92.8, 1152.0], [92.9, 1152.0], [93.0, 1152.0], [93.1, 1152.0], [93.2, 1152.0], [93.3, 1152.0], [93.4, 1160.0], [93.5, 1160.0], [93.6, 1160.0], [93.7, 1160.0], [93.8, 1160.0], [93.9, 1160.0], [94.0, 1160.0], [94.1, 1160.0], [94.2, 1160.0], [94.3, 1160.0], [94.4, 1160.0], [94.5, 1160.0], [94.6, 1160.0], [94.7, 1160.0], [94.8, 1160.0], [94.9, 1160.0], [95.0, 1160.0], [95.1, 1160.0], [95.2, 1160.0], [95.3, 1160.0], [95.4, 1160.0], [95.5, 1160.0], [95.6, 1160.0], [95.7, 1160.0], [95.8, 1160.0], [95.9, 1160.0], [96.0, 1160.0], [96.1, 1160.0], [96.2, 1160.0], [96.3, 1160.0], [96.4, 1160.0], [96.5, 1160.0], [96.6, 1160.0], [96.7, 1168.0], [96.8, 1168.0], [96.9, 1168.0], [97.0, 1168.0], [97.1, 1168.0], [97.2, 1168.0], [97.3, 1168.0], [97.4, 1168.0], [97.5, 1168.0], [97.6, 1168.0], [97.7, 1168.0], [97.8, 1168.0], [97.9, 1168.0], [98.0, 1168.0], [98.1, 1168.0], [98.2, 1168.0], [98.3, 1168.0], [98.4, 1168.0], [98.5, 1168.0], [98.6, 1168.0], [98.7, 1168.0], [98.8, 1168.0], [98.9, 1168.0], [99.0, 1168.0], [99.1, 1168.0], [99.2, 1168.0], [99.3, 1168.0], [99.4, 1168.0], [99.5, 1168.0], [99.6, 1168.0], [99.7, 1168.0], [99.8, 1168.0], [99.9, 1168.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 20.0, "series": [{"data": [[1100.0, 4.0], [300.0, 1.0], [700.0, 3.0], [200.0, 1.0], [100.0, 20.0], [800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 22.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.933333333333335, "minX": 1.60439358E12, "maxY": 7.933333333333335, "series": [{"data": [[1.60439358E12, 7.933333333333335]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 151.66666666666666, "minX": 1.0, "maxY": 1168.0, "series": [{"data": [[8.0, 151.66666666666666], [4.0, 1150.0], [2.0, 1168.0], [1.0, 1160.0], [9.0, 161.0], [5.0, 240.5], [10.0, 317.46666666666664], [6.0, 215.5], [3.0, 1152.0], [7.0, 155.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.933333333333335, 379.7333333333333]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.60439358E12, "maxY": 13895.866666666667, "series": [{"data": [[1.60439358E12, 13895.866666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439358E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 379.7333333333333, "minX": 1.60439358E12, "maxY": 379.7333333333333, "series": [{"data": [[1.60439358E12, 379.7333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 379.4, "minX": 1.60439358E12, "maxY": 379.4, "series": [{"data": [[1.60439358E12, 379.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.066666666666667, "minX": 1.60439358E12, "maxY": 3.066666666666667, "series": [{"data": [[1.60439358E12, 3.066666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 132.0, "minX": 1.60439358E12, "maxY": 1168.0, "series": [{"data": [[1.60439358E12, 1168.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439358E12, 132.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439358E12, 132.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439358E12, 132.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439358E12, 132.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439358E12, 162.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 158.0, "minX": 1.0, "maxY": 1160.0, "series": [{"data": [[8.0, 165.0], [1.0, 1160.0], [21.0, 158.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 157.0, "minX": 1.0, "maxY": 1160.0, "series": [{"data": [[8.0, 165.0], [1.0, 1160.0], [21.0, 157.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60439358E12, "maxY": 0.5, "series": [{"data": [[1.60439358E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60439358E12, "maxY": 0.5, "series": [{"data": [[1.60439358E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60439358E12, "maxY": 0.5, "series": [{"data": [[1.60439358E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60439358E12, "maxY": 0.5, "series": [{"data": [[1.60439358E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439358E12, "title": "Total Transactions Per Second"}},
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

