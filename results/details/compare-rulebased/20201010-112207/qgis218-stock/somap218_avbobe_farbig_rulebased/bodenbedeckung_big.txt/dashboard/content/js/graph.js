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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 90091.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 31.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 39.0], [6.4, 39.0], [6.5, 39.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 44.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 46.0], [10.0, 46.0], [10.1, 46.0], [10.2, 47.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 47.0], [10.7, 47.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 52.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 56.0], [16.1, 56.0], [16.2, 56.0], [16.3, 56.0], [16.4, 57.0], [16.5, 57.0], [16.6, 57.0], [16.7, 57.0], [16.8, 58.0], [16.9, 58.0], [17.0, 58.0], [17.1, 58.0], [17.2, 58.0], [17.3, 58.0], [17.4, 59.0], [17.5, 59.0], [17.6, 59.0], [17.7, 59.0], [17.8, 59.0], [17.9, 60.0], [18.0, 60.0], [18.1, 60.0], [18.2, 60.0], [18.3, 61.0], [18.4, 61.0], [18.5, 61.0], [18.6, 61.0], [18.7, 62.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 63.0], [19.2, 63.0], [19.3, 63.0], [19.4, 63.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 64.0], [19.9, 64.0], [20.0, 64.0], [20.1, 64.0], [20.2, 64.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 65.0], [20.7, 65.0], [20.8, 66.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 68.0], [22.3, 68.0], [22.4, 69.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 69.0], [22.9, 70.0], [23.0, 70.0], [23.1, 70.0], [23.2, 70.0], [23.3, 71.0], [23.4, 71.0], [23.5, 71.0], [23.6, 71.0], [23.7, 72.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 73.0], [24.3, 73.0], [24.4, 73.0], [24.5, 73.0], [24.6, 73.0], [24.7, 73.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 74.0], [25.4, 75.0], [25.5, 75.0], [25.6, 75.0], [25.7, 75.0], [25.8, 76.0], [25.9, 76.0], [26.0, 76.0], [26.1, 76.0], [26.2, 76.0], [26.3, 76.0], [26.4, 76.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 79.0], [27.6, 79.0], [27.7, 79.0], [27.8, 79.0], [27.9, 80.0], [28.0, 80.0], [28.1, 80.0], [28.2, 80.0], [28.3, 80.0], [28.4, 81.0], [28.5, 81.0], [28.6, 81.0], [28.7, 81.0], [28.8, 82.0], [28.9, 82.0], [29.0, 82.0], [29.1, 82.0], [29.2, 82.0], [29.3, 83.0], [29.4, 83.0], [29.5, 83.0], [29.6, 83.0], [29.7, 83.0], [29.8, 84.0], [29.9, 84.0], [30.0, 84.0], [30.1, 85.0], [30.2, 85.0], [30.3, 85.0], [30.4, 85.0], [30.5, 86.0], [30.6, 86.0], [30.7, 86.0], [30.8, 87.0], [30.9, 87.0], [31.0, 87.0], [31.1, 87.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 89.0], [31.7, 89.0], [31.8, 89.0], [31.9, 89.0], [32.0, 90.0], [32.1, 90.0], [32.2, 90.0], [32.3, 91.0], [32.4, 91.0], [32.5, 91.0], [32.6, 92.0], [32.7, 92.0], [32.8, 92.0], [32.9, 93.0], [33.0, 93.0], [33.1, 94.0], [33.2, 94.0], [33.3, 94.0], [33.4, 95.0], [33.5, 95.0], [33.6, 95.0], [33.7, 96.0], [33.8, 96.0], [33.9, 97.0], [34.0, 97.0], [34.1, 97.0], [34.2, 97.0], [34.3, 98.0], [34.4, 98.0], [34.5, 98.0], [34.6, 99.0], [34.7, 99.0], [34.8, 100.0], [34.9, 100.0], [35.0, 100.0], [35.1, 101.0], [35.2, 101.0], [35.3, 102.0], [35.4, 102.0], [35.5, 102.0], [35.6, 103.0], [35.7, 103.0], [35.8, 103.0], [35.9, 103.0], [36.0, 104.0], [36.1, 104.0], [36.2, 104.0], [36.3, 104.0], [36.4, 104.0], [36.5, 104.0], [36.6, 104.0], [36.7, 105.0], [36.8, 105.0], [36.9, 105.0], [37.0, 105.0], [37.1, 105.0], [37.2, 105.0], [37.3, 105.0], [37.4, 105.0], [37.5, 105.0], [37.6, 106.0], [37.7, 106.0], [37.8, 106.0], [37.9, 106.0], [38.0, 106.0], [38.1, 106.0], [38.2, 106.0], [38.3, 106.0], [38.4, 106.0], [38.5, 107.0], [38.6, 107.0], [38.7, 107.0], [38.8, 107.0], [38.9, 107.0], [39.0, 107.0], [39.1, 107.0], [39.2, 108.0], [39.3, 108.0], [39.4, 108.0], [39.5, 108.0], [39.6, 108.0], [39.7, 108.0], [39.8, 108.0], [39.9, 109.0], [40.0, 109.0], [40.1, 109.0], [40.2, 109.0], [40.3, 109.0], [40.4, 109.0], [40.5, 109.0], [40.6, 110.0], [40.7, 110.0], [40.8, 110.0], [40.9, 110.0], [41.0, 110.0], [41.1, 111.0], [41.2, 111.0], [41.3, 111.0], [41.4, 111.0], [41.5, 112.0], [41.6, 112.0], [41.7, 112.0], [41.8, 112.0], [41.9, 113.0], [42.0, 113.0], [42.1, 113.0], [42.2, 114.0], [42.3, 114.0], [42.4, 114.0], [42.5, 115.0], [42.6, 115.0], [42.7, 116.0], [42.8, 116.0], [42.9, 116.0], [43.0, 116.0], [43.1, 117.0], [43.2, 117.0], [43.3, 117.0], [43.4, 117.0], [43.5, 118.0], [43.6, 118.0], [43.7, 118.0], [43.8, 119.0], [43.9, 119.0], [44.0, 120.0], [44.1, 120.0], [44.2, 120.0], [44.3, 121.0], [44.4, 121.0], [44.5, 122.0], [44.6, 122.0], [44.7, 122.0], [44.8, 122.0], [44.9, 123.0], [45.0, 123.0], [45.1, 123.0], [45.2, 124.0], [45.3, 124.0], [45.4, 124.0], [45.5, 125.0], [45.6, 125.0], [45.7, 125.0], [45.8, 126.0], [45.9, 126.0], [46.0, 126.0], [46.1, 126.0], [46.2, 127.0], [46.3, 127.0], [46.4, 128.0], [46.5, 128.0], [46.6, 128.0], [46.7, 129.0], [46.8, 129.0], [46.9, 130.0], [47.0, 130.0], [47.1, 130.0], [47.2, 131.0], [47.3, 131.0], [47.4, 131.0], [47.5, 132.0], [47.6, 132.0], [47.7, 132.0], [47.8, 133.0], [47.9, 133.0], [48.0, 133.0], [48.1, 134.0], [48.2, 134.0], [48.3, 135.0], [48.4, 135.0], [48.5, 135.0], [48.6, 136.0], [48.7, 136.0], [48.8, 137.0], [48.9, 137.0], [49.0, 137.0], [49.1, 138.0], [49.2, 138.0], [49.3, 139.0], [49.4, 139.0], [49.5, 139.0], [49.6, 140.0], [49.7, 140.0], [49.8, 141.0], [49.9, 141.0], [50.0, 141.0], [50.1, 142.0], [50.2, 142.0], [50.3, 143.0], [50.4, 144.0], [50.5, 144.0], [50.6, 145.0], [50.7, 145.0], [50.8, 145.0], [50.9, 146.0], [51.0, 146.0], [51.1, 146.0], [51.2, 147.0], [51.3, 148.0], [51.4, 148.0], [51.5, 148.0], [51.6, 149.0], [51.7, 149.0], [51.8, 150.0], [51.9, 150.0], [52.0, 151.0], [52.1, 151.0], [52.2, 151.0], [52.3, 152.0], [52.4, 153.0], [52.5, 153.0], [52.6, 154.0], [52.7, 154.0], [52.8, 154.0], [52.9, 155.0], [53.0, 155.0], [53.1, 156.0], [53.2, 156.0], [53.3, 156.0], [53.4, 157.0], [53.5, 158.0], [53.6, 159.0], [53.7, 159.0], [53.8, 160.0], [53.9, 160.0], [54.0, 161.0], [54.1, 161.0], [54.2, 162.0], [54.3, 163.0], [54.4, 163.0], [54.5, 164.0], [54.6, 165.0], [54.7, 166.0], [54.8, 166.0], [54.9, 167.0], [55.0, 167.0], [55.1, 168.0], [55.2, 169.0], [55.3, 169.0], [55.4, 170.0], [55.5, 171.0], [55.6, 171.0], [55.7, 172.0], [55.8, 173.0], [55.9, 173.0], [56.0, 174.0], [56.1, 174.0], [56.2, 175.0], [56.3, 175.0], [56.4, 176.0], [56.5, 177.0], [56.6, 178.0], [56.7, 179.0], [56.8, 180.0], [56.9, 180.0], [57.0, 182.0], [57.1, 183.0], [57.2, 184.0], [57.3, 184.0], [57.4, 186.0], [57.5, 186.0], [57.6, 187.0], [57.7, 187.0], [57.8, 188.0], [57.9, 189.0], [58.0, 189.0], [58.1, 190.0], [58.2, 190.0], [58.3, 191.0], [58.4, 191.0], [58.5, 192.0], [58.6, 192.0], [58.7, 193.0], [58.8, 194.0], [58.9, 194.0], [59.0, 196.0], [59.1, 196.0], [59.2, 196.0], [59.3, 197.0], [59.4, 198.0], [59.5, 199.0], [59.6, 200.0], [59.7, 201.0], [59.8, 202.0], [59.9, 203.0], [60.0, 203.0], [60.1, 205.0], [60.2, 206.0], [60.3, 206.0], [60.4, 207.0], [60.5, 208.0], [60.6, 208.0], [60.7, 210.0], [60.8, 211.0], [60.9, 211.0], [61.0, 212.0], [61.1, 213.0], [61.2, 214.0], [61.3, 215.0], [61.4, 215.0], [61.5, 216.0], [61.6, 217.0], [61.7, 218.0], [61.8, 219.0], [61.9, 220.0], [62.0, 221.0], [62.1, 221.0], [62.2, 222.0], [62.3, 223.0], [62.4, 224.0], [62.5, 225.0], [62.6, 226.0], [62.7, 226.0], [62.8, 227.0], [62.9, 228.0], [63.0, 228.0], [63.1, 229.0], [63.2, 230.0], [63.3, 231.0], [63.4, 231.0], [63.5, 232.0], [63.6, 233.0], [63.7, 234.0], [63.8, 234.0], [63.9, 234.0], [64.0, 234.0], [64.1, 235.0], [64.2, 236.0], [64.3, 236.0], [64.4, 237.0], [64.5, 238.0], [64.6, 239.0], [64.7, 240.0], [64.8, 241.0], [64.9, 242.0], [65.0, 243.0], [65.1, 244.0], [65.2, 244.0], [65.3, 245.0], [65.4, 245.0], [65.5, 246.0], [65.6, 247.0], [65.7, 247.0], [65.8, 247.0], [65.9, 248.0], [66.0, 248.0], [66.1, 249.0], [66.2, 249.0], [66.3, 250.0], [66.4, 251.0], [66.5, 252.0], [66.6, 252.0], [66.7, 254.0], [66.8, 254.0], [66.9, 255.0], [67.0, 255.0], [67.1, 257.0], [67.2, 257.0], [67.3, 258.0], [67.4, 258.0], [67.5, 259.0], [67.6, 260.0], [67.7, 261.0], [67.8, 261.0], [67.9, 262.0], [68.0, 262.0], [68.1, 263.0], [68.2, 264.0], [68.3, 264.0], [68.4, 265.0], [68.5, 266.0], [68.6, 267.0], [68.7, 267.0], [68.8, 268.0], [68.9, 268.0], [69.0, 269.0], [69.1, 271.0], [69.2, 272.0], [69.3, 273.0], [69.4, 274.0], [69.5, 276.0], [69.6, 277.0], [69.7, 278.0], [69.8, 279.0], [69.9, 280.0], [70.0, 281.0], [70.1, 282.0], [70.2, 283.0], [70.3, 284.0], [70.4, 285.0], [70.5, 286.0], [70.6, 287.0], [70.7, 288.0], [70.8, 288.0], [70.9, 290.0], [71.0, 290.0], [71.1, 291.0], [71.2, 291.0], [71.3, 294.0], [71.4, 294.0], [71.5, 296.0], [71.6, 296.0], [71.7, 297.0], [71.8, 299.0], [71.9, 299.0], [72.0, 300.0], [72.1, 301.0], [72.2, 302.0], [72.3, 302.0], [72.4, 304.0], [72.5, 305.0], [72.6, 306.0], [72.7, 306.0], [72.8, 307.0], [72.9, 309.0], [73.0, 310.0], [73.1, 311.0], [73.2, 312.0], [73.3, 314.0], [73.4, 316.0], [73.5, 316.0], [73.6, 317.0], [73.7, 318.0], [73.8, 320.0], [73.9, 321.0], [74.0, 322.0], [74.1, 323.0], [74.2, 325.0], [74.3, 326.0], [74.4, 327.0], [74.5, 328.0], [74.6, 329.0], [74.7, 330.0], [74.8, 331.0], [74.9, 333.0], [75.0, 334.0], [75.1, 334.0], [75.2, 336.0], [75.3, 336.0], [75.4, 337.0], [75.5, 339.0], [75.6, 340.0], [75.7, 340.0], [75.8, 341.0], [75.9, 342.0], [76.0, 343.0], [76.1, 343.0], [76.2, 344.0], [76.3, 345.0], [76.4, 346.0], [76.5, 347.0], [76.6, 348.0], [76.7, 350.0], [76.8, 351.0], [76.9, 352.0], [77.0, 353.0], [77.1, 354.0], [77.2, 355.0], [77.3, 356.0], [77.4, 358.0], [77.5, 360.0], [77.6, 360.0], [77.7, 362.0], [77.8, 364.0], [77.9, 365.0], [78.0, 366.0], [78.1, 367.0], [78.2, 368.0], [78.3, 370.0], [78.4, 371.0], [78.5, 372.0], [78.6, 374.0], [78.7, 376.0], [78.8, 377.0], [78.9, 378.0], [79.0, 380.0], [79.1, 384.0], [79.2, 385.0], [79.3, 385.0], [79.4, 386.0], [79.5, 387.0], [79.6, 388.0], [79.7, 389.0], [79.8, 391.0], [79.9, 392.0], [80.0, 393.0], [80.1, 395.0], [80.2, 396.0], [80.3, 397.0], [80.4, 399.0], [80.5, 399.0], [80.6, 402.0], [80.7, 403.0], [80.8, 405.0], [80.9, 408.0], [81.0, 410.0], [81.1, 411.0], [81.2, 412.0], [81.3, 413.0], [81.4, 415.0], [81.5, 416.0], [81.6, 419.0], [81.7, 421.0], [81.8, 423.0], [81.9, 425.0], [82.0, 426.0], [82.1, 427.0], [82.2, 428.0], [82.3, 430.0], [82.4, 430.0], [82.5, 432.0], [82.6, 434.0], [82.7, 436.0], [82.8, 438.0], [82.9, 439.0], [83.0, 441.0], [83.1, 446.0], [83.2, 451.0], [83.3, 453.0], [83.4, 456.0], [83.5, 457.0], [83.6, 459.0], [83.7, 461.0], [83.8, 463.0], [83.9, 465.0], [84.0, 465.0], [84.1, 466.0], [84.2, 468.0], [84.3, 468.0], [84.4, 469.0], [84.5, 470.0], [84.6, 471.0], [84.7, 472.0], [84.8, 474.0], [84.9, 475.0], [85.0, 476.0], [85.1, 477.0], [85.2, 478.0], [85.3, 480.0], [85.4, 481.0], [85.5, 483.0], [85.6, 484.0], [85.7, 488.0], [85.8, 490.0], [85.9, 491.0], [86.0, 492.0], [86.1, 492.0], [86.2, 493.0], [86.3, 495.0], [86.4, 498.0], [86.5, 500.0], [86.6, 501.0], [86.7, 501.0], [86.8, 504.0], [86.9, 506.0], [87.0, 508.0], [87.1, 509.0], [87.2, 510.0], [87.3, 511.0], [87.4, 513.0], [87.5, 514.0], [87.6, 515.0], [87.7, 516.0], [87.8, 518.0], [87.9, 519.0], [88.0, 521.0], [88.1, 522.0], [88.2, 523.0], [88.3, 525.0], [88.4, 526.0], [88.5, 528.0], [88.6, 529.0], [88.7, 531.0], [88.8, 532.0], [88.9, 533.0], [89.0, 534.0], [89.1, 536.0], [89.2, 537.0], [89.3, 539.0], [89.4, 541.0], [89.5, 543.0], [89.6, 545.0], [89.7, 548.0], [89.8, 550.0], [89.9, 552.0], [90.0, 553.0], [90.1, 554.0], [90.2, 555.0], [90.3, 557.0], [90.4, 559.0], [90.5, 560.0], [90.6, 561.0], [90.7, 562.0], [90.8, 565.0], [90.9, 567.0], [91.0, 568.0], [91.1, 569.0], [91.2, 571.0], [91.3, 572.0], [91.4, 575.0], [91.5, 577.0], [91.6, 578.0], [91.7, 580.0], [91.8, 581.0], [91.9, 584.0], [92.0, 586.0], [92.1, 588.0], [92.2, 590.0], [92.3, 591.0], [92.4, 592.0], [92.5, 596.0], [92.6, 598.0], [92.7, 600.0], [92.8, 601.0], [92.9, 603.0], [93.0, 604.0], [93.1, 606.0], [93.2, 607.0], [93.3, 610.0], [93.4, 613.0], [93.5, 613.0], [93.6, 615.0], [93.7, 618.0], [93.8, 620.0], [93.9, 621.0], [94.0, 624.0], [94.1, 625.0], [94.2, 629.0], [94.3, 633.0], [94.4, 639.0], [94.5, 640.0], [94.6, 644.0], [94.7, 649.0], [94.8, 651.0], [94.9, 654.0], [95.0, 659.0], [95.1, 661.0], [95.2, 662.0], [95.3, 667.0], [95.4, 670.0], [95.5, 674.0], [95.6, 676.0], [95.7, 680.0], [95.8, 683.0], [95.9, 687.0], [96.0, 692.0], [96.1, 695.0], [96.2, 701.0], [96.3, 706.0], [96.4, 710.0], [96.5, 715.0], [96.6, 721.0], [96.7, 727.0], [96.8, 730.0], [96.9, 738.0], [97.0, 740.0], [97.1, 745.0], [97.2, 750.0], [97.3, 760.0], [97.4, 770.0], [97.5, 775.0], [97.6, 783.0], [97.7, 787.0], [97.8, 790.0], [97.9, 796.0], [98.0, 805.0], [98.1, 811.0], [98.2, 822.0], [98.3, 833.0], [98.4, 844.0], [98.5, 853.0], [98.6, 867.0], [98.7, 878.0], [98.8, 888.0], [98.9, 910.0], [99.0, 925.0], [99.1, 953.0], [99.2, 984.0], [99.3, 1011.0], [99.4, 1041.0], [99.5, 1107.0], [99.6, 1282.0], [99.7, 1415.0], [99.8, 1748.0], [99.9, 1883.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1806.0, "series": [{"data": [[0.0, 1806.0], [2100.0, 1.0], [600.0, 182.0], [700.0, 92.0], [200.0, 643.0], [800.0, 48.0], [900.0, 21.0], [1000.0, 11.0], [1100.0, 3.0], [300.0, 446.0], [1200.0, 4.0], [1300.0, 4.0], [1400.0, 4.0], [90000.0, 1.0], [1500.0, 1.0], [100.0, 1284.0], [400.0, 310.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 2.0], [500.0, 321.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4491.0, "series": [{"data": [[0.0, 4491.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 689.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.971042471042471, "minX": 1.60232892E12, "maxY": 10.0, "series": [{"data": [[1.60232898E12, 10.0], [1.60232892E12, 9.997540983606559], [1.60232904E12, 9.971042471042471]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232904E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 110.0, "minX": 1.0, "maxY": 90091.0, "series": [{"data": [[8.0, 385.0], [4.0, 156.0], [2.0, 855.0], [1.0, 90091.0], [9.0, 412.0], [10.0, 233.01525096525106], [5.0, 340.0], [6.0, 110.0], [3.0, 345.0], [7.0, 617.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990753226738633, 250.65054902716275]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9165.716666666667, "minX": 1.60232892E12, "maxY": 7802703.633333334, "series": [{"data": [[1.60232898E12, 7802703.633333334], [1.60232892E12, 3797543.5833333335], [1.60232904E12, 5325284.116666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232898E12, 18568.333333333332], [1.60232892E12, 9165.716666666667], [1.60232904E12, 12041.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232904E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 228.84195283409184, "minX": 1.60232892E12, "maxY": 293.55727155727146, "series": [{"data": [[1.60232898E12, 228.84195283409184], [1.60232892E12, 239.20327868852493], [1.60232904E12, 293.55727155727146]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232904E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 226.98345055854392, "minX": 1.60232892E12, "maxY": 291.9929214929216, "series": [{"data": [[1.60232898E12, 226.98345055854392], [1.60232892E12, 237.74344262295102], [1.60232904E12, 291.9929214929216]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232904E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005148005148005157, "minX": 1.60232892E12, "maxY": 0.07540983606557376, "series": [{"data": [[1.60232898E12, 0.007033512618949102], [1.60232892E12, 0.07540983606557376], [1.60232904E12, 0.005148005148005157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232904E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60232892E12, "maxY": 2197.0, "series": [{"data": [[1.60232898E12, 2056.0], [1.60232892E12, 2197.0], [1.60232904E12, 1415.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232898E12, 33.0], [1.60232892E12, 36.0], [1.60232904E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232898E12, 33.0], [1.60232892E12, 37.0], [1.60232904E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232898E12, 33.0], [1.60232892E12, 36.599499854445455], [1.60232904E12, 32.76299981474877]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232898E12, 28.0], [1.60232892E12, 29.0], [1.60232904E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232898E12, 141.0], [1.60232892E12, 151.0], [1.60232904E12, 135.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232904E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 90091.0, "series": [{"data": [[4.0, 566.5], [18.0, 479.5], [21.0, 228.0], [22.0, 422.0], [23.0, 260.5], [24.0, 339.5], [25.0, 208.0], [26.0, 268.5], [27.0, 324.5], [28.0, 241.0], [29.0, 191.0], [30.0, 270.5], [31.0, 223.0], [33.0, 159.5], [32.0, 268.5], [34.0, 220.5], [35.0, 153.0], [36.0, 220.0], [37.0, 223.5], [39.0, 211.0], [38.0, 173.5], [40.0, 178.0], [41.0, 154.0], [42.0, 205.0], [43.0, 68.0], [45.0, 196.0], [44.0, 159.0], [46.0, 105.5], [47.0, 109.0], [48.0, 115.0], [49.0, 155.0], [51.0, 111.0], [52.0, 141.0], [54.0, 104.0], [55.0, 41.0], [58.0, 138.0], [60.0, 67.5], [63.0, 64.0], [67.0, 79.0], [64.0, 67.0], [65.0, 63.0], [75.0, 74.0], [77.0, 75.0], [76.0, 80.5], [81.0, 62.0], [83.0, 87.0], [87.0, 82.0], [92.0, 60.5], [99.0, 40.0], [106.0, 48.0], [1.0, 855.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 40.0, "minX": 1.0, "maxY": 90091.0, "series": [{"data": [[4.0, 564.5], [18.0, 472.0], [21.0, 227.0], [22.0, 418.5], [23.0, 258.5], [24.0, 338.0], [25.0, 208.0], [26.0, 267.5], [27.0, 324.0], [28.0, 240.5], [29.0, 191.0], [30.0, 268.0], [31.0, 223.0], [33.0, 159.5], [32.0, 262.0], [34.0, 219.5], [35.0, 153.0], [36.0, 219.5], [37.0, 222.5], [39.0, 210.5], [38.0, 173.5], [40.0, 178.0], [41.0, 153.0], [42.0, 204.5], [43.0, 68.0], [45.0, 195.0], [44.0, 159.0], [46.0, 105.5], [47.0, 109.0], [48.0, 115.0], [49.0, 148.0], [51.0, 110.0], [52.0, 141.0], [54.0, 104.0], [55.0, 41.0], [58.0, 137.0], [60.0, 67.5], [63.0, 64.0], [67.0, 78.0], [64.0, 67.0], [65.0, 63.0], [75.0, 74.0], [77.0, 75.0], [76.0, 80.0], [81.0, 62.0], [83.0, 87.0], [87.0, 81.0], [92.0, 60.5], [99.0, 40.0], [106.0, 47.5], [1.0, 851.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90091.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 20.5, "minX": 1.60232892E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60232898E12, 40.28333333333333], [1.60232892E12, 20.5], [1.60232904E12, 25.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232904E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232892E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60232898E12, 40.28333333333333], [1.60232892E12, 20.333333333333332], [1.60232904E12, 25.883333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232904E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232904E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232892E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60232898E12, 40.28333333333333], [1.60232892E12, 20.333333333333332], [1.60232904E12, 25.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232904E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232904E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232892E12, "maxY": 40.28333333333333, "series": [{"data": [[1.60232898E12, 40.28333333333333], [1.60232892E12, 20.333333333333332], [1.60232904E12, 25.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232904E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232904E12, "title": "Total Transactions Per Second"}},
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

