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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 2408.0, "series": [{"data": [[0.0, 30.0], [0.1, 31.0], [0.2, 32.0], [0.3, 32.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 33.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 35.0], [1.3, 35.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 38.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 39.0], [5.6, 39.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 40.0], [6.8, 40.0], [6.9, 40.0], [7.0, 40.0], [7.1, 40.0], [7.2, 40.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 41.0], [7.8, 41.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 41.0], [8.4, 41.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 42.0], [10.1, 42.0], [10.2, 43.0], [10.3, 43.0], [10.4, 43.0], [10.5, 43.0], [10.6, 43.0], [10.7, 43.0], [10.8, 43.0], [10.9, 43.0], [11.0, 43.0], [11.1, 43.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 44.0], [12.1, 44.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 46.0], [13.4, 46.0], [13.5, 46.0], [13.6, 46.0], [13.7, 46.0], [13.8, 46.0], [13.9, 46.0], [14.0, 46.0], [14.1, 47.0], [14.2, 47.0], [14.3, 47.0], [14.4, 47.0], [14.5, 47.0], [14.6, 47.0], [14.7, 47.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 49.0], [15.2, 49.0], [15.3, 49.0], [15.4, 49.0], [15.5, 49.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 54.0], [17.3, 54.0], [17.4, 55.0], [17.5, 55.0], [17.6, 55.0], [17.7, 56.0], [17.8, 56.0], [17.9, 56.0], [18.0, 57.0], [18.1, 57.0], [18.2, 58.0], [18.3, 58.0], [18.4, 58.0], [18.5, 59.0], [18.6, 59.0], [18.7, 60.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 60.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 61.0], [19.6, 61.0], [19.7, 61.0], [19.8, 62.0], [19.9, 62.0], [20.0, 62.0], [20.1, 62.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 63.0], [20.7, 63.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 64.0], [21.2, 64.0], [21.3, 65.0], [21.4, 65.0], [21.5, 65.0], [21.6, 65.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 67.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 70.0], [24.3, 70.0], [24.4, 70.0], [24.5, 70.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 71.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 73.0], [26.4, 73.0], [26.5, 73.0], [26.6, 73.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 74.0], [27.4, 74.0], [27.5, 74.0], [27.6, 74.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 75.0], [28.1, 75.0], [28.2, 75.0], [28.3, 75.0], [28.4, 75.0], [28.5, 75.0], [28.6, 75.0], [28.7, 75.0], [28.8, 75.0], [28.9, 75.0], [29.0, 76.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 77.0], [30.3, 77.0], [30.4, 77.0], [30.5, 77.0], [30.6, 77.0], [30.7, 77.0], [30.8, 77.0], [30.9, 77.0], [31.0, 77.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 79.0], [32.1, 79.0], [32.2, 79.0], [32.3, 79.0], [32.4, 79.0], [32.5, 79.0], [32.6, 79.0], [32.7, 80.0], [32.8, 80.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 80.0], [33.3, 80.0], [33.4, 81.0], [33.5, 81.0], [33.6, 81.0], [33.7, 81.0], [33.8, 81.0], [33.9, 81.0], [34.0, 81.0], [34.1, 81.0], [34.2, 82.0], [34.3, 82.0], [34.4, 82.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 83.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 83.0], [35.3, 83.0], [35.4, 83.0], [35.5, 84.0], [35.6, 84.0], [35.7, 84.0], [35.8, 84.0], [35.9, 84.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 86.0], [36.5, 86.0], [36.6, 86.0], [36.7, 86.0], [36.8, 86.0], [36.9, 86.0], [37.0, 87.0], [37.1, 87.0], [37.2, 87.0], [37.3, 87.0], [37.4, 87.0], [37.5, 87.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 89.0], [38.1, 89.0], [38.2, 89.0], [38.3, 89.0], [38.4, 89.0], [38.5, 90.0], [38.6, 90.0], [38.7, 90.0], [38.8, 90.0], [38.9, 91.0], [39.0, 91.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 93.0], [39.5, 93.0], [39.6, 93.0], [39.7, 93.0], [39.8, 94.0], [39.9, 94.0], [40.0, 94.0], [40.1, 95.0], [40.2, 95.0], [40.3, 95.0], [40.4, 96.0], [40.5, 97.0], [40.6, 98.0], [40.7, 99.0], [40.8, 99.0], [40.9, 100.0], [41.0, 101.0], [41.1, 102.0], [41.2, 102.0], [41.3, 103.0], [41.4, 104.0], [41.5, 104.0], [41.6, 105.0], [41.7, 105.0], [41.8, 106.0], [41.9, 107.0], [42.0, 108.0], [42.1, 108.0], [42.2, 109.0], [42.3, 109.0], [42.4, 110.0], [42.5, 111.0], [42.6, 112.0], [42.7, 112.0], [42.8, 112.0], [42.9, 112.0], [43.0, 113.0], [43.1, 113.0], [43.2, 114.0], [43.3, 114.0], [43.4, 115.0], [43.5, 116.0], [43.6, 117.0], [43.7, 117.0], [43.8, 118.0], [43.9, 118.0], [44.0, 119.0], [44.1, 119.0], [44.2, 119.0], [44.3, 120.0], [44.4, 120.0], [44.5, 121.0], [44.6, 122.0], [44.7, 122.0], [44.8, 123.0], [44.9, 123.0], [45.0, 124.0], [45.1, 124.0], [45.2, 125.0], [45.3, 126.0], [45.4, 126.0], [45.5, 127.0], [45.6, 128.0], [45.7, 128.0], [45.8, 129.0], [45.9, 129.0], [46.0, 130.0], [46.1, 131.0], [46.2, 132.0], [46.3, 133.0], [46.4, 133.0], [46.5, 134.0], [46.6, 135.0], [46.7, 136.0], [46.8, 137.0], [46.9, 137.0], [47.0, 138.0], [47.1, 139.0], [47.2, 140.0], [47.3, 141.0], [47.4, 142.0], [47.5, 144.0], [47.6, 144.0], [47.7, 145.0], [47.8, 147.0], [47.9, 148.0], [48.0, 148.0], [48.1, 149.0], [48.2, 150.0], [48.3, 152.0], [48.4, 153.0], [48.5, 154.0], [48.6, 156.0], [48.7, 157.0], [48.8, 158.0], [48.9, 159.0], [49.0, 160.0], [49.1, 161.0], [49.2, 161.0], [49.3, 162.0], [49.4, 163.0], [49.5, 164.0], [49.6, 165.0], [49.7, 166.0], [49.8, 167.0], [49.9, 168.0], [50.0, 169.0], [50.1, 170.0], [50.2, 171.0], [50.3, 172.0], [50.4, 174.0], [50.5, 175.0], [50.6, 176.0], [50.7, 177.0], [50.8, 178.0], [50.9, 180.0], [51.0, 181.0], [51.1, 182.0], [51.2, 183.0], [51.3, 183.0], [51.4, 184.0], [51.5, 185.0], [51.6, 186.0], [51.7, 186.0], [51.8, 187.0], [51.9, 188.0], [52.0, 189.0], [52.1, 189.0], [52.2, 190.0], [52.3, 192.0], [52.4, 192.0], [52.5, 193.0], [52.6, 193.0], [52.7, 194.0], [52.8, 195.0], [52.9, 196.0], [53.0, 197.0], [53.1, 198.0], [53.2, 199.0], [53.3, 200.0], [53.4, 201.0], [53.5, 202.0], [53.6, 203.0], [53.7, 204.0], [53.8, 204.0], [53.9, 206.0], [54.0, 207.0], [54.1, 207.0], [54.2, 209.0], [54.3, 210.0], [54.4, 211.0], [54.5, 212.0], [54.6, 213.0], [54.7, 214.0], [54.8, 214.0], [54.9, 215.0], [55.0, 216.0], [55.1, 217.0], [55.2, 217.0], [55.3, 218.0], [55.4, 220.0], [55.5, 220.0], [55.6, 221.0], [55.7, 221.0], [55.8, 222.0], [55.9, 223.0], [56.0, 224.0], [56.1, 225.0], [56.2, 226.0], [56.3, 227.0], [56.4, 227.0], [56.5, 229.0], [56.6, 229.0], [56.7, 231.0], [56.8, 232.0], [56.9, 232.0], [57.0, 233.0], [57.1, 235.0], [57.2, 236.0], [57.3, 238.0], [57.4, 238.0], [57.5, 239.0], [57.6, 240.0], [57.7, 241.0], [57.8, 242.0], [57.9, 243.0], [58.0, 243.0], [58.1, 245.0], [58.2, 246.0], [58.3, 247.0], [58.4, 248.0], [58.5, 250.0], [58.6, 251.0], [58.7, 252.0], [58.8, 252.0], [58.9, 253.0], [59.0, 253.0], [59.1, 254.0], [59.2, 256.0], [59.3, 256.0], [59.4, 257.0], [59.5, 259.0], [59.6, 259.0], [59.7, 260.0], [59.8, 261.0], [59.9, 262.0], [60.0, 264.0], [60.1, 266.0], [60.2, 267.0], [60.3, 267.0], [60.4, 269.0], [60.5, 270.0], [60.6, 270.0], [60.7, 271.0], [60.8, 272.0], [60.9, 273.0], [61.0, 273.0], [61.1, 274.0], [61.2, 275.0], [61.3, 276.0], [61.4, 277.0], [61.5, 278.0], [61.6, 279.0], [61.7, 280.0], [61.8, 281.0], [61.9, 283.0], [62.0, 284.0], [62.1, 285.0], [62.2, 286.0], [62.3, 287.0], [62.4, 289.0], [62.5, 289.0], [62.6, 291.0], [62.7, 292.0], [62.8, 293.0], [62.9, 294.0], [63.0, 295.0], [63.1, 297.0], [63.2, 298.0], [63.3, 299.0], [63.4, 301.0], [63.5, 302.0], [63.6, 302.0], [63.7, 302.0], [63.8, 303.0], [63.9, 306.0], [64.0, 307.0], [64.1, 308.0], [64.2, 310.0], [64.3, 311.0], [64.4, 312.0], [64.5, 313.0], [64.6, 315.0], [64.7, 316.0], [64.8, 317.0], [64.9, 318.0], [65.0, 318.0], [65.1, 320.0], [65.2, 321.0], [65.3, 321.0], [65.4, 323.0], [65.5, 324.0], [65.6, 326.0], [65.7, 326.0], [65.8, 328.0], [65.9, 329.0], [66.0, 331.0], [66.1, 332.0], [66.2, 333.0], [66.3, 335.0], [66.4, 337.0], [66.5, 337.0], [66.6, 339.0], [66.7, 340.0], [66.8, 341.0], [66.9, 343.0], [67.0, 344.0], [67.1, 346.0], [67.2, 348.0], [67.3, 350.0], [67.4, 351.0], [67.5, 353.0], [67.6, 354.0], [67.7, 355.0], [67.8, 356.0], [67.9, 358.0], [68.0, 359.0], [68.1, 362.0], [68.2, 364.0], [68.3, 366.0], [68.4, 367.0], [68.5, 368.0], [68.6, 370.0], [68.7, 371.0], [68.8, 373.0], [68.9, 375.0], [69.0, 377.0], [69.1, 378.0], [69.2, 380.0], [69.3, 381.0], [69.4, 382.0], [69.5, 383.0], [69.6, 384.0], [69.7, 385.0], [69.8, 386.0], [69.9, 387.0], [70.0, 389.0], [70.1, 390.0], [70.2, 392.0], [70.3, 393.0], [70.4, 394.0], [70.5, 396.0], [70.6, 396.0], [70.7, 398.0], [70.8, 399.0], [70.9, 400.0], [71.0, 400.0], [71.1, 401.0], [71.2, 402.0], [71.3, 404.0], [71.4, 405.0], [71.5, 407.0], [71.6, 409.0], [71.7, 410.0], [71.8, 411.0], [71.9, 412.0], [72.0, 414.0], [72.1, 416.0], [72.2, 417.0], [72.3, 418.0], [72.4, 418.0], [72.5, 420.0], [72.6, 421.0], [72.7, 422.0], [72.8, 423.0], [72.9, 424.0], [73.0, 425.0], [73.1, 426.0], [73.2, 427.0], [73.3, 427.0], [73.4, 429.0], [73.5, 430.0], [73.6, 431.0], [73.7, 433.0], [73.8, 435.0], [73.9, 436.0], [74.0, 437.0], [74.1, 439.0], [74.2, 441.0], [74.3, 442.0], [74.4, 443.0], [74.5, 446.0], [74.6, 448.0], [74.7, 449.0], [74.8, 450.0], [74.9, 451.0], [75.0, 452.0], [75.1, 453.0], [75.2, 455.0], [75.3, 456.0], [75.4, 458.0], [75.5, 458.0], [75.6, 460.0], [75.7, 461.0], [75.8, 463.0], [75.9, 465.0], [76.0, 466.0], [76.1, 467.0], [76.2, 469.0], [76.3, 471.0], [76.4, 473.0], [76.5, 474.0], [76.6, 475.0], [76.7, 477.0], [76.8, 479.0], [76.9, 480.0], [77.0, 481.0], [77.1, 483.0], [77.2, 486.0], [77.3, 486.0], [77.4, 488.0], [77.5, 490.0], [77.6, 491.0], [77.7, 493.0], [77.8, 495.0], [77.9, 496.0], [78.0, 499.0], [78.1, 500.0], [78.2, 502.0], [78.3, 503.0], [78.4, 504.0], [78.5, 507.0], [78.6, 508.0], [78.7, 512.0], [78.8, 513.0], [78.9, 514.0], [79.0, 517.0], [79.1, 519.0], [79.2, 521.0], [79.3, 523.0], [79.4, 525.0], [79.5, 529.0], [79.6, 530.0], [79.7, 532.0], [79.8, 533.0], [79.9, 534.0], [80.0, 536.0], [80.1, 538.0], [80.2, 539.0], [80.3, 541.0], [80.4, 542.0], [80.5, 543.0], [80.6, 545.0], [80.7, 547.0], [80.8, 549.0], [80.9, 550.0], [81.0, 552.0], [81.1, 553.0], [81.2, 554.0], [81.3, 556.0], [81.4, 559.0], [81.5, 561.0], [81.6, 563.0], [81.7, 564.0], [81.8, 567.0], [81.9, 568.0], [82.0, 570.0], [82.1, 572.0], [82.2, 574.0], [82.3, 576.0], [82.4, 577.0], [82.5, 579.0], [82.6, 581.0], [82.7, 582.0], [82.8, 584.0], [82.9, 587.0], [83.0, 589.0], [83.1, 590.0], [83.2, 591.0], [83.3, 594.0], [83.4, 595.0], [83.5, 597.0], [83.6, 600.0], [83.7, 601.0], [83.8, 602.0], [83.9, 604.0], [84.0, 606.0], [84.1, 609.0], [84.2, 611.0], [84.3, 614.0], [84.4, 617.0], [84.5, 618.0], [84.6, 620.0], [84.7, 623.0], [84.8, 624.0], [84.9, 629.0], [85.0, 631.0], [85.1, 636.0], [85.2, 638.0], [85.3, 639.0], [85.4, 642.0], [85.5, 644.0], [85.6, 645.0], [85.7, 648.0], [85.8, 650.0], [85.9, 651.0], [86.0, 653.0], [86.1, 654.0], [86.2, 657.0], [86.3, 657.0], [86.4, 658.0], [86.5, 660.0], [86.6, 661.0], [86.7, 664.0], [86.8, 667.0], [86.9, 668.0], [87.0, 669.0], [87.1, 671.0], [87.2, 674.0], [87.3, 676.0], [87.4, 677.0], [87.5, 681.0], [87.6, 683.0], [87.7, 685.0], [87.8, 690.0], [87.9, 692.0], [88.0, 694.0], [88.1, 698.0], [88.2, 700.0], [88.3, 702.0], [88.4, 705.0], [88.5, 708.0], [88.6, 713.0], [88.7, 716.0], [88.8, 718.0], [88.9, 720.0], [89.0, 722.0], [89.1, 726.0], [89.2, 728.0], [89.3, 730.0], [89.4, 733.0], [89.5, 735.0], [89.6, 738.0], [89.7, 741.0], [89.8, 744.0], [89.9, 746.0], [90.0, 749.0], [90.1, 757.0], [90.2, 763.0], [90.3, 766.0], [90.4, 770.0], [90.5, 772.0], [90.6, 778.0], [90.7, 781.0], [90.8, 787.0], [90.9, 790.0], [91.0, 792.0], [91.1, 796.0], [91.2, 803.0], [91.3, 806.0], [91.4, 811.0], [91.5, 816.0], [91.6, 820.0], [91.7, 825.0], [91.8, 827.0], [91.9, 830.0], [92.0, 833.0], [92.1, 839.0], [92.2, 841.0], [92.3, 844.0], [92.4, 850.0], [92.5, 854.0], [92.6, 858.0], [92.7, 861.0], [92.8, 865.0], [92.9, 868.0], [93.0, 879.0], [93.1, 887.0], [93.2, 894.0], [93.3, 896.0], [93.4, 901.0], [93.5, 906.0], [93.6, 913.0], [93.7, 918.0], [93.8, 931.0], [93.9, 935.0], [94.0, 938.0], [94.1, 941.0], [94.2, 945.0], [94.3, 952.0], [94.4, 961.0], [94.5, 971.0], [94.6, 975.0], [94.7, 982.0], [94.8, 988.0], [94.9, 994.0], [95.0, 998.0], [95.1, 1003.0], [95.2, 1007.0], [95.3, 1011.0], [95.4, 1017.0], [95.5, 1022.0], [95.6, 1027.0], [95.7, 1035.0], [95.8, 1042.0], [95.9, 1050.0], [96.0, 1062.0], [96.1, 1064.0], [96.2, 1073.0], [96.3, 1094.0], [96.4, 1102.0], [96.5, 1108.0], [96.6, 1115.0], [96.7, 1126.0], [96.8, 1136.0], [96.9, 1142.0], [97.0, 1157.0], [97.1, 1163.0], [97.2, 1173.0], [97.3, 1188.0], [97.4, 1201.0], [97.5, 1221.0], [97.6, 1227.0], [97.7, 1239.0], [97.8, 1263.0], [97.9, 1270.0], [98.0, 1296.0], [98.1, 1330.0], [98.2, 1341.0], [98.3, 1375.0], [98.4, 1430.0], [98.5, 1463.0], [98.6, 1490.0], [98.7, 1526.0], [98.8, 1538.0], [98.9, 1569.0], [99.0, 1581.0], [99.1, 1629.0], [99.2, 1677.0], [99.3, 1718.0], [99.4, 1807.0], [99.5, 1911.0], [99.6, 1996.0], [99.7, 2102.0], [99.8, 2119.0], [99.9, 2206.0], [100.0, 2408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2147.0, "series": [{"data": [[0.0, 2147.0], [600.0, 242.0], [700.0, 158.0], [800.0, 117.0], [900.0, 86.0], [1000.0, 71.0], [1100.0, 54.0], [1200.0, 33.0], [1300.0, 17.0], [1400.0, 15.0], [1500.0, 20.0], [100.0, 657.0], [1600.0, 13.0], [1700.0, 7.0], [1800.0, 5.0], [1900.0, 6.0], [2000.0, 5.0], [2100.0, 10.0], [2200.0, 3.0], [2300.0, 2.0], [2400.0, 1.0], [200.0, 527.0], [300.0, 398.0], [400.0, 378.0], [500.0, 290.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 72.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4112.0, "series": [{"data": [[0.0, 4112.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1078.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 72.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.923857868020304, "minX": 1.60237068E12, "maxY": 10.0, "series": [{"data": [[1.60237068E12, 9.96567164179105], [1.60237086E12, 9.923857868020304], [1.6023708E12, 10.0], [1.60237074E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237086E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.02516202821073, "minX": 1.0, "maxY": 2408.0, "series": [{"data": [[4.0, 740.0], [8.0, 1244.5], [2.0, 2408.0], [1.0, 2133.0], [9.0, 843.0], [5.0, 832.0], [10.0, 307.02516202821073], [6.0, 2165.0], [3.0, 2051.0], [7.0, 1109.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 309.886735081717]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5222.266666666666, "minX": 1.60237068E12, "maxY": 1670589.4833333334, "series": [{"data": [[1.60237068E12, 428236.0333333333], [1.60237086E12, 541528.3333333334], [1.6023708E12, 1610658.65], [1.60237074E12, 1670589.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60237068E12, 5732.25], [1.60237086E12, 5222.266666666666], [1.6023708E12, 18755.483333333334], [1.60237074E12, 15780.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237086E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 278.2243381328379, "minX": 1.60237068E12, "maxY": 386.26903553299485, "series": [{"data": [[1.60237068E12, 302.7597014925374], [1.60237086E12, 386.26903553299485], [1.6023708E12, 278.2243381328379], [1.60237074E12, 324.9312770562776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237086E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 277.8676265675799, "minX": 1.60237068E12, "maxY": 385.8781725888324, "series": [{"data": [[1.60237068E12, 302.3925373134325], [1.60237086E12, 385.8781725888324], [1.6023708E12, 277.8676265675799], [1.60237074E12, 324.47186147186125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237086E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005076142131979693, "minX": 1.60237068E12, "maxY": 0.15671641791044763, "series": [{"data": [[1.60237068E12, 0.15671641791044763], [1.60237086E12, 0.005076142131979693], [1.6023708E12, 0.008824895494658638], [1.60237074E12, 0.01623376623376623]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237086E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60237068E12, "maxY": 2408.0, "series": [{"data": [[1.60237068E12, 1430.0], [1.60237086E12, 2408.0], [1.6023708E12, 1923.0], [1.60237074E12, 2299.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60237068E12, 35.0], [1.60237086E12, 36.3279998588562], [1.6023708E12, 34.0], [1.60237074E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60237068E12, 35.0], [1.60237086E12, 36.86080005645752], [1.6023708E12, 34.0], [1.60237074E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60237068E12, 35.0], [1.60237086E12, 36.6239999294281], [1.6023708E12, 34.0], [1.60237074E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60237068E12, 32.0], [1.60237086E12, 35.0], [1.6023708E12, 30.0], [1.60237074E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60237068E12, 213.0], [1.60237086E12, 221.0], [1.6023708E12, 159.0], [1.60237074E12, 161.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237086E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 45.0, "minX": 3.0, "maxY": 2165.0, "series": [{"data": [[3.0, 2165.0], [5.0, 2085.0], [6.0, 1232.0], [8.0, 1000.0], [9.0, 688.0], [10.0, 902.5], [11.0, 850.5], [12.0, 809.0], [13.0, 676.0], [14.0, 497.0], [15.0, 640.0], [16.0, 579.5], [17.0, 538.0], [18.0, 410.5], [19.0, 491.0], [20.0, 505.5], [21.0, 442.0], [22.0, 493.5], [23.0, 309.5], [24.0, 398.0], [25.0, 381.0], [26.0, 410.0], [27.0, 257.0], [28.0, 259.0], [29.0, 112.0], [30.0, 280.5], [31.0, 271.0], [33.0, 226.0], [32.0, 230.0], [35.0, 211.0], [34.0, 84.5], [36.0, 238.0], [37.0, 93.0], [38.0, 79.5], [39.0, 218.0], [40.0, 69.5], [41.0, 76.0], [43.0, 131.0], [42.0, 233.5], [44.0, 154.5], [45.0, 92.5], [46.0, 103.0], [47.0, 120.0], [48.0, 113.5], [50.0, 115.0], [53.0, 134.0], [55.0, 130.0], [56.0, 157.5], [59.0, 83.5], [58.0, 137.5], [63.0, 69.0], [67.0, 71.0], [65.0, 73.0], [69.0, 117.5], [71.0, 128.0], [70.0, 78.0], [73.0, 77.0], [74.0, 45.0], [75.0, 84.0], [76.0, 82.5], [86.0, 82.5], [87.0, 112.0], [92.0, 85.0], [99.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 45.0, "minX": 3.0, "maxY": 2163.0, "series": [{"data": [[3.0, 2163.0], [5.0, 2085.0], [6.0, 1231.0], [8.0, 999.5], [9.0, 685.5], [10.0, 902.0], [11.0, 849.5], [12.0, 809.0], [13.0, 676.0], [14.0, 496.0], [15.0, 639.0], [16.0, 579.0], [17.0, 535.0], [18.0, 408.5], [19.0, 491.0], [20.0, 505.0], [21.0, 442.0], [22.0, 493.0], [23.0, 309.5], [24.0, 397.5], [25.0, 381.0], [26.0, 410.0], [27.0, 255.5], [28.0, 259.0], [29.0, 112.0], [30.0, 280.5], [31.0, 270.0], [33.0, 225.0], [32.0, 229.0], [35.0, 210.5], [34.0, 84.5], [36.0, 237.5], [37.0, 93.0], [38.0, 79.5], [39.0, 218.0], [40.0, 69.5], [41.0, 76.0], [43.0, 130.5], [42.0, 233.5], [44.0, 154.5], [45.0, 92.5], [46.0, 102.5], [47.0, 120.0], [48.0, 113.5], [50.0, 114.5], [53.0, 133.0], [55.0, 130.0], [56.0, 157.5], [59.0, 83.5], [58.0, 137.5], [63.0, 69.0], [67.0, 71.0], [65.0, 73.0], [69.0, 117.0], [71.0, 127.0], [70.0, 78.0], [73.0, 77.0], [74.0, 45.0], [75.0, 84.0], [76.0, 82.0], [86.0, 82.5], [87.0, 112.0], [92.0, 85.0], [99.0, 74.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.683333333333334, "minX": 1.60237068E12, "maxY": 35.88333333333333, "series": [{"data": [[1.60237068E12, 11.333333333333334], [1.60237086E12, 9.683333333333334], [1.6023708E12, 35.88333333333333], [1.60237074E12, 30.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237086E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60237068E12, "maxY": 35.88333333333333, "series": [{"data": [[1.60237068E12, 11.166666666666666], [1.60237086E12, 9.85], [1.6023708E12, 35.88333333333333], [1.60237074E12, 30.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237086E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60237068E12, "maxY": 35.88333333333333, "series": [{"data": [[1.60237068E12, 11.166666666666666], [1.60237086E12, 9.85], [1.6023708E12, 35.88333333333333], [1.60237074E12, 30.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237086E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.85, "minX": 1.60237068E12, "maxY": 35.88333333333333, "series": [{"data": [[1.60237068E12, 11.166666666666666], [1.60237086E12, 9.85], [1.6023708E12, 35.88333333333333], [1.60237074E12, 30.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237086E12, "title": "Total Transactions Per Second"}},
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

