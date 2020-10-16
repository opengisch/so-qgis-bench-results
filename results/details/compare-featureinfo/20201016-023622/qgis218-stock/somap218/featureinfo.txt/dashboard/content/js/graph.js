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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 6814.0, "series": [{"data": [[0.0, 21.0], [0.1, 21.0], [0.2, 21.0], [0.3, 21.0], [0.4, 21.0], [0.5, 21.0], [0.6, 22.0], [0.7, 22.0], [0.8, 22.0], [0.9, 23.0], [1.0, 23.0], [1.1, 23.0], [1.2, 23.0], [1.3, 23.0], [1.4, 23.0], [1.5, 23.0], [1.6, 23.0], [1.7, 23.0], [1.8, 23.0], [1.9, 23.0], [2.0, 23.0], [2.1, 23.0], [2.2, 23.0], [2.3, 23.0], [2.4, 24.0], [2.5, 24.0], [2.6, 24.0], [2.7, 24.0], [2.8, 24.0], [2.9, 25.0], [3.0, 25.0], [3.1, 25.0], [3.2, 25.0], [3.3, 25.0], [3.4, 25.0], [3.5, 26.0], [3.6, 26.0], [3.7, 26.0], [3.8, 26.0], [3.9, 26.0], [4.0, 26.0], [4.1, 26.0], [4.2, 26.0], [4.3, 26.0], [4.4, 28.0], [4.5, 28.0], [4.6, 28.0], [4.7, 29.0], [4.8, 29.0], [4.9, 30.0], [5.0, 30.0], [5.1, 30.0], [5.2, 30.0], [5.3, 30.0], [5.4, 30.0], [5.5, 30.0], [5.6, 30.0], [5.7, 30.0], [5.8, 33.0], [5.9, 33.0], [6.0, 33.0], [6.1, 33.0], [6.2, 33.0], [6.3, 33.0], [6.4, 33.0], [6.5, 33.0], [6.6, 33.0], [6.7, 34.0], [6.8, 34.0], [6.9, 34.0], [7.0, 34.0], [7.1, 34.0], [7.2, 34.0], [7.3, 34.0], [7.4, 34.0], [7.5, 34.0], [7.6, 34.0], [7.7, 34.0], [7.8, 34.0], [7.9, 34.0], [8.0, 34.0], [8.1, 34.0], [8.2, 34.0], [8.3, 34.0], [8.4, 35.0], [8.5, 35.0], [8.6, 35.0], [8.7, 35.0], [8.8, 35.0], [8.9, 35.0], [9.0, 36.0], [9.1, 36.0], [9.2, 36.0], [9.3, 36.0], [9.4, 36.0], [9.5, 36.0], [9.6, 36.0], [9.7, 36.0], [9.8, 37.0], [9.9, 37.0], [10.0, 37.0], [10.1, 37.0], [10.2, 37.0], [10.3, 37.0], [10.4, 37.0], [10.5, 37.0], [10.6, 37.0], [10.7, 37.0], [10.8, 37.0], [10.9, 37.0], [11.0, 38.0], [11.1, 38.0], [11.2, 38.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 40.0], [13.1, 40.0], [13.2, 40.0], [13.3, 40.0], [13.4, 40.0], [13.5, 40.0], [13.6, 40.0], [13.7, 40.0], [13.8, 40.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 42.0], [16.8, 43.0], [16.9, 43.0], [17.0, 43.0], [17.1, 43.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 45.0], [19.2, 45.0], [19.3, 45.0], [19.4, 45.0], [19.5, 45.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 45.0], [20.2, 46.0], [20.3, 46.0], [20.4, 46.0], [20.5, 46.0], [20.6, 46.0], [20.7, 46.0], [20.8, 46.0], [20.9, 46.0], [21.0, 46.0], [21.1, 46.0], [21.2, 46.0], [21.3, 46.0], [21.4, 47.0], [21.5, 47.0], [21.6, 47.0], [21.7, 48.0], [21.8, 48.0], [21.9, 48.0], [22.0, 48.0], [22.1, 48.0], [22.2, 48.0], [22.3, 48.0], [22.4, 48.0], [22.5, 48.0], [22.6, 48.0], [22.7, 48.0], [22.8, 48.0], [22.9, 48.0], [23.0, 48.0], [23.1, 48.0], [23.2, 48.0], [23.3, 48.0], [23.4, 49.0], [23.5, 49.0], [23.6, 49.0], [23.7, 50.0], [23.8, 50.0], [23.9, 50.0], [24.0, 50.0], [24.1, 50.0], [24.2, 50.0], [24.3, 50.0], [24.4, 50.0], [24.5, 50.0], [24.6, 50.0], [24.7, 50.0], [24.8, 50.0], [24.9, 50.0], [25.0, 50.0], [25.1, 50.0], [25.2, 50.0], [25.3, 50.0], [25.4, 50.0], [25.5, 50.0], [25.6, 50.0], [25.7, 50.0], [25.8, 50.0], [25.9, 50.0], [26.0, 50.0], [26.1, 50.0], [26.2, 50.0], [26.3, 50.0], [26.4, 50.0], [26.5, 50.0], [26.6, 51.0], [26.7, 51.0], [26.8, 51.0], [26.9, 51.0], [27.0, 51.0], [27.1, 51.0], [27.2, 51.0], [27.3, 51.0], [27.4, 51.0], [27.5, 51.0], [27.6, 51.0], [27.7, 51.0], [27.8, 51.0], [27.9, 51.0], [28.0, 52.0], [28.1, 52.0], [28.2, 52.0], [28.3, 52.0], [28.4, 52.0], [28.5, 52.0], [28.6, 52.0], [28.7, 52.0], [28.8, 52.0], [28.9, 52.0], [29.0, 52.0], [29.1, 52.0], [29.2, 52.0], [29.3, 52.0], [29.4, 53.0], [29.5, 53.0], [29.6, 53.0], [29.7, 53.0], [29.8, 53.0], [29.9, 53.0], [30.0, 53.0], [30.1, 53.0], [30.2, 53.0], [30.3, 53.0], [30.4, 53.0], [30.5, 53.0], [30.6, 53.0], [30.7, 53.0], [30.8, 53.0], [30.9, 54.0], [31.0, 54.0], [31.1, 54.0], [31.2, 54.0], [31.3, 54.0], [31.4, 54.0], [31.5, 54.0], [31.6, 54.0], [31.7, 54.0], [31.8, 54.0], [31.9, 54.0], [32.0, 55.0], [32.1, 55.0], [32.2, 55.0], [32.3, 55.0], [32.4, 55.0], [32.5, 55.0], [32.6, 56.0], [32.7, 56.0], [32.8, 56.0], [32.9, 57.0], [33.0, 57.0], [33.1, 57.0], [33.2, 58.0], [33.3, 58.0], [33.4, 58.0], [33.5, 58.0], [33.6, 58.0], [33.7, 58.0], [33.8, 58.0], [33.9, 58.0], [34.0, 58.0], [34.1, 59.0], [34.2, 59.0], [34.3, 59.0], [34.4, 59.0], [34.5, 59.0], [34.6, 59.0], [34.7, 59.0], [34.8, 59.0], [34.9, 59.0], [35.0, 59.0], [35.1, 59.0], [35.2, 60.0], [35.3, 60.0], [35.4, 60.0], [35.5, 60.0], [35.6, 60.0], [35.7, 60.0], [35.8, 61.0], [35.9, 61.0], [36.0, 61.0], [36.1, 61.0], [36.2, 61.0], [36.3, 61.0], [36.4, 61.0], [36.5, 61.0], [36.6, 62.0], [36.7, 62.0], [36.8, 62.0], [36.9, 62.0], [37.0, 62.0], [37.1, 62.0], [37.2, 62.0], [37.3, 62.0], [37.4, 62.0], [37.5, 62.0], [37.6, 62.0], [37.7, 62.0], [37.8, 62.0], [37.9, 62.0], [38.0, 62.0], [38.1, 63.0], [38.2, 63.0], [38.3, 63.0], [38.4, 63.0], [38.5, 63.0], [38.6, 63.0], [38.7, 63.0], [38.8, 63.0], [38.9, 63.0], [39.0, 63.0], [39.1, 63.0], [39.2, 63.0], [39.3, 63.0], [39.4, 63.0], [39.5, 64.0], [39.6, 64.0], [39.7, 64.0], [39.8, 64.0], [39.9, 64.0], [40.0, 64.0], [40.1, 64.0], [40.2, 64.0], [40.3, 64.0], [40.4, 65.0], [40.5, 65.0], [40.6, 65.0], [40.7, 65.0], [40.8, 65.0], [40.9, 65.0], [41.0, 65.0], [41.1, 65.0], [41.2, 65.0], [41.3, 65.0], [41.4, 65.0], [41.5, 66.0], [41.6, 66.0], [41.7, 66.0], [41.8, 66.0], [41.9, 66.0], [42.0, 66.0], [42.1, 66.0], [42.2, 66.0], [42.3, 66.0], [42.4, 66.0], [42.5, 66.0], [42.6, 66.0], [42.7, 66.0], [42.8, 66.0], [42.9, 66.0], [43.0, 67.0], [43.1, 67.0], [43.2, 67.0], [43.3, 67.0], [43.4, 67.0], [43.5, 67.0], [43.6, 67.0], [43.7, 67.0], [43.8, 67.0], [43.9, 68.0], [44.0, 68.0], [44.1, 68.0], [44.2, 68.0], [44.3, 68.0], [44.4, 68.0], [44.5, 68.0], [44.6, 68.0], [44.7, 68.0], [44.8, 68.0], [44.9, 68.0], [45.0, 68.0], [45.1, 68.0], [45.2, 68.0], [45.3, 68.0], [45.4, 68.0], [45.5, 68.0], [45.6, 69.0], [45.7, 69.0], [45.8, 69.0], [45.9, 69.0], [46.0, 69.0], [46.1, 69.0], [46.2, 70.0], [46.3, 70.0], [46.4, 70.0], [46.5, 70.0], [46.6, 70.0], [46.7, 70.0], [46.8, 70.0], [46.9, 70.0], [47.0, 71.0], [47.1, 71.0], [47.2, 71.0], [47.3, 72.0], [47.4, 72.0], [47.5, 72.0], [47.6, 72.0], [47.7, 72.0], [47.8, 72.0], [47.9, 72.0], [48.0, 72.0], [48.1, 72.0], [48.2, 72.0], [48.3, 72.0], [48.4, 72.0], [48.5, 73.0], [48.6, 73.0], [48.7, 73.0], [48.8, 73.0], [48.9, 73.0], [49.0, 73.0], [49.1, 73.0], [49.2, 73.0], [49.3, 73.0], [49.4, 73.0], [49.5, 73.0], [49.6, 74.0], [49.7, 74.0], [49.8, 74.0], [49.9, 74.0], [50.0, 74.0], [50.1, 74.0], [50.2, 74.0], [50.3, 74.0], [50.4, 74.0], [50.5, 75.0], [50.6, 75.0], [50.7, 75.0], [50.8, 75.0], [50.9, 75.0], [51.0, 75.0], [51.1, 75.0], [51.2, 75.0], [51.3, 76.0], [51.4, 76.0], [51.5, 76.0], [51.6, 76.0], [51.7, 76.0], [51.8, 76.0], [51.9, 76.0], [52.0, 76.0], [52.1, 76.0], [52.2, 77.0], [52.3, 77.0], [52.4, 77.0], [52.5, 77.0], [52.6, 77.0], [52.7, 77.0], [52.8, 78.0], [52.9, 78.0], [53.0, 78.0], [53.1, 78.0], [53.2, 78.0], [53.3, 78.0], [53.4, 78.0], [53.5, 78.0], [53.6, 78.0], [53.7, 78.0], [53.8, 78.0], [53.9, 79.0], [54.0, 79.0], [54.1, 79.0], [54.2, 79.0], [54.3, 79.0], [54.4, 79.0], [54.5, 79.0], [54.6, 79.0], [54.7, 79.0], [54.8, 79.0], [54.9, 79.0], [55.0, 79.0], [55.1, 80.0], [55.2, 80.0], [55.3, 80.0], [55.4, 81.0], [55.5, 81.0], [55.6, 81.0], [55.7, 81.0], [55.8, 81.0], [55.9, 81.0], [56.0, 81.0], [56.1, 81.0], [56.2, 81.0], [56.3, 81.0], [56.4, 81.0], [56.5, 81.0], [56.6, 81.0], [56.7, 81.0], [56.8, 82.0], [56.9, 82.0], [57.0, 82.0], [57.1, 82.0], [57.2, 82.0], [57.3, 82.0], [57.4, 82.0], [57.5, 82.0], [57.6, 82.0], [57.7, 85.0], [57.8, 85.0], [57.9, 85.0], [58.0, 85.0], [58.1, 85.0], [58.2, 85.0], [58.3, 85.0], [58.4, 85.0], [58.5, 85.0], [58.6, 85.0], [58.7, 85.0], [58.8, 86.0], [58.9, 86.0], [59.0, 86.0], [59.1, 86.0], [59.2, 86.0], [59.3, 86.0], [59.4, 86.0], [59.5, 86.0], [59.6, 86.0], [59.7, 86.0], [59.8, 86.0], [59.9, 86.0], [60.0, 86.0], [60.1, 86.0], [60.2, 86.0], [60.3, 87.0], [60.4, 87.0], [60.5, 87.0], [60.6, 87.0], [60.7, 87.0], [60.8, 87.0], [60.9, 87.0], [61.0, 87.0], [61.1, 87.0], [61.2, 87.0], [61.3, 87.0], [61.4, 88.0], [61.5, 88.0], [61.6, 88.0], [61.7, 88.0], [61.8, 88.0], [61.9, 88.0], [62.0, 88.0], [62.1, 88.0], [62.2, 88.0], [62.3, 90.0], [62.4, 90.0], [62.5, 90.0], [62.6, 90.0], [62.7, 90.0], [62.8, 90.0], [62.9, 90.0], [63.0, 90.0], [63.1, 90.0], [63.2, 90.0], [63.3, 90.0], [63.4, 90.0], [63.5, 91.0], [63.6, 91.0], [63.7, 91.0], [63.8, 91.0], [63.9, 91.0], [64.0, 92.0], [64.1, 92.0], [64.2, 92.0], [64.3, 92.0], [64.4, 92.0], [64.5, 92.0], [64.6, 92.0], [64.7, 92.0], [64.8, 92.0], [64.9, 93.0], [65.0, 93.0], [65.1, 93.0], [65.2, 94.0], [65.3, 94.0], [65.4, 94.0], [65.5, 94.0], [65.6, 94.0], [65.7, 94.0], [65.8, 94.0], [65.9, 94.0], [66.0, 94.0], [66.1, 94.0], [66.2, 94.0], [66.3, 94.0], [66.4, 94.0], [66.5, 94.0], [66.6, 96.0], [66.7, 96.0], [66.8, 96.0], [66.9, 96.0], [67.0, 96.0], [67.1, 96.0], [67.2, 97.0], [67.3, 97.0], [67.4, 97.0], [67.5, 98.0], [67.6, 98.0], [67.7, 98.0], [67.8, 100.0], [67.9, 100.0], [68.0, 100.0], [68.1, 101.0], [68.2, 101.0], [68.3, 103.0], [68.4, 103.0], [68.5, 103.0], [68.6, 105.0], [68.7, 105.0], [68.8, 105.0], [68.9, 108.0], [69.0, 108.0], [69.1, 108.0], [69.2, 108.0], [69.3, 108.0], [69.4, 108.0], [69.5, 108.0], [69.6, 108.0], [69.7, 108.0], [69.8, 109.0], [69.9, 109.0], [70.0, 109.0], [70.1, 110.0], [70.2, 110.0], [70.3, 110.0], [70.4, 110.0], [70.5, 110.0], [70.6, 110.0], [70.7, 110.0], [70.8, 110.0], [70.9, 110.0], [71.0, 110.0], [71.1, 110.0], [71.2, 111.0], [71.3, 111.0], [71.4, 111.0], [71.5, 112.0], [71.6, 112.0], [71.7, 112.0], [71.8, 112.0], [71.9, 112.0], [72.0, 112.0], [72.1, 114.0], [72.2, 114.0], [72.3, 114.0], [72.4, 114.0], [72.5, 114.0], [72.6, 114.0], [72.7, 115.0], [72.8, 115.0], [72.9, 115.0], [73.0, 116.0], [73.1, 116.0], [73.2, 118.0], [73.3, 118.0], [73.4, 118.0], [73.5, 120.0], [73.6, 120.0], [73.7, 120.0], [73.8, 123.0], [73.9, 123.0], [74.0, 123.0], [74.1, 126.0], [74.2, 126.0], [74.3, 126.0], [74.4, 126.0], [74.5, 126.0], [74.6, 126.0], [74.7, 127.0], [74.8, 127.0], [74.9, 127.0], [75.0, 131.0], [75.1, 131.0], [75.2, 131.0], [75.3, 131.0], [75.4, 131.0], [75.5, 131.0], [75.6, 134.0], [75.7, 134.0], [75.8, 136.0], [75.9, 136.0], [76.0, 136.0], [76.1, 137.0], [76.2, 137.0], [76.3, 137.0], [76.4, 160.0], [76.5, 160.0], [76.6, 160.0], [76.7, 168.0], [76.8, 168.0], [76.9, 168.0], [77.0, 169.0], [77.1, 169.0], [77.2, 169.0], [77.3, 172.0], [77.4, 172.0], [77.5, 172.0], [77.6, 196.0], [77.7, 196.0], [77.8, 196.0], [77.9, 201.0], [78.0, 201.0], [78.1, 217.0], [78.2, 217.0], [78.3, 217.0], [78.4, 223.0], [78.5, 223.0], [78.6, 223.0], [78.7, 242.0], [78.8, 242.0], [78.9, 242.0], [79.0, 253.0], [79.1, 253.0], [79.2, 253.0], [79.3, 257.0], [79.4, 257.0], [79.5, 257.0], [79.6, 312.0], [79.7, 312.0], [79.8, 312.0], [79.9, 346.0], [80.0, 346.0], [80.1, 346.0], [80.2, 349.0], [80.3, 349.0], [80.4, 349.0], [80.5, 358.0], [80.6, 358.0], [80.7, 363.0], [80.8, 363.0], [80.9, 363.0], [81.0, 378.0], [81.1, 378.0], [81.2, 378.0], [81.3, 381.0], [81.4, 381.0], [81.5, 381.0], [81.6, 382.0], [81.7, 382.0], [81.8, 382.0], [81.9, 408.0], [82.0, 408.0], [82.1, 408.0], [82.2, 412.0], [82.3, 412.0], [82.4, 412.0], [82.5, 419.0], [82.6, 419.0], [82.7, 419.0], [82.8, 422.0], [82.9, 422.0], [83.0, 424.0], [83.1, 424.0], [83.2, 424.0], [83.3, 424.0], [83.4, 424.0], [83.5, 424.0], [83.6, 426.0], [83.7, 426.0], [83.8, 426.0], [83.9, 430.0], [84.0, 430.0], [84.1, 430.0], [84.2, 432.0], [84.3, 432.0], [84.4, 432.0], [84.5, 435.0], [84.6, 435.0], [84.7, 435.0], [84.8, 436.0], [84.9, 436.0], [85.0, 436.0], [85.1, 443.0], [85.2, 443.0], [85.3, 443.0], [85.4, 448.0], [85.5, 448.0], [85.6, 459.0], [85.7, 459.0], [85.8, 459.0], [85.9, 468.0], [86.0, 468.0], [86.1, 468.0], [86.2, 471.0], [86.3, 471.0], [86.4, 471.0], [86.5, 475.0], [86.6, 475.0], [86.7, 475.0], [86.8, 475.0], [86.9, 475.0], [87.0, 475.0], [87.1, 475.0], [87.2, 475.0], [87.3, 475.0], [87.4, 477.0], [87.5, 477.0], [87.6, 477.0], [87.7, 478.0], [87.8, 478.0], [87.9, 479.0], [88.0, 479.0], [88.1, 479.0], [88.2, 493.0], [88.3, 493.0], [88.4, 493.0], [88.5, 498.0], [88.6, 498.0], [88.7, 498.0], [88.8, 498.0], [88.9, 498.0], [89.0, 498.0], [89.1, 512.0], [89.2, 512.0], [89.3, 512.0], [89.4, 515.0], [89.5, 515.0], [89.6, 515.0], [89.7, 520.0], [89.8, 520.0], [89.9, 520.0], [90.0, 533.0], [90.1, 533.0], [90.2, 533.0], [90.3, 541.0], [90.4, 541.0], [90.5, 542.0], [90.6, 542.0], [90.7, 542.0], [90.8, 554.0], [90.9, 554.0], [91.0, 554.0], [91.1, 560.0], [91.2, 560.0], [91.3, 560.0], [91.4, 570.0], [91.5, 570.0], [91.6, 570.0], [91.7, 577.0], [91.8, 577.0], [91.9, 577.0], [92.0, 584.0], [92.1, 584.0], [92.2, 584.0], [92.3, 588.0], [92.4, 588.0], [92.5, 588.0], [92.6, 594.0], [92.7, 594.0], [92.8, 622.0], [92.9, 622.0], [93.0, 622.0], [93.1, 623.0], [93.2, 623.0], [93.3, 623.0], [93.4, 665.0], [93.5, 665.0], [93.6, 665.0], [93.7, 686.0], [93.8, 686.0], [93.9, 686.0], [94.0, 690.0], [94.1, 690.0], [94.2, 690.0], [94.3, 759.0], [94.4, 759.0], [94.5, 759.0], [94.6, 855.0], [94.7, 855.0], [94.8, 855.0], [94.9, 857.0], [95.0, 857.0], [95.1, 857.0], [95.2, 938.0], [95.3, 938.0], [95.4, 1036.0], [95.5, 1036.0], [95.6, 1036.0], [95.7, 1065.0], [95.8, 1065.0], [95.9, 1065.0], [96.0, 1165.0], [96.1, 1165.0], [96.2, 1165.0], [96.3, 1184.0], [96.4, 1184.0], [96.5, 1184.0], [96.6, 1266.0], [96.7, 1266.0], [96.8, 1266.0], [96.9, 1307.0], [97.0, 1307.0], [97.1, 1307.0], [97.2, 3172.0], [97.3, 3172.0], [97.4, 3172.0], [97.5, 3678.0], [97.6, 3678.0], [97.7, 3966.0], [97.8, 3966.0], [97.9, 3966.0], [98.0, 4131.0], [98.1, 4131.0], [98.2, 4131.0], [98.3, 4142.0], [98.4, 4142.0], [98.5, 4142.0], [98.6, 4551.0], [98.7, 4551.0], [98.8, 4551.0], [98.9, 4802.0], [99.0, 4802.0], [99.1, 4802.0], [99.2, 4878.0], [99.3, 4878.0], [99.4, 4878.0], [99.5, 5578.0], [99.6, 5578.0], [99.7, 5578.0], [99.8, 6814.0], [99.9, 6814.0], [100.0, 6814.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 235.0, "series": [{"data": [[0.0, 235.0], [600.0, 5.0], [700.0, 1.0], [3100.0, 1.0], [200.0, 6.0], [800.0, 2.0], [3600.0, 1.0], [900.0, 1.0], [3900.0, 1.0], [1000.0, 2.0], [4100.0, 2.0], [4500.0, 1.0], [1100.0, 2.0], [300.0, 8.0], [4800.0, 2.0], [1200.0, 1.0], [1300.0, 1.0], [5500.0, 1.0], [100.0, 35.0], [400.0, 25.0], [6800.0, 1.0], [500.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 309.0, "series": [{"data": [[0.0, 309.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.870317002881844, "minX": 1.60281582E12, "maxY": 9.870317002881844, "series": [{"data": [[1.60281582E12, 9.870317002881844]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 665.0, "series": [{"data": [[8.0, 94.0], [4.0, 78.0], [2.0, 408.0], [1.0, 665.0], [9.0, 88.0], [10.0, 289.5739644970415], [5.0, 50.0], [6.0, 87.0], [3.0, 493.0], [7.0, 515.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.870317002881844, 289.20461095100876]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2760.616666666667, "minX": 1.60281582E12, "maxY": 382732.2833333333, "series": [{"data": [[1.60281582E12, 382732.2833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60281582E12, 2760.616666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 289.20461095100876, "minX": 1.60281582E12, "maxY": 289.20461095100876, "series": [{"data": [[1.60281582E12, 289.20461095100876]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 288.55619596541817, "minX": 1.60281582E12, "maxY": 288.55619596541817, "series": [{"data": [[1.60281582E12, 288.55619596541817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.2737752161383286, "minX": 1.60281582E12, "maxY": 0.2737752161383286, "series": [{"data": [[1.60281582E12, 0.2737752161383286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.60281582E12, "maxY": 6814.0, "series": [{"data": [[1.60281582E12, 6814.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60281582E12, 22.131999917030335]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60281582E12, 22.445200033187866]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60281582E12, 22.305999958515166]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60281582E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60281582E12, 74.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 65.0, "minX": 2.0, "maxY": 536.5, "series": [{"data": [[2.0, 536.5], [75.0, 65.0], [38.0, 91.5], [20.0, 97.0], [14.0, 244.5], [61.0, 79.0], [62.0, 73.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 65.0, "minX": 2.0, "maxY": 535.0, "series": [{"data": [[2.0, 535.0], [75.0, 65.0], [38.0, 91.5], [20.0, 96.5], [14.0, 244.5], [61.0, 79.0], [62.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60281582E12, "maxY": 5.783333333333333, "series": [{"data": [[1.60281582E12, 5.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281582E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60281582E12, "maxY": 5.783333333333333, "series": [{"data": [[1.60281582E12, 5.783333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60281582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60281582E12, "maxY": 5.783333333333333, "series": [{"data": [[1.60281582E12, 5.783333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.60281582E12, "maxY": 5.783333333333333, "series": [{"data": [[1.60281582E12, 5.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60281582E12, "title": "Total Transactions Per Second"}},
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

