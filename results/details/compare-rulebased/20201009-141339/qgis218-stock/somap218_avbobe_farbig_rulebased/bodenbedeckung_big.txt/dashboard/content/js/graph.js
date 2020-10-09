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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 90045.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 32.0], [0.4, 32.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 38.0], [4.7, 38.0], [4.8, 38.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 44.0], [8.6, 44.0], [8.7, 44.0], [8.8, 44.0], [8.9, 44.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 46.0], [9.7, 46.0], [9.8, 46.0], [9.9, 46.0], [10.0, 46.0], [10.1, 47.0], [10.2, 47.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 48.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 52.0], [13.2, 52.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 55.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 55.0], [14.8, 56.0], [14.9, 56.0], [15.0, 56.0], [15.1, 56.0], [15.2, 56.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 57.0], [15.7, 57.0], [15.8, 57.0], [15.9, 57.0], [16.0, 58.0], [16.1, 58.0], [16.2, 58.0], [16.3, 58.0], [16.4, 58.0], [16.5, 58.0], [16.6, 59.0], [16.7, 59.0], [16.8, 59.0], [16.9, 59.0], [17.0, 59.0], [17.1, 60.0], [17.2, 60.0], [17.3, 60.0], [17.4, 60.0], [17.5, 60.0], [17.6, 61.0], [17.7, 61.0], [17.8, 61.0], [17.9, 61.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 62.0], [18.4, 62.0], [18.5, 62.0], [18.6, 63.0], [18.7, 63.0], [18.8, 63.0], [18.9, 63.0], [19.0, 63.0], [19.1, 63.0], [19.2, 64.0], [19.3, 64.0], [19.4, 64.0], [19.5, 64.0], [19.6, 64.0], [19.7, 64.0], [19.8, 65.0], [19.9, 65.0], [20.0, 65.0], [20.1, 66.0], [20.2, 66.0], [20.3, 66.0], [20.4, 66.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 67.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 68.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 69.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 70.0], [22.2, 70.0], [22.3, 70.0], [22.4, 70.0], [22.5, 70.0], [22.6, 71.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 74.0], [24.0, 74.0], [24.1, 74.0], [24.2, 75.0], [24.3, 75.0], [24.4, 75.0], [24.5, 75.0], [24.6, 75.0], [24.7, 76.0], [24.8, 76.0], [24.9, 76.0], [25.0, 76.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 78.0], [25.7, 78.0], [25.8, 79.0], [25.9, 79.0], [26.0, 79.0], [26.1, 79.0], [26.2, 79.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 80.0], [26.7, 81.0], [26.8, 81.0], [26.9, 82.0], [27.0, 82.0], [27.1, 82.0], [27.2, 82.0], [27.3, 83.0], [27.4, 83.0], [27.5, 83.0], [27.6, 83.0], [27.7, 83.0], [27.8, 84.0], [27.9, 84.0], [28.0, 84.0], [28.1, 84.0], [28.2, 85.0], [28.3, 85.0], [28.4, 86.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 87.0], [28.9, 87.0], [29.0, 88.0], [29.1, 88.0], [29.2, 88.0], [29.3, 88.0], [29.4, 89.0], [29.5, 89.0], [29.6, 90.0], [29.7, 90.0], [29.8, 90.0], [29.9, 90.0], [30.0, 91.0], [30.1, 91.0], [30.2, 92.0], [30.3, 92.0], [30.4, 92.0], [30.5, 93.0], [30.6, 93.0], [30.7, 93.0], [30.8, 93.0], [30.9, 94.0], [31.0, 94.0], [31.1, 94.0], [31.2, 95.0], [31.3, 95.0], [31.4, 95.0], [31.5, 96.0], [31.6, 96.0], [31.7, 96.0], [31.8, 97.0], [31.9, 97.0], [32.0, 97.0], [32.1, 97.0], [32.2, 98.0], [32.3, 98.0], [32.4, 98.0], [32.5, 98.0], [32.6, 99.0], [32.7, 100.0], [32.8, 100.0], [32.9, 100.0], [33.0, 100.0], [33.1, 101.0], [33.2, 101.0], [33.3, 101.0], [33.4, 102.0], [33.5, 102.0], [33.6, 103.0], [33.7, 103.0], [33.8, 103.0], [33.9, 104.0], [34.0, 104.0], [34.1, 104.0], [34.2, 104.0], [34.3, 105.0], [34.4, 105.0], [34.5, 105.0], [34.6, 105.0], [34.7, 105.0], [34.8, 105.0], [34.9, 106.0], [35.0, 106.0], [35.1, 106.0], [35.2, 106.0], [35.3, 106.0], [35.4, 106.0], [35.5, 106.0], [35.6, 106.0], [35.7, 106.0], [35.8, 107.0], [35.9, 107.0], [36.0, 107.0], [36.1, 107.0], [36.2, 107.0], [36.3, 107.0], [36.4, 107.0], [36.5, 107.0], [36.6, 107.0], [36.7, 108.0], [36.8, 108.0], [36.9, 108.0], [37.0, 108.0], [37.1, 108.0], [37.2, 108.0], [37.3, 108.0], [37.4, 109.0], [37.5, 109.0], [37.6, 109.0], [37.7, 109.0], [37.8, 109.0], [37.9, 109.0], [38.0, 109.0], [38.1, 110.0], [38.2, 110.0], [38.3, 110.0], [38.4, 110.0], [38.5, 110.0], [38.6, 110.0], [38.7, 110.0], [38.8, 111.0], [38.9, 111.0], [39.0, 111.0], [39.1, 111.0], [39.2, 111.0], [39.3, 112.0], [39.4, 112.0], [39.5, 112.0], [39.6, 112.0], [39.7, 112.0], [39.8, 112.0], [39.9, 113.0], [40.0, 113.0], [40.1, 113.0], [40.2, 113.0], [40.3, 113.0], [40.4, 114.0], [40.5, 114.0], [40.6, 114.0], [40.7, 114.0], [40.8, 115.0], [40.9, 115.0], [41.0, 115.0], [41.1, 115.0], [41.2, 115.0], [41.3, 115.0], [41.4, 116.0], [41.5, 116.0], [41.6, 116.0], [41.7, 117.0], [41.8, 117.0], [41.9, 117.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 119.0], [42.5, 119.0], [42.6, 119.0], [42.7, 119.0], [42.8, 119.0], [42.9, 120.0], [43.0, 120.0], [43.1, 120.0], [43.2, 120.0], [43.3, 121.0], [43.4, 122.0], [43.5, 122.0], [43.6, 123.0], [43.7, 123.0], [43.8, 123.0], [43.9, 123.0], [44.0, 123.0], [44.1, 124.0], [44.2, 124.0], [44.3, 124.0], [44.4, 125.0], [44.5, 125.0], [44.6, 125.0], [44.7, 125.0], [44.8, 126.0], [44.9, 126.0], [45.0, 126.0], [45.1, 126.0], [45.2, 127.0], [45.3, 127.0], [45.4, 127.0], [45.5, 128.0], [45.6, 128.0], [45.7, 128.0], [45.8, 129.0], [45.9, 129.0], [46.0, 129.0], [46.1, 129.0], [46.2, 130.0], [46.3, 130.0], [46.4, 130.0], [46.5, 130.0], [46.6, 131.0], [46.7, 131.0], [46.8, 131.0], [46.9, 131.0], [47.0, 132.0], [47.1, 132.0], [47.2, 132.0], [47.3, 133.0], [47.4, 133.0], [47.5, 133.0], [47.6, 134.0], [47.7, 134.0], [47.8, 135.0], [47.9, 135.0], [48.0, 135.0], [48.1, 136.0], [48.2, 137.0], [48.3, 137.0], [48.4, 137.0], [48.5, 138.0], [48.6, 138.0], [48.7, 139.0], [48.8, 139.0], [48.9, 139.0], [49.0, 140.0], [49.1, 140.0], [49.2, 140.0], [49.3, 141.0], [49.4, 142.0], [49.5, 142.0], [49.6, 142.0], [49.7, 143.0], [49.8, 143.0], [49.9, 144.0], [50.0, 145.0], [50.1, 145.0], [50.2, 145.0], [50.3, 146.0], [50.4, 146.0], [50.5, 146.0], [50.6, 147.0], [50.7, 147.0], [50.8, 148.0], [50.9, 148.0], [51.0, 148.0], [51.1, 149.0], [51.2, 150.0], [51.3, 150.0], [51.4, 151.0], [51.5, 152.0], [51.6, 152.0], [51.7, 153.0], [51.8, 154.0], [51.9, 154.0], [52.0, 154.0], [52.1, 155.0], [52.2, 155.0], [52.3, 156.0], [52.4, 156.0], [52.5, 157.0], [52.6, 157.0], [52.7, 157.0], [52.8, 158.0], [52.9, 159.0], [53.0, 159.0], [53.1, 160.0], [53.2, 161.0], [53.3, 161.0], [53.4, 162.0], [53.5, 162.0], [53.6, 163.0], [53.7, 164.0], [53.8, 164.0], [53.9, 165.0], [54.0, 166.0], [54.1, 167.0], [54.2, 167.0], [54.3, 169.0], [54.4, 170.0], [54.5, 170.0], [54.6, 171.0], [54.7, 172.0], [54.8, 172.0], [54.9, 173.0], [55.0, 173.0], [55.1, 174.0], [55.2, 175.0], [55.3, 175.0], [55.4, 175.0], [55.5, 176.0], [55.6, 176.0], [55.7, 177.0], [55.8, 178.0], [55.9, 179.0], [56.0, 179.0], [56.1, 181.0], [56.2, 182.0], [56.3, 183.0], [56.4, 183.0], [56.5, 184.0], [56.6, 184.0], [56.7, 185.0], [56.8, 186.0], [56.9, 187.0], [57.0, 187.0], [57.1, 188.0], [57.2, 189.0], [57.3, 190.0], [57.4, 191.0], [57.5, 192.0], [57.6, 192.0], [57.7, 193.0], [57.8, 193.0], [57.9, 194.0], [58.0, 195.0], [58.1, 196.0], [58.2, 197.0], [58.3, 197.0], [58.4, 198.0], [58.5, 199.0], [58.6, 200.0], [58.7, 200.0], [58.8, 202.0], [58.9, 202.0], [59.0, 202.0], [59.1, 203.0], [59.2, 204.0], [59.3, 205.0], [59.4, 206.0], [59.5, 206.0], [59.6, 207.0], [59.7, 208.0], [59.8, 208.0], [59.9, 209.0], [60.0, 210.0], [60.1, 211.0], [60.2, 212.0], [60.3, 213.0], [60.4, 214.0], [60.5, 215.0], [60.6, 216.0], [60.7, 216.0], [60.8, 217.0], [60.9, 217.0], [61.0, 218.0], [61.1, 218.0], [61.2, 218.0], [61.3, 219.0], [61.4, 220.0], [61.5, 220.0], [61.6, 221.0], [61.7, 222.0], [61.8, 222.0], [61.9, 223.0], [62.0, 224.0], [62.1, 224.0], [62.2, 225.0], [62.3, 226.0], [62.4, 226.0], [62.5, 227.0], [62.6, 227.0], [62.7, 228.0], [62.8, 229.0], [62.9, 230.0], [63.0, 230.0], [63.1, 232.0], [63.2, 233.0], [63.3, 233.0], [63.4, 234.0], [63.5, 235.0], [63.6, 235.0], [63.7, 236.0], [63.8, 237.0], [63.9, 237.0], [64.0, 238.0], [64.1, 238.0], [64.2, 239.0], [64.3, 239.0], [64.4, 240.0], [64.5, 241.0], [64.6, 241.0], [64.7, 242.0], [64.8, 243.0], [64.9, 244.0], [65.0, 245.0], [65.1, 246.0], [65.2, 246.0], [65.3, 247.0], [65.4, 248.0], [65.5, 249.0], [65.6, 250.0], [65.7, 250.0], [65.8, 251.0], [65.9, 252.0], [66.0, 253.0], [66.1, 254.0], [66.2, 255.0], [66.3, 256.0], [66.4, 256.0], [66.5, 257.0], [66.6, 258.0], [66.7, 259.0], [66.8, 260.0], [66.9, 261.0], [67.0, 261.0], [67.1, 262.0], [67.2, 263.0], [67.3, 265.0], [67.4, 266.0], [67.5, 267.0], [67.6, 268.0], [67.7, 268.0], [67.8, 269.0], [67.9, 270.0], [68.0, 271.0], [68.1, 272.0], [68.2, 273.0], [68.3, 273.0], [68.4, 274.0], [68.5, 275.0], [68.6, 275.0], [68.7, 276.0], [68.8, 276.0], [68.9, 278.0], [69.0, 279.0], [69.1, 280.0], [69.2, 281.0], [69.3, 282.0], [69.4, 282.0], [69.5, 283.0], [69.6, 284.0], [69.7, 285.0], [69.8, 286.0], [69.9, 286.0], [70.0, 288.0], [70.1, 288.0], [70.2, 289.0], [70.3, 290.0], [70.4, 291.0], [70.5, 292.0], [70.6, 292.0], [70.7, 293.0], [70.8, 294.0], [70.9, 295.0], [71.0, 297.0], [71.1, 298.0], [71.2, 298.0], [71.3, 299.0], [71.4, 300.0], [71.5, 301.0], [71.6, 302.0], [71.7, 303.0], [71.8, 304.0], [71.9, 305.0], [72.0, 306.0], [72.1, 308.0], [72.2, 308.0], [72.3, 309.0], [72.4, 310.0], [72.5, 311.0], [72.6, 311.0], [72.7, 313.0], [72.8, 314.0], [72.9, 315.0], [73.0, 316.0], [73.1, 318.0], [73.2, 319.0], [73.3, 320.0], [73.4, 320.0], [73.5, 322.0], [73.6, 322.0], [73.7, 323.0], [73.8, 323.0], [73.9, 324.0], [74.0, 326.0], [74.1, 327.0], [74.2, 328.0], [74.3, 328.0], [74.4, 330.0], [74.5, 330.0], [74.6, 331.0], [74.7, 332.0], [74.8, 333.0], [74.9, 334.0], [75.0, 335.0], [75.1, 337.0], [75.2, 337.0], [75.3, 339.0], [75.4, 340.0], [75.5, 341.0], [75.6, 343.0], [75.7, 343.0], [75.8, 344.0], [75.9, 345.0], [76.0, 346.0], [76.1, 349.0], [76.2, 349.0], [76.3, 350.0], [76.4, 353.0], [76.5, 354.0], [76.6, 355.0], [76.7, 358.0], [76.8, 358.0], [76.9, 359.0], [77.0, 360.0], [77.1, 360.0], [77.2, 361.0], [77.3, 362.0], [77.4, 363.0], [77.5, 365.0], [77.6, 366.0], [77.7, 367.0], [77.8, 368.0], [77.9, 369.0], [78.0, 371.0], [78.1, 372.0], [78.2, 373.0], [78.3, 374.0], [78.4, 374.0], [78.5, 375.0], [78.6, 376.0], [78.7, 376.0], [78.8, 378.0], [78.9, 380.0], [79.0, 381.0], [79.1, 384.0], [79.2, 385.0], [79.3, 387.0], [79.4, 389.0], [79.5, 390.0], [79.6, 390.0], [79.7, 392.0], [79.8, 392.0], [79.9, 394.0], [80.0, 396.0], [80.1, 398.0], [80.2, 398.0], [80.3, 400.0], [80.4, 401.0], [80.5, 403.0], [80.6, 404.0], [80.7, 405.0], [80.8, 406.0], [80.9, 408.0], [81.0, 409.0], [81.1, 411.0], [81.2, 413.0], [81.3, 415.0], [81.4, 417.0], [81.5, 418.0], [81.6, 420.0], [81.7, 421.0], [81.8, 423.0], [81.9, 423.0], [82.0, 426.0], [82.1, 427.0], [82.2, 431.0], [82.3, 432.0], [82.4, 434.0], [82.5, 440.0], [82.6, 441.0], [82.7, 444.0], [82.8, 448.0], [82.9, 450.0], [83.0, 452.0], [83.1, 454.0], [83.2, 456.0], [83.3, 457.0], [83.4, 462.0], [83.5, 464.0], [83.6, 466.0], [83.7, 468.0], [83.8, 469.0], [83.9, 470.0], [84.0, 472.0], [84.1, 474.0], [84.2, 475.0], [84.3, 476.0], [84.4, 477.0], [84.5, 478.0], [84.6, 479.0], [84.7, 480.0], [84.8, 483.0], [84.9, 483.0], [85.0, 485.0], [85.1, 486.0], [85.2, 487.0], [85.3, 489.0], [85.4, 491.0], [85.5, 493.0], [85.6, 494.0], [85.7, 496.0], [85.8, 497.0], [85.9, 499.0], [86.0, 500.0], [86.1, 500.0], [86.2, 501.0], [86.3, 501.0], [86.4, 503.0], [86.5, 504.0], [86.6, 506.0], [86.7, 507.0], [86.8, 508.0], [86.9, 509.0], [87.0, 511.0], [87.1, 513.0], [87.2, 514.0], [87.3, 515.0], [87.4, 516.0], [87.5, 518.0], [87.6, 519.0], [87.7, 520.0], [87.8, 521.0], [87.9, 522.0], [88.0, 523.0], [88.1, 525.0], [88.2, 527.0], [88.3, 528.0], [88.4, 530.0], [88.5, 532.0], [88.6, 534.0], [88.7, 536.0], [88.8, 537.0], [88.9, 538.0], [89.0, 540.0], [89.1, 542.0], [89.2, 544.0], [89.3, 545.0], [89.4, 547.0], [89.5, 549.0], [89.6, 552.0], [89.7, 553.0], [89.8, 555.0], [89.9, 557.0], [90.0, 559.0], [90.1, 560.0], [90.2, 562.0], [90.3, 563.0], [90.4, 566.0], [90.5, 568.0], [90.6, 570.0], [90.7, 572.0], [90.8, 574.0], [90.9, 574.0], [91.0, 576.0], [91.1, 578.0], [91.2, 579.0], [91.3, 580.0], [91.4, 581.0], [91.5, 584.0], [91.6, 586.0], [91.7, 589.0], [91.8, 591.0], [91.9, 592.0], [92.0, 595.0], [92.1, 596.0], [92.2, 598.0], [92.3, 600.0], [92.4, 602.0], [92.5, 604.0], [92.6, 605.0], [92.7, 607.0], [92.8, 610.0], [92.9, 611.0], [93.0, 612.0], [93.1, 614.0], [93.2, 616.0], [93.3, 621.0], [93.4, 622.0], [93.5, 624.0], [93.6, 626.0], [93.7, 629.0], [93.8, 632.0], [93.9, 634.0], [94.0, 636.0], [94.1, 638.0], [94.2, 640.0], [94.3, 642.0], [94.4, 644.0], [94.5, 646.0], [94.6, 647.0], [94.7, 649.0], [94.8, 652.0], [94.9, 656.0], [95.0, 659.0], [95.1, 662.0], [95.2, 663.0], [95.3, 671.0], [95.4, 674.0], [95.5, 676.0], [95.6, 678.0], [95.7, 682.0], [95.8, 685.0], [95.9, 691.0], [96.0, 694.0], [96.1, 699.0], [96.2, 703.0], [96.3, 705.0], [96.4, 710.0], [96.5, 713.0], [96.6, 718.0], [96.7, 722.0], [96.8, 723.0], [96.9, 730.0], [97.0, 734.0], [97.1, 740.0], [97.2, 742.0], [97.3, 746.0], [97.4, 754.0], [97.5, 760.0], [97.6, 766.0], [97.7, 774.0], [97.8, 783.0], [97.9, 793.0], [98.0, 805.0], [98.1, 815.0], [98.2, 826.0], [98.3, 836.0], [98.4, 848.0], [98.5, 865.0], [98.6, 883.0], [98.7, 904.0], [98.8, 925.0], [98.9, 950.0], [99.0, 970.0], [99.1, 994.0], [99.2, 1042.0], [99.3, 1106.0], [99.4, 1138.0], [99.5, 1226.0], [99.6, 1299.0], [99.7, 1381.0], [99.8, 1674.0], [99.9, 1989.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1697.0, "series": [{"data": [[0.0, 1697.0], [2200.0, 2.0], [600.0, 198.0], [2500.0, 1.0], [700.0, 96.0], [200.0, 661.0], [800.0, 36.0], [900.0, 25.0], [1000.0, 8.0], [1100.0, 10.0], [300.0, 465.0], [1200.0, 7.0], [1300.0, 5.0], [1400.0, 2.0], [90000.0, 1.0], [1500.0, 2.0], [100.0, 1344.0], [400.0, 297.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 1.0], [500.0, 327.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 90000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4472.0, "series": [{"data": [[0.0, 4472.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 706.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.926350245499181, "minX": 1.60225284E12, "maxY": 10.0, "series": [{"data": [[1.6022529E12, 10.0], [1.60225284E12, 9.99956709956708], [1.60225296E12, 9.926350245499181]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 119.0, "minX": 1.0, "maxY": 90045.0, "series": [{"data": [[8.0, 122.0], [4.0, 131.0], [2.0, 841.0], [1.0, 90045.0], [9.0, 426.5], [10.0, 237.46574020459357], [5.0, 645.0], [6.0, 371.0], [3.0, 364.0], [7.0, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991138508957821, 255.0184935465228]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4784.016666666666, "minX": 1.60225284E12, "maxY": 7615086.816666666, "series": [{"data": [[1.6022529E12, 7386565.016666667], [1.60225284E12, 7615086.816666666], [1.60225296E12, 1923879.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022529E12, 17320.633333333335], [1.60225284E12, 17671.033333333333], [1.60225296E12, 4784.016666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 236.57621145374497, "minX": 1.60225284E12, "maxY": 358.7905073649755, "series": [{"data": [[1.6022529E12, 236.57621145374497], [1.60225284E12, 245.6935064935066], [1.60225296E12, 358.7905073649755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 234.5872246696034, "minX": 1.60225284E12, "maxY": 357.6824877250408, "series": [{"data": [[1.6022529E12, 234.5872246696034], [1.60225284E12, 243.76277056277047], [1.60225296E12, 357.6824877250408]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006546644844517182, "minX": 1.60225284E12, "maxY": 0.07402597402597418, "series": [{"data": [[1.6022529E12, 0.006607929515418508], [1.60225284E12, 0.07402597402597418], [1.60225296E12, 0.006546644844517182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60225284E12, "maxY": 2571.0, "series": [{"data": [[1.6022529E12, 2241.0], [1.60225284E12, 2571.0], [1.60225296E12, 1575.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022529E12, 34.0], [1.60225284E12, 33.0], [1.60225296E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022529E12, 34.0], [1.60225284E12, 33.0], [1.60225296E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022529E12, 34.0], [1.60225284E12, 33.0], [1.60225296E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022529E12, 28.0], [1.60225284E12, 29.0], [1.60225296E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022529E12, 153.0], [1.60225284E12, 143.0], [1.60225296E12, 122.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225296E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 90045.0, "series": [{"data": [[3.0, 364.0], [4.0, 625.5], [17.0, 146.0], [18.0, 442.0], [20.0, 393.5], [21.0, 424.0], [22.0, 482.5], [23.0, 292.0], [24.0, 280.0], [25.0, 371.0], [26.0, 324.5], [27.0, 247.0], [28.0, 308.5], [29.0, 204.0], [30.0, 218.0], [31.0, 228.5], [32.0, 221.5], [33.0, 230.0], [35.0, 215.5], [34.0, 217.0], [36.0, 224.5], [37.0, 246.0], [39.0, 236.0], [38.0, 194.5], [40.0, 146.0], [41.0, 178.0], [42.0, 185.5], [43.0, 159.0], [45.0, 151.0], [44.0, 171.5], [47.0, 75.0], [46.0, 163.5], [48.0, 239.0], [49.0, 207.0], [50.0, 157.5], [52.0, 99.5], [53.0, 119.5], [55.0, 127.0], [54.0, 64.0], [56.0, 117.0], [60.0, 97.0], [63.0, 57.0], [67.0, 97.0], [66.0, 51.0], [68.0, 48.0], [72.0, 77.5], [75.0, 88.0], [74.0, 72.5], [82.0, 58.5], [80.0, 47.5], [83.0, 57.0], [92.0, 91.0], [104.0, 61.5], [107.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90045.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 90045.0, "series": [{"data": [[3.0, 364.0], [4.0, 623.5], [17.0, 146.0], [18.0, 434.0], [20.0, 391.0], [21.0, 415.0], [22.0, 480.0], [23.0, 292.0], [24.0, 278.5], [25.0, 365.5], [26.0, 324.0], [27.0, 247.0], [28.0, 303.0], [29.0, 204.0], [30.0, 217.0], [31.0, 228.5], [32.0, 221.5], [33.0, 229.0], [35.0, 214.5], [34.0, 216.0], [36.0, 223.5], [37.0, 245.5], [39.0, 236.0], [38.0, 194.0], [40.0, 146.0], [41.0, 178.0], [42.0, 185.5], [43.0, 159.0], [45.0, 150.5], [44.0, 171.0], [47.0, 72.0], [46.0, 162.5], [48.0, 238.0], [49.0, 207.0], [50.0, 157.5], [52.0, 99.5], [53.0, 118.5], [55.0, 122.0], [54.0, 64.0], [56.0, 116.5], [60.0, 97.0], [63.0, 57.0], [67.0, 96.0], [66.0, 51.0], [68.0, 48.0], [72.0, 77.5], [75.0, 87.0], [74.0, 72.5], [82.0, 58.5], [80.0, 47.5], [83.0, 57.0], [92.0, 90.5], [104.0, 61.5], [107.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 90045.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.016666666666667, "minX": 1.60225284E12, "maxY": 38.666666666666664, "series": [{"data": [[1.6022529E12, 37.833333333333336], [1.60225284E12, 38.666666666666664], [1.60225296E12, 10.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225284E12, "maxY": 38.5, "series": [{"data": [[1.6022529E12, 37.833333333333336], [1.60225284E12, 38.5], [1.60225296E12, 10.166666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60225296E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60225296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225284E12, "maxY": 38.5, "series": [{"data": [[1.6022529E12, 37.833333333333336], [1.60225284E12, 38.5], [1.60225296E12, 10.166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60225296E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60225284E12, "maxY": 38.5, "series": [{"data": [[1.6022529E12, 37.833333333333336], [1.60225284E12, 38.5], [1.60225296E12, 10.166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60225296E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60225296E12, "title": "Total Transactions Per Second"}},
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

