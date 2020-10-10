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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 4333.0, "series": [{"data": [[0.0, 32.0], [0.1, 34.0], [0.2, 34.0], [0.3, 35.0], [0.4, 35.0], [0.5, 35.0], [0.6, 36.0], [0.7, 36.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 39.0], [1.9, 39.0], [2.0, 39.0], [2.1, 39.0], [2.2, 40.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 40.0], [2.7, 40.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 40.0], [3.2, 40.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 41.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 42.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 42.0], [5.5, 42.0], [5.6, 43.0], [5.7, 43.0], [5.8, 43.0], [5.9, 43.0], [6.0, 43.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 43.0], [6.9, 43.0], [7.0, 43.0], [7.1, 44.0], [7.2, 44.0], [7.3, 44.0], [7.4, 44.0], [7.5, 44.0], [7.6, 44.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 44.0], [8.6, 45.0], [8.7, 45.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 45.0], [10.1, 45.0], [10.2, 45.0], [10.3, 45.0], [10.4, 46.0], [10.5, 46.0], [10.6, 46.0], [10.7, 46.0], [10.8, 46.0], [10.9, 46.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 47.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 47.0], [12.6, 47.0], [12.7, 47.0], [12.8, 47.0], [12.9, 48.0], [13.0, 48.0], [13.1, 48.0], [13.2, 48.0], [13.3, 48.0], [13.4, 48.0], [13.5, 48.0], [13.6, 48.0], [13.7, 48.0], [13.8, 49.0], [13.9, 49.0], [14.0, 49.0], [14.1, 49.0], [14.2, 49.0], [14.3, 49.0], [14.4, 49.0], [14.5, 49.0], [14.6, 49.0], [14.7, 50.0], [14.8, 50.0], [14.9, 50.0], [15.0, 50.0], [15.1, 51.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 52.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 53.0], [16.2, 53.0], [16.3, 53.0], [16.4, 53.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 55.0], [16.9, 56.0], [17.0, 56.0], [17.1, 57.0], [17.2, 58.0], [17.3, 58.0], [17.4, 59.0], [17.5, 60.0], [17.6, 60.0], [17.7, 61.0], [17.8, 61.0], [17.9, 61.0], [18.0, 62.0], [18.1, 62.0], [18.2, 63.0], [18.3, 63.0], [18.4, 64.0], [18.5, 64.0], [18.6, 65.0], [18.7, 65.0], [18.8, 66.0], [18.9, 67.0], [19.0, 67.0], [19.1, 68.0], [19.2, 68.0], [19.3, 69.0], [19.4, 71.0], [19.5, 71.0], [19.6, 72.0], [19.7, 72.0], [19.8, 72.0], [19.9, 73.0], [20.0, 73.0], [20.1, 74.0], [20.2, 75.0], [20.3, 75.0], [20.4, 75.0], [20.5, 75.0], [20.6, 76.0], [20.7, 76.0], [20.8, 76.0], [20.9, 76.0], [21.0, 77.0], [21.1, 77.0], [21.2, 77.0], [21.3, 77.0], [21.4, 77.0], [21.5, 77.0], [21.6, 78.0], [21.7, 78.0], [21.8, 78.0], [21.9, 78.0], [22.0, 78.0], [22.1, 78.0], [22.2, 79.0], [22.3, 79.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 80.0], [22.9, 80.0], [23.0, 80.0], [23.1, 80.0], [23.2, 80.0], [23.3, 80.0], [23.4, 80.0], [23.5, 80.0], [23.6, 81.0], [23.7, 81.0], [23.8, 81.0], [23.9, 81.0], [24.0, 81.0], [24.1, 81.0], [24.2, 81.0], [24.3, 81.0], [24.4, 81.0], [24.5, 82.0], [24.6, 82.0], [24.7, 82.0], [24.8, 82.0], [24.9, 82.0], [25.0, 82.0], [25.1, 82.0], [25.2, 82.0], [25.3, 82.0], [25.4, 82.0], [25.5, 82.0], [25.6, 82.0], [25.7, 83.0], [25.8, 83.0], [25.9, 83.0], [26.0, 83.0], [26.1, 83.0], [26.2, 83.0], [26.3, 83.0], [26.4, 83.0], [26.5, 83.0], [26.6, 84.0], [26.7, 84.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 84.0], [27.4, 84.0], [27.5, 84.0], [27.6, 84.0], [27.7, 84.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 85.0], [28.6, 85.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 86.0], [29.4, 86.0], [29.5, 86.0], [29.6, 86.0], [29.7, 86.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 87.0], [30.4, 87.0], [30.5, 87.0], [30.6, 88.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 88.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 89.0], [31.7, 89.0], [31.8, 89.0], [31.9, 89.0], [32.0, 89.0], [32.1, 89.0], [32.2, 89.0], [32.3, 90.0], [32.4, 90.0], [32.5, 90.0], [32.6, 90.0], [32.7, 90.0], [32.8, 90.0], [32.9, 90.0], [33.0, 91.0], [33.1, 91.0], [33.2, 91.0], [33.3, 91.0], [33.4, 91.0], [33.5, 91.0], [33.6, 91.0], [33.7, 91.0], [33.8, 91.0], [33.9, 92.0], [34.0, 92.0], [34.1, 92.0], [34.2, 92.0], [34.3, 92.0], [34.4, 92.0], [34.5, 93.0], [34.6, 93.0], [34.7, 93.0], [34.8, 93.0], [34.9, 93.0], [35.0, 93.0], [35.1, 94.0], [35.2, 94.0], [35.3, 94.0], [35.4, 94.0], [35.5, 94.0], [35.6, 95.0], [35.7, 95.0], [35.8, 95.0], [35.9, 95.0], [36.0, 95.0], [36.1, 96.0], [36.2, 96.0], [36.3, 96.0], [36.4, 96.0], [36.5, 96.0], [36.6, 97.0], [36.7, 97.0], [36.8, 97.0], [36.9, 97.0], [37.0, 97.0], [37.1, 98.0], [37.2, 98.0], [37.3, 98.0], [37.4, 99.0], [37.5, 99.0], [37.6, 99.0], [37.7, 100.0], [37.8, 100.0], [37.9, 100.0], [38.0, 101.0], [38.1, 101.0], [38.2, 101.0], [38.3, 102.0], [38.4, 103.0], [38.5, 103.0], [38.6, 103.0], [38.7, 104.0], [38.8, 104.0], [38.9, 104.0], [39.0, 105.0], [39.1, 105.0], [39.2, 106.0], [39.3, 107.0], [39.4, 107.0], [39.5, 107.0], [39.6, 108.0], [39.7, 109.0], [39.8, 109.0], [39.9, 110.0], [40.0, 110.0], [40.1, 112.0], [40.2, 113.0], [40.3, 113.0], [40.4, 114.0], [40.5, 115.0], [40.6, 116.0], [40.7, 116.0], [40.8, 118.0], [40.9, 119.0], [41.0, 119.0], [41.1, 120.0], [41.2, 121.0], [41.3, 122.0], [41.4, 123.0], [41.5, 123.0], [41.6, 124.0], [41.7, 125.0], [41.8, 126.0], [41.9, 127.0], [42.0, 128.0], [42.1, 129.0], [42.2, 129.0], [42.3, 130.0], [42.4, 130.0], [42.5, 131.0], [42.6, 131.0], [42.7, 132.0], [42.8, 133.0], [42.9, 133.0], [43.0, 134.0], [43.1, 135.0], [43.2, 136.0], [43.3, 137.0], [43.4, 138.0], [43.5, 139.0], [43.6, 141.0], [43.7, 142.0], [43.8, 143.0], [43.9, 143.0], [44.0, 143.0], [44.1, 144.0], [44.2, 145.0], [44.3, 146.0], [44.4, 147.0], [44.5, 149.0], [44.6, 150.0], [44.7, 150.0], [44.8, 151.0], [44.9, 151.0], [45.0, 152.0], [45.1, 153.0], [45.2, 154.0], [45.3, 154.0], [45.4, 155.0], [45.5, 156.0], [45.6, 156.0], [45.7, 157.0], [45.8, 158.0], [45.9, 158.0], [46.0, 160.0], [46.1, 160.0], [46.2, 162.0], [46.3, 163.0], [46.4, 163.0], [46.5, 164.0], [46.6, 164.0], [46.7, 166.0], [46.8, 167.0], [46.9, 168.0], [47.0, 169.0], [47.1, 170.0], [47.2, 171.0], [47.3, 172.0], [47.4, 173.0], [47.5, 174.0], [47.6, 175.0], [47.7, 176.0], [47.8, 176.0], [47.9, 178.0], [48.0, 178.0], [48.1, 179.0], [48.2, 179.0], [48.3, 181.0], [48.4, 181.0], [48.5, 182.0], [48.6, 183.0], [48.7, 184.0], [48.8, 184.0], [48.9, 185.0], [49.0, 186.0], [49.1, 186.0], [49.2, 187.0], [49.3, 189.0], [49.4, 191.0], [49.5, 191.0], [49.6, 192.0], [49.7, 196.0], [49.8, 196.0], [49.9, 196.0], [50.0, 197.0], [50.1, 199.0], [50.2, 200.0], [50.3, 201.0], [50.4, 201.0], [50.5, 202.0], [50.6, 203.0], [50.7, 203.0], [50.8, 205.0], [50.9, 206.0], [51.0, 206.0], [51.1, 207.0], [51.2, 210.0], [51.3, 210.0], [51.4, 211.0], [51.5, 213.0], [51.6, 214.0], [51.7, 215.0], [51.8, 215.0], [51.9, 216.0], [52.0, 217.0], [52.1, 218.0], [52.2, 219.0], [52.3, 220.0], [52.4, 221.0], [52.5, 221.0], [52.6, 224.0], [52.7, 225.0], [52.8, 226.0], [52.9, 226.0], [53.0, 228.0], [53.1, 229.0], [53.2, 230.0], [53.3, 231.0], [53.4, 233.0], [53.5, 234.0], [53.6, 235.0], [53.7, 236.0], [53.8, 236.0], [53.9, 237.0], [54.0, 238.0], [54.1, 238.0], [54.2, 239.0], [54.3, 240.0], [54.4, 241.0], [54.5, 242.0], [54.6, 243.0], [54.7, 243.0], [54.8, 244.0], [54.9, 246.0], [55.0, 246.0], [55.1, 247.0], [55.2, 248.0], [55.3, 249.0], [55.4, 250.0], [55.5, 251.0], [55.6, 252.0], [55.7, 253.0], [55.8, 254.0], [55.9, 255.0], [56.0, 256.0], [56.1, 257.0], [56.2, 259.0], [56.3, 260.0], [56.4, 261.0], [56.5, 262.0], [56.6, 263.0], [56.7, 265.0], [56.8, 266.0], [56.9, 267.0], [57.0, 269.0], [57.1, 270.0], [57.2, 271.0], [57.3, 271.0], [57.4, 272.0], [57.5, 273.0], [57.6, 275.0], [57.7, 275.0], [57.8, 276.0], [57.9, 277.0], [58.0, 277.0], [58.1, 278.0], [58.2, 280.0], [58.3, 280.0], [58.4, 281.0], [58.5, 282.0], [58.6, 283.0], [58.7, 284.0], [58.8, 285.0], [58.9, 287.0], [59.0, 287.0], [59.1, 288.0], [59.2, 290.0], [59.3, 291.0], [59.4, 292.0], [59.5, 293.0], [59.6, 294.0], [59.7, 295.0], [59.8, 295.0], [59.9, 296.0], [60.0, 298.0], [60.1, 299.0], [60.2, 301.0], [60.3, 303.0], [60.4, 304.0], [60.5, 305.0], [60.6, 307.0], [60.7, 308.0], [60.8, 309.0], [60.9, 310.0], [61.0, 311.0], [61.1, 312.0], [61.2, 313.0], [61.3, 314.0], [61.4, 315.0], [61.5, 316.0], [61.6, 317.0], [61.7, 318.0], [61.8, 319.0], [61.9, 319.0], [62.0, 320.0], [62.1, 322.0], [62.2, 325.0], [62.3, 327.0], [62.4, 329.0], [62.5, 329.0], [62.6, 331.0], [62.7, 333.0], [62.8, 336.0], [62.9, 337.0], [63.0, 338.0], [63.1, 339.0], [63.2, 340.0], [63.3, 343.0], [63.4, 345.0], [63.5, 346.0], [63.6, 347.0], [63.7, 351.0], [63.8, 353.0], [63.9, 354.0], [64.0, 357.0], [64.1, 358.0], [64.2, 360.0], [64.3, 362.0], [64.4, 363.0], [64.5, 365.0], [64.6, 367.0], [64.7, 370.0], [64.8, 372.0], [64.9, 374.0], [65.0, 374.0], [65.1, 377.0], [65.2, 378.0], [65.3, 379.0], [65.4, 381.0], [65.5, 383.0], [65.6, 383.0], [65.7, 384.0], [65.8, 384.0], [65.9, 385.0], [66.0, 386.0], [66.1, 387.0], [66.2, 388.0], [66.3, 389.0], [66.4, 391.0], [66.5, 394.0], [66.6, 396.0], [66.7, 396.0], [66.8, 398.0], [66.9, 400.0], [67.0, 402.0], [67.1, 402.0], [67.2, 403.0], [67.3, 404.0], [67.4, 406.0], [67.5, 407.0], [67.6, 410.0], [67.7, 412.0], [67.8, 413.0], [67.9, 414.0], [68.0, 415.0], [68.1, 416.0], [68.2, 418.0], [68.3, 418.0], [68.4, 421.0], [68.5, 423.0], [68.6, 424.0], [68.7, 425.0], [68.8, 426.0], [68.9, 427.0], [69.0, 428.0], [69.1, 431.0], [69.2, 432.0], [69.3, 433.0], [69.4, 434.0], [69.5, 435.0], [69.6, 437.0], [69.7, 438.0], [69.8, 439.0], [69.9, 440.0], [70.0, 441.0], [70.1, 442.0], [70.2, 443.0], [70.3, 445.0], [70.4, 447.0], [70.5, 449.0], [70.6, 451.0], [70.7, 453.0], [70.8, 454.0], [70.9, 455.0], [71.0, 457.0], [71.1, 458.0], [71.2, 460.0], [71.3, 461.0], [71.4, 463.0], [71.5, 465.0], [71.6, 466.0], [71.7, 467.0], [71.8, 469.0], [71.9, 471.0], [72.0, 471.0], [72.1, 474.0], [72.2, 475.0], [72.3, 477.0], [72.4, 477.0], [72.5, 479.0], [72.6, 479.0], [72.7, 480.0], [72.8, 482.0], [72.9, 484.0], [73.0, 484.0], [73.1, 487.0], [73.2, 488.0], [73.3, 490.0], [73.4, 491.0], [73.5, 493.0], [73.6, 495.0], [73.7, 496.0], [73.8, 497.0], [73.9, 499.0], [74.0, 499.0], [74.1, 501.0], [74.2, 503.0], [74.3, 507.0], [74.4, 508.0], [74.5, 510.0], [74.6, 512.0], [74.7, 515.0], [74.8, 516.0], [74.9, 517.0], [75.0, 520.0], [75.1, 521.0], [75.2, 522.0], [75.3, 524.0], [75.4, 525.0], [75.5, 526.0], [75.6, 529.0], [75.7, 529.0], [75.8, 531.0], [75.9, 533.0], [76.0, 534.0], [76.1, 537.0], [76.2, 539.0], [76.3, 540.0], [76.4, 542.0], [76.5, 545.0], [76.6, 546.0], [76.7, 547.0], [76.8, 549.0], [76.9, 550.0], [77.0, 553.0], [77.1, 555.0], [77.2, 557.0], [77.3, 559.0], [77.4, 561.0], [77.5, 562.0], [77.6, 564.0], [77.7, 565.0], [77.8, 568.0], [77.9, 570.0], [78.0, 571.0], [78.1, 572.0], [78.2, 574.0], [78.3, 576.0], [78.4, 578.0], [78.5, 580.0], [78.6, 583.0], [78.7, 585.0], [78.8, 587.0], [78.9, 588.0], [79.0, 592.0], [79.1, 593.0], [79.2, 595.0], [79.3, 597.0], [79.4, 600.0], [79.5, 603.0], [79.6, 605.0], [79.7, 607.0], [79.8, 608.0], [79.9, 611.0], [80.0, 614.0], [80.1, 617.0], [80.2, 619.0], [80.3, 619.0], [80.4, 620.0], [80.5, 621.0], [80.6, 624.0], [80.7, 627.0], [80.8, 629.0], [80.9, 631.0], [81.0, 634.0], [81.1, 636.0], [81.2, 638.0], [81.3, 641.0], [81.4, 644.0], [81.5, 646.0], [81.6, 648.0], [81.7, 651.0], [81.8, 651.0], [81.9, 654.0], [82.0, 656.0], [82.1, 658.0], [82.2, 659.0], [82.3, 661.0], [82.4, 663.0], [82.5, 667.0], [82.6, 670.0], [82.7, 672.0], [82.8, 675.0], [82.9, 677.0], [83.0, 679.0], [83.1, 681.0], [83.2, 683.0], [83.3, 683.0], [83.4, 684.0], [83.5, 687.0], [83.6, 691.0], [83.7, 693.0], [83.8, 695.0], [83.9, 698.0], [84.0, 701.0], [84.1, 703.0], [84.2, 706.0], [84.3, 708.0], [84.4, 712.0], [84.5, 713.0], [84.6, 716.0], [84.7, 718.0], [84.8, 720.0], [84.9, 722.0], [85.0, 726.0], [85.1, 729.0], [85.2, 733.0], [85.3, 736.0], [85.4, 740.0], [85.5, 742.0], [85.6, 743.0], [85.7, 744.0], [85.8, 747.0], [85.9, 750.0], [86.0, 753.0], [86.1, 756.0], [86.2, 759.0], [86.3, 760.0], [86.4, 761.0], [86.5, 763.0], [86.6, 766.0], [86.7, 768.0], [86.8, 770.0], [86.9, 772.0], [87.0, 775.0], [87.1, 777.0], [87.2, 780.0], [87.3, 781.0], [87.4, 782.0], [87.5, 784.0], [87.6, 787.0], [87.7, 789.0], [87.8, 791.0], [87.9, 796.0], [88.0, 799.0], [88.1, 801.0], [88.2, 801.0], [88.3, 804.0], [88.4, 808.0], [88.5, 810.0], [88.6, 811.0], [88.7, 815.0], [88.8, 817.0], [88.9, 818.0], [89.0, 820.0], [89.1, 824.0], [89.2, 826.0], [89.3, 830.0], [89.4, 831.0], [89.5, 832.0], [89.6, 837.0], [89.7, 839.0], [89.8, 841.0], [89.9, 845.0], [90.0, 847.0], [90.1, 852.0], [90.2, 856.0], [90.3, 859.0], [90.4, 863.0], [90.5, 868.0], [90.6, 869.0], [90.7, 872.0], [90.8, 877.0], [90.9, 882.0], [91.0, 884.0], [91.1, 888.0], [91.2, 892.0], [91.3, 905.0], [91.4, 909.0], [91.5, 916.0], [91.6, 919.0], [91.7, 925.0], [91.8, 930.0], [91.9, 938.0], [92.0, 948.0], [92.1, 955.0], [92.2, 957.0], [92.3, 964.0], [92.4, 975.0], [92.5, 984.0], [92.6, 990.0], [92.7, 997.0], [92.8, 1002.0], [92.9, 1007.0], [93.0, 1014.0], [93.1, 1021.0], [93.2, 1026.0], [93.3, 1029.0], [93.4, 1036.0], [93.5, 1043.0], [93.6, 1046.0], [93.7, 1051.0], [93.8, 1061.0], [93.9, 1063.0], [94.0, 1069.0], [94.1, 1074.0], [94.2, 1082.0], [94.3, 1086.0], [94.4, 1095.0], [94.5, 1100.0], [94.6, 1106.0], [94.7, 1110.0], [94.8, 1114.0], [94.9, 1133.0], [95.0, 1144.0], [95.1, 1148.0], [95.2, 1153.0], [95.3, 1163.0], [95.4, 1170.0], [95.5, 1176.0], [95.6, 1184.0], [95.7, 1193.0], [95.8, 1207.0], [95.9, 1213.0], [96.0, 1226.0], [96.1, 1230.0], [96.2, 1236.0], [96.3, 1248.0], [96.4, 1265.0], [96.5, 1275.0], [96.6, 1288.0], [96.7, 1307.0], [96.8, 1315.0], [96.9, 1319.0], [97.0, 1331.0], [97.1, 1347.0], [97.2, 1356.0], [97.3, 1367.0], [97.4, 1389.0], [97.5, 1430.0], [97.6, 1451.0], [97.7, 1476.0], [97.8, 1485.0], [97.9, 1519.0], [98.0, 1534.0], [98.1, 1548.0], [98.2, 1574.0], [98.3, 1599.0], [98.4, 1639.0], [98.5, 1666.0], [98.6, 1712.0], [98.7, 1776.0], [98.8, 1833.0], [98.9, 1898.0], [99.0, 1933.0], [99.1, 2036.0], [99.2, 2088.0], [99.3, 2140.0], [99.4, 2182.0], [99.5, 2284.0], [99.6, 2361.0], [99.7, 2478.0], [99.8, 2562.0], [99.9, 2828.0], [100.0, 4333.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1986.0, "series": [{"data": [[0.0, 1986.0], [600.0, 243.0], [700.0, 217.0], [800.0, 169.0], [900.0, 78.0], [1000.0, 92.0], [1100.0, 65.0], [1200.0, 50.0], [1300.0, 38.0], [1400.0, 23.0], [1500.0, 25.0], [100.0, 657.0], [1600.0, 15.0], [1700.0, 6.0], [1800.0, 11.0], [1900.0, 8.0], [2000.0, 9.0], [2100.0, 10.0], [2200.0, 4.0], [2300.0, 6.0], [2400.0, 6.0], [2500.0, 5.0], [2600.0, 2.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 527.0], [3700.0, 1.0], [4300.0, 2.0], [300.0, 356.0], [400.0, 377.0], [500.0, 280.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 114.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3904.0, "series": [{"data": [[0.0, 3904.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1254.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 114.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.19642857142857, "minX": 1.60232676E12, "maxY": 10.0, "series": [{"data": [[1.60232676E12, 9.53448275862069], [1.60232694E12, 10.0], [1.60232688E12, 10.0], [1.602327E12, 9.19642857142857], [1.60232682E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602327E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.36341138397, "minX": 1.0, "maxY": 4333.0, "series": [{"data": [[4.0, 914.5], [8.0, 656.0], [2.0, 4333.0], [1.0, 4316.0], [9.0, 820.2], [5.0, 907.0], [10.0, 354.36341138397], [6.0, 1142.0], [3.0, 2359.0], [7.0, 1209.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.986342943854304, 357.8638088012138]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 470.8333333333333, "minX": 1.60232676E12, "maxY": 1654144.8833333333, "series": [{"data": [[1.60232676E12, 45263.316666666666], [1.60232694E12, 1654144.8833333333], [1.60232688E12, 1082593.35], [1.602327E12, 37592.1], [1.60232682E12, 1470048.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232676E12, 470.8333333333333], [1.60232694E12, 14383.883333333333], [1.60232688E12, 18258.866666666665], [1.602327E12, 490.53333333333336], [1.60232682E12, 11975.433333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602327E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 280.0098545283901, "minX": 1.60232676E12, "maxY": 1196.3035714285713, "series": [{"data": [[1.60232676E12, 360.8275862068966], [1.60232694E12, 365.12887537993925], [1.60232688E12, 280.0098545283901], [1.602327E12, 1196.3035714285713], [1.60232682E12, 435.16570188133113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602327E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 279.80244016893454, "minX": 1.60232676E12, "maxY": 1196.017857142857, "series": [{"data": [[1.60232676E12, 360.41379310344826], [1.60232694E12, 364.74042553191447], [1.60232688E12, 279.80244016893454], [1.602327E12, 1196.017857142857], [1.60232682E12, 434.67076700434126]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602327E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60232676E12, "maxY": 1.4482758620689655, "series": [{"data": [[1.60232676E12, 1.4482758620689655], [1.60232694E12, 0.007294832826747714], [1.60232688E12, 0.007038948850305017], [1.602327E12, 0.0], [1.60232682E12, 0.007959479015918954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602327E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60232676E12, "maxY": 4333.0, "series": [{"data": [[1.60232676E12, 1142.0], [1.60232694E12, 2828.0], [1.60232688E12, 2606.0], [1.602327E12, 4333.0], [1.60232682E12, 3003.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232676E12, 45.0], [1.60232694E12, 37.0], [1.60232688E12, 38.0], [1.602327E12, 47.0], [1.60232682E12, 35.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232676E12, 45.0], [1.60232694E12, 37.0], [1.60232688E12, 39.0], [1.602327E12, 47.0], [1.60232682E12, 35.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232676E12, 45.0], [1.60232694E12, 37.0], [1.60232688E12, 38.25399974584579], [1.602327E12, 47.0], [1.60232682E12, 35.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232676E12, 45.0], [1.60232694E12, 33.0], [1.60232688E12, 33.0], [1.602327E12, 47.0], [1.60232682E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232676E12, 272.5], [1.60232694E12, 241.0], [1.60232688E12, 123.0], [1.602327E12, 885.5], [1.60232682E12, 310.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602327E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 4316.0, "series": [{"data": [[4.0, 1871.5], [5.0, 1295.5], [6.0, 1106.0], [7.0, 1160.5], [8.0, 872.5], [9.0, 1010.0], [10.0, 722.5], [11.0, 811.0], [12.0, 853.5], [13.0, 687.0], [14.0, 623.5], [15.0, 611.0], [16.0, 538.0], [17.0, 525.0], [18.0, 429.0], [19.0, 502.0], [20.0, 447.0], [21.0, 114.0], [22.0, 381.0], [23.0, 325.0], [24.0, 407.0], [25.0, 314.5], [26.0, 316.0], [27.0, 275.0], [28.0, 107.0], [29.0, 266.0], [30.0, 263.0], [31.0, 292.0], [32.0, 231.5], [33.0, 98.0], [35.0, 91.0], [34.0, 221.0], [37.0, 80.0], [36.0, 246.0], [38.0, 183.0], [39.0, 186.0], [41.0, 123.5], [40.0, 92.0], [43.0, 140.5], [45.0, 94.5], [47.0, 97.0], [48.0, 92.5], [49.0, 147.5], [50.0, 173.5], [53.0, 155.0], [52.0, 92.0], [55.0, 138.0], [54.0, 125.5], [59.0, 85.0], [60.0, 112.5], [62.0, 85.5], [63.0, 86.0], [64.0, 153.0], [68.0, 112.0], [69.0, 88.0], [75.0, 78.0], [72.0, 85.0], [76.0, 97.5], [83.0, 84.0], [80.0, 82.5], [1.0, 4316.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.0, "minX": 1.0, "maxY": 4316.0, "series": [{"data": [[4.0, 1870.0], [5.0, 1294.5], [6.0, 1105.5], [7.0, 1157.0], [8.0, 871.0], [9.0, 1006.0], [10.0, 722.5], [11.0, 811.0], [12.0, 852.5], [13.0, 685.5], [14.0, 623.5], [15.0, 610.0], [16.0, 536.5], [17.0, 525.0], [18.0, 427.5], [19.0, 500.5], [20.0, 446.5], [21.0, 114.0], [22.0, 381.0], [23.0, 325.0], [24.0, 407.0], [25.0, 314.5], [26.0, 315.5], [27.0, 274.0], [28.0, 107.0], [29.0, 266.0], [30.0, 262.5], [31.0, 291.0], [32.0, 231.5], [33.0, 98.0], [35.0, 90.5], [34.0, 221.0], [37.0, 80.0], [36.0, 245.5], [38.0, 183.0], [39.0, 186.0], [41.0, 123.5], [40.0, 92.0], [43.0, 140.5], [45.0, 94.5], [47.0, 97.0], [48.0, 92.5], [49.0, 147.5], [50.0, 173.5], [53.0, 155.0], [52.0, 92.0], [55.0, 138.0], [54.0, 125.5], [59.0, 85.0], [60.0, 112.5], [62.0, 85.5], [63.0, 86.0], [64.0, 153.0], [68.0, 112.0], [69.0, 88.0], [75.0, 78.0], [72.0, 85.0], [76.0, 97.5], [83.0, 84.0], [80.0, 82.5], [1.0, 4316.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.60232676E12, "maxY": 35.516666666666666, "series": [{"data": [[1.60232676E12, 1.1333333333333333], [1.60232694E12, 27.416666666666668], [1.60232688E12, 35.516666666666666], [1.602327E12, 0.7666666666666667], [1.60232682E12, 23.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602327E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60232676E12, "maxY": 35.516666666666666, "series": [{"data": [[1.60232676E12, 0.9666666666666667], [1.60232694E12, 27.416666666666668], [1.60232688E12, 35.516666666666666], [1.602327E12, 0.9333333333333333], [1.60232682E12, 23.033333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602327E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60232676E12, "maxY": 35.516666666666666, "series": [{"data": [[1.60232676E12, 0.9666666666666667], [1.60232694E12, 27.416666666666668], [1.60232688E12, 35.516666666666666], [1.602327E12, 0.9333333333333333], [1.60232682E12, 23.033333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602327E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.60232676E12, "maxY": 35.516666666666666, "series": [{"data": [[1.60232676E12, 0.9666666666666667], [1.60232694E12, 27.416666666666668], [1.60232688E12, 35.516666666666666], [1.602327E12, 0.9333333333333333], [1.60232682E12, 23.033333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602327E12, "title": "Total Transactions Per Second"}},
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

