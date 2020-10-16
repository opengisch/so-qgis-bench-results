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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 4015.0, "series": [{"data": [[0.0, 35.0], [0.1, 40.0], [0.2, 40.0], [0.3, 41.0], [0.4, 42.0], [0.5, 42.0], [0.6, 43.0], [0.7, 43.0], [0.8, 43.0], [0.9, 43.0], [1.0, 43.0], [1.1, 44.0], [1.2, 44.0], [1.3, 44.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 45.0], [1.8, 45.0], [1.9, 45.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 46.0], [2.4, 46.0], [2.5, 46.0], [2.6, 46.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 47.0], [3.2, 47.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 48.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 50.0], [7.2, 50.0], [7.3, 50.0], [7.4, 50.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 51.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 52.0], [10.5, 52.0], [10.6, 52.0], [10.7, 52.0], [10.8, 52.0], [10.9, 52.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 52.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 53.0], [12.4, 53.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 54.0], [13.6, 54.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 55.0], [15.0, 55.0], [15.1, 55.0], [15.2, 55.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 57.0], [17.3, 57.0], [17.4, 57.0], [17.5, 57.0], [17.6, 57.0], [17.7, 57.0], [17.8, 57.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 58.0], [18.6, 58.0], [18.7, 58.0], [18.8, 58.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 59.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 59.0], [20.2, 59.0], [20.3, 59.0], [20.4, 60.0], [20.5, 60.0], [20.6, 60.0], [20.7, 60.0], [20.8, 60.0], [20.9, 60.0], [21.0, 60.0], [21.1, 61.0], [21.2, 61.0], [21.3, 61.0], [21.4, 61.0], [21.5, 61.0], [21.6, 61.0], [21.7, 61.0], [21.8, 62.0], [21.9, 62.0], [22.0, 62.0], [22.1, 62.0], [22.2, 62.0], [22.3, 62.0], [22.4, 62.0], [22.5, 62.0], [22.6, 63.0], [22.7, 63.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 64.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 64.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 66.0], [24.4, 66.0], [24.5, 67.0], [24.6, 67.0], [24.7, 67.0], [24.8, 67.0], [24.9, 67.0], [25.0, 67.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 68.0], [25.5, 68.0], [25.6, 69.0], [25.7, 69.0], [25.8, 69.0], [25.9, 69.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 71.0], [26.4, 71.0], [26.5, 71.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 73.0], [27.0, 73.0], [27.1, 74.0], [27.2, 74.0], [27.3, 74.0], [27.4, 74.0], [27.5, 75.0], [27.6, 75.0], [27.7, 75.0], [27.8, 75.0], [27.9, 76.0], [28.0, 76.0], [28.1, 76.0], [28.2, 76.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 79.0], [29.1, 79.0], [29.2, 80.0], [29.3, 80.0], [29.4, 80.0], [29.5, 80.0], [29.6, 81.0], [29.7, 81.0], [29.8, 81.0], [29.9, 82.0], [30.0, 82.0], [30.1, 82.0], [30.2, 82.0], [30.3, 83.0], [30.4, 83.0], [30.5, 83.0], [30.6, 84.0], [30.7, 84.0], [30.8, 84.0], [30.9, 84.0], [31.0, 85.0], [31.1, 85.0], [31.2, 85.0], [31.3, 85.0], [31.4, 85.0], [31.5, 86.0], [31.6, 86.0], [31.7, 86.0], [31.8, 86.0], [31.9, 87.0], [32.0, 87.0], [32.1, 87.0], [32.2, 87.0], [32.3, 87.0], [32.4, 88.0], [32.5, 88.0], [32.6, 88.0], [32.7, 89.0], [32.8, 89.0], [32.9, 89.0], [33.0, 89.0], [33.1, 90.0], [33.2, 90.0], [33.3, 91.0], [33.4, 91.0], [33.5, 91.0], [33.6, 91.0], [33.7, 92.0], [33.8, 92.0], [33.9, 92.0], [34.0, 93.0], [34.1, 93.0], [34.2, 94.0], [34.3, 94.0], [34.4, 95.0], [34.5, 95.0], [34.6, 95.0], [34.7, 96.0], [34.8, 96.0], [34.9, 96.0], [35.0, 97.0], [35.1, 97.0], [35.2, 98.0], [35.3, 98.0], [35.4, 99.0], [35.5, 99.0], [35.6, 99.0], [35.7, 100.0], [35.8, 100.0], [35.9, 101.0], [36.0, 101.0], [36.1, 102.0], [36.2, 102.0], [36.3, 103.0], [36.4, 103.0], [36.5, 104.0], [36.6, 105.0], [36.7, 105.0], [36.8, 105.0], [36.9, 106.0], [37.0, 106.0], [37.1, 106.0], [37.2, 107.0], [37.3, 108.0], [37.4, 108.0], [37.5, 109.0], [37.6, 109.0], [37.7, 110.0], [37.8, 111.0], [37.9, 111.0], [38.0, 112.0], [38.1, 112.0], [38.2, 112.0], [38.3, 112.0], [38.4, 113.0], [38.5, 115.0], [38.6, 115.0], [38.7, 116.0], [38.8, 116.0], [38.9, 117.0], [39.0, 118.0], [39.1, 118.0], [39.2, 119.0], [39.3, 119.0], [39.4, 120.0], [39.5, 120.0], [39.6, 122.0], [39.7, 122.0], [39.8, 123.0], [39.9, 124.0], [40.0, 124.0], [40.1, 125.0], [40.2, 125.0], [40.3, 126.0], [40.4, 126.0], [40.5, 127.0], [40.6, 128.0], [40.7, 129.0], [40.8, 129.0], [40.9, 130.0], [41.0, 131.0], [41.1, 132.0], [41.2, 132.0], [41.3, 133.0], [41.4, 133.0], [41.5, 134.0], [41.6, 135.0], [41.7, 136.0], [41.8, 137.0], [41.9, 138.0], [42.0, 139.0], [42.1, 140.0], [42.2, 140.0], [42.3, 141.0], [42.4, 142.0], [42.5, 144.0], [42.6, 145.0], [42.7, 145.0], [42.8, 146.0], [42.9, 147.0], [43.0, 147.0], [43.1, 147.0], [43.2, 148.0], [43.3, 149.0], [43.4, 149.0], [43.5, 150.0], [43.6, 151.0], [43.7, 151.0], [43.8, 152.0], [43.9, 153.0], [44.0, 154.0], [44.1, 155.0], [44.2, 155.0], [44.3, 156.0], [44.4, 157.0], [44.5, 157.0], [44.6, 157.0], [44.7, 158.0], [44.8, 159.0], [44.9, 159.0], [45.0, 160.0], [45.1, 160.0], [45.2, 161.0], [45.3, 163.0], [45.4, 164.0], [45.5, 165.0], [45.6, 165.0], [45.7, 167.0], [45.8, 167.0], [45.9, 168.0], [46.0, 169.0], [46.1, 170.0], [46.2, 171.0], [46.3, 173.0], [46.4, 173.0], [46.5, 174.0], [46.6, 175.0], [46.7, 176.0], [46.8, 176.0], [46.9, 178.0], [47.0, 179.0], [47.1, 180.0], [47.2, 181.0], [47.3, 182.0], [47.4, 183.0], [47.5, 184.0], [47.6, 185.0], [47.7, 186.0], [47.8, 188.0], [47.9, 188.0], [48.0, 189.0], [48.1, 190.0], [48.2, 191.0], [48.3, 191.0], [48.4, 192.0], [48.5, 194.0], [48.6, 194.0], [48.7, 196.0], [48.8, 196.0], [48.9, 197.0], [49.0, 198.0], [49.1, 198.0], [49.2, 199.0], [49.3, 200.0], [49.4, 201.0], [49.5, 201.0], [49.6, 202.0], [49.7, 204.0], [49.8, 204.0], [49.9, 205.0], [50.0, 206.0], [50.1, 206.0], [50.2, 208.0], [50.3, 209.0], [50.4, 209.0], [50.5, 210.0], [50.6, 211.0], [50.7, 212.0], [50.8, 213.0], [50.9, 213.0], [51.0, 214.0], [51.1, 214.0], [51.2, 215.0], [51.3, 215.0], [51.4, 216.0], [51.5, 217.0], [51.6, 218.0], [51.7, 219.0], [51.8, 219.0], [51.9, 220.0], [52.0, 221.0], [52.1, 222.0], [52.2, 223.0], [52.3, 225.0], [52.4, 225.0], [52.5, 226.0], [52.6, 227.0], [52.7, 228.0], [52.8, 229.0], [52.9, 229.0], [53.0, 229.0], [53.1, 230.0], [53.2, 232.0], [53.3, 232.0], [53.4, 233.0], [53.5, 235.0], [53.6, 236.0], [53.7, 236.0], [53.8, 237.0], [53.9, 238.0], [54.0, 239.0], [54.1, 240.0], [54.2, 240.0], [54.3, 241.0], [54.4, 241.0], [54.5, 242.0], [54.6, 243.0], [54.7, 244.0], [54.8, 245.0], [54.9, 246.0], [55.0, 246.0], [55.1, 247.0], [55.2, 248.0], [55.3, 248.0], [55.4, 249.0], [55.5, 250.0], [55.6, 250.0], [55.7, 251.0], [55.8, 252.0], [55.9, 252.0], [56.0, 253.0], [56.1, 254.0], [56.2, 255.0], [56.3, 255.0], [56.4, 256.0], [56.5, 257.0], [56.6, 258.0], [56.7, 259.0], [56.8, 260.0], [56.9, 260.0], [57.0, 262.0], [57.1, 263.0], [57.2, 264.0], [57.3, 265.0], [57.4, 266.0], [57.5, 266.0], [57.6, 267.0], [57.7, 268.0], [57.8, 269.0], [57.9, 270.0], [58.0, 271.0], [58.1, 272.0], [58.2, 272.0], [58.3, 273.0], [58.4, 275.0], [58.5, 275.0], [58.6, 276.0], [58.7, 277.0], [58.8, 278.0], [58.9, 279.0], [59.0, 279.0], [59.1, 280.0], [59.2, 281.0], [59.3, 282.0], [59.4, 282.0], [59.5, 284.0], [59.6, 285.0], [59.7, 286.0], [59.8, 287.0], [59.9, 288.0], [60.0, 289.0], [60.1, 290.0], [60.2, 291.0], [60.3, 293.0], [60.4, 294.0], [60.5, 295.0], [60.6, 295.0], [60.7, 296.0], [60.8, 297.0], [60.9, 299.0], [61.0, 299.0], [61.1, 302.0], [61.2, 303.0], [61.3, 303.0], [61.4, 304.0], [61.5, 305.0], [61.6, 306.0], [61.7, 306.0], [61.8, 307.0], [61.9, 308.0], [62.0, 309.0], [62.1, 311.0], [62.2, 311.0], [62.3, 312.0], [62.4, 313.0], [62.5, 314.0], [62.6, 314.0], [62.7, 316.0], [62.8, 317.0], [62.9, 318.0], [63.0, 320.0], [63.1, 322.0], [63.2, 323.0], [63.3, 323.0], [63.4, 325.0], [63.5, 326.0], [63.6, 327.0], [63.7, 329.0], [63.8, 331.0], [63.9, 332.0], [64.0, 332.0], [64.1, 333.0], [64.2, 335.0], [64.3, 337.0], [64.4, 337.0], [64.5, 339.0], [64.6, 340.0], [64.7, 341.0], [64.8, 343.0], [64.9, 345.0], [65.0, 346.0], [65.1, 346.0], [65.2, 347.0], [65.3, 349.0], [65.4, 349.0], [65.5, 350.0], [65.6, 351.0], [65.7, 353.0], [65.8, 354.0], [65.9, 355.0], [66.0, 356.0], [66.1, 357.0], [66.2, 358.0], [66.3, 359.0], [66.4, 360.0], [66.5, 362.0], [66.6, 364.0], [66.7, 365.0], [66.8, 367.0], [66.9, 367.0], [67.0, 369.0], [67.1, 372.0], [67.2, 373.0], [67.3, 375.0], [67.4, 376.0], [67.5, 377.0], [67.6, 380.0], [67.7, 381.0], [67.8, 382.0], [67.9, 383.0], [68.0, 383.0], [68.1, 385.0], [68.2, 387.0], [68.3, 388.0], [68.4, 389.0], [68.5, 390.0], [68.6, 392.0], [68.7, 394.0], [68.8, 396.0], [68.9, 398.0], [69.0, 401.0], [69.1, 402.0], [69.2, 403.0], [69.3, 405.0], [69.4, 407.0], [69.5, 409.0], [69.6, 409.0], [69.7, 411.0], [69.8, 413.0], [69.9, 413.0], [70.0, 415.0], [70.1, 417.0], [70.2, 418.0], [70.3, 419.0], [70.4, 420.0], [70.5, 422.0], [70.6, 424.0], [70.7, 426.0], [70.8, 428.0], [70.9, 430.0], [71.0, 431.0], [71.1, 432.0], [71.2, 434.0], [71.3, 435.0], [71.4, 437.0], [71.5, 439.0], [71.6, 440.0], [71.7, 441.0], [71.8, 442.0], [71.9, 443.0], [72.0, 444.0], [72.1, 446.0], [72.2, 446.0], [72.3, 447.0], [72.4, 449.0], [72.5, 450.0], [72.6, 451.0], [72.7, 453.0], [72.8, 455.0], [72.9, 458.0], [73.0, 459.0], [73.1, 460.0], [73.2, 461.0], [73.3, 463.0], [73.4, 464.0], [73.5, 466.0], [73.6, 468.0], [73.7, 471.0], [73.8, 472.0], [73.9, 476.0], [74.0, 478.0], [74.1, 481.0], [74.2, 486.0], [74.3, 487.0], [74.4, 488.0], [74.5, 490.0], [74.6, 491.0], [74.7, 492.0], [74.8, 493.0], [74.9, 494.0], [75.0, 496.0], [75.1, 497.0], [75.2, 498.0], [75.3, 501.0], [75.4, 502.0], [75.5, 503.0], [75.6, 505.0], [75.7, 506.0], [75.8, 509.0], [75.9, 511.0], [76.0, 513.0], [76.1, 514.0], [76.2, 515.0], [76.3, 518.0], [76.4, 519.0], [76.5, 521.0], [76.6, 522.0], [76.7, 525.0], [76.8, 526.0], [76.9, 527.0], [77.0, 529.0], [77.1, 531.0], [77.2, 533.0], [77.3, 534.0], [77.4, 536.0], [77.5, 539.0], [77.6, 539.0], [77.7, 543.0], [77.8, 545.0], [77.9, 546.0], [78.0, 547.0], [78.1, 552.0], [78.2, 555.0], [78.3, 558.0], [78.4, 560.0], [78.5, 564.0], [78.6, 566.0], [78.7, 569.0], [78.8, 571.0], [78.9, 573.0], [79.0, 575.0], [79.1, 577.0], [79.2, 579.0], [79.3, 580.0], [79.4, 582.0], [79.5, 584.0], [79.6, 587.0], [79.7, 588.0], [79.8, 591.0], [79.9, 592.0], [80.0, 594.0], [80.1, 596.0], [80.2, 598.0], [80.3, 601.0], [80.4, 604.0], [80.5, 608.0], [80.6, 612.0], [80.7, 614.0], [80.8, 616.0], [80.9, 618.0], [81.0, 621.0], [81.1, 622.0], [81.2, 623.0], [81.3, 627.0], [81.4, 630.0], [81.5, 631.0], [81.6, 634.0], [81.7, 637.0], [81.8, 638.0], [81.9, 640.0], [82.0, 644.0], [82.1, 647.0], [82.2, 649.0], [82.3, 653.0], [82.4, 654.0], [82.5, 655.0], [82.6, 660.0], [82.7, 661.0], [82.8, 663.0], [82.9, 666.0], [83.0, 668.0], [83.1, 671.0], [83.2, 673.0], [83.3, 674.0], [83.4, 676.0], [83.5, 679.0], [83.6, 681.0], [83.7, 685.0], [83.8, 687.0], [83.9, 689.0], [84.0, 692.0], [84.1, 693.0], [84.2, 695.0], [84.3, 696.0], [84.4, 700.0], [84.5, 701.0], [84.6, 704.0], [84.7, 708.0], [84.8, 711.0], [84.9, 713.0], [85.0, 718.0], [85.1, 721.0], [85.2, 725.0], [85.3, 729.0], [85.4, 731.0], [85.5, 734.0], [85.6, 737.0], [85.7, 740.0], [85.8, 746.0], [85.9, 753.0], [86.0, 755.0], [86.1, 760.0], [86.2, 768.0], [86.3, 771.0], [86.4, 776.0], [86.5, 778.0], [86.6, 784.0], [86.7, 786.0], [86.8, 789.0], [86.9, 792.0], [87.0, 796.0], [87.1, 806.0], [87.2, 807.0], [87.3, 810.0], [87.4, 813.0], [87.5, 817.0], [87.6, 819.0], [87.7, 821.0], [87.8, 825.0], [87.9, 828.0], [88.0, 833.0], [88.1, 837.0], [88.2, 845.0], [88.3, 851.0], [88.4, 857.0], [88.5, 864.0], [88.6, 867.0], [88.7, 870.0], [88.8, 876.0], [88.9, 885.0], [89.0, 892.0], [89.1, 895.0], [89.2, 897.0], [89.3, 900.0], [89.4, 905.0], [89.5, 909.0], [89.6, 911.0], [89.7, 917.0], [89.8, 921.0], [89.9, 923.0], [90.0, 926.0], [90.1, 932.0], [90.2, 936.0], [90.3, 940.0], [90.4, 945.0], [90.5, 955.0], [90.6, 959.0], [90.7, 968.0], [90.8, 973.0], [90.9, 980.0], [91.0, 983.0], [91.1, 986.0], [91.2, 993.0], [91.3, 999.0], [91.4, 1012.0], [91.5, 1014.0], [91.6, 1018.0], [91.7, 1027.0], [91.8, 1035.0], [91.9, 1040.0], [92.0, 1049.0], [92.1, 1052.0], [92.2, 1053.0], [92.3, 1060.0], [92.4, 1066.0], [92.5, 1067.0], [92.6, 1072.0], [92.7, 1083.0], [92.8, 1090.0], [92.9, 1099.0], [93.0, 1105.0], [93.1, 1121.0], [93.2, 1130.0], [93.3, 1138.0], [93.4, 1145.0], [93.5, 1153.0], [93.6, 1162.0], [93.7, 1165.0], [93.8, 1169.0], [93.9, 1177.0], [94.0, 1189.0], [94.1, 1194.0], [94.2, 1207.0], [94.3, 1218.0], [94.4, 1225.0], [94.5, 1238.0], [94.6, 1253.0], [94.7, 1261.0], [94.8, 1268.0], [94.9, 1274.0], [95.0, 1287.0], [95.1, 1304.0], [95.2, 1311.0], [95.3, 1326.0], [95.4, 1331.0], [95.5, 1352.0], [95.6, 1367.0], [95.7, 1377.0], [95.8, 1389.0], [95.9, 1401.0], [96.0, 1409.0], [96.1, 1422.0], [96.2, 1449.0], [96.3, 1467.0], [96.4, 1481.0], [96.5, 1499.0], [96.6, 1520.0], [96.7, 1532.0], [96.8, 1549.0], [96.9, 1560.0], [97.0, 1585.0], [97.1, 1609.0], [97.2, 1617.0], [97.3, 1631.0], [97.4, 1683.0], [97.5, 1705.0], [97.6, 1729.0], [97.7, 1749.0], [97.8, 1815.0], [97.9, 1839.0], [98.0, 1853.0], [98.1, 1891.0], [98.2, 1909.0], [98.3, 1926.0], [98.4, 1979.0], [98.5, 2039.0], [98.6, 2109.0], [98.7, 2137.0], [98.8, 2223.0], [98.9, 2268.0], [99.0, 2358.0], [99.1, 2435.0], [99.2, 2472.0], [99.3, 2548.0], [99.4, 2586.0], [99.5, 2718.0], [99.6, 2798.0], [99.7, 2903.0], [99.8, 3118.0], [99.9, 3463.0], [100.0, 4015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1876.0, "series": [{"data": [[0.0, 1876.0], [600.0, 215.0], [700.0, 140.0], [800.0, 119.0], [900.0, 107.0], [1000.0, 84.0], [1100.0, 66.0], [1200.0, 48.0], [1300.0, 42.0], [1400.0, 33.0], [1500.0, 28.0], [100.0, 713.0], [1600.0, 24.0], [1700.0, 16.0], [1800.0, 18.0], [1900.0, 15.0], [2000.0, 9.0], [2100.0, 8.0], [2200.0, 10.0], [2300.0, 8.0], [2400.0, 6.0], [2500.0, 11.0], [2600.0, 4.0], [2700.0, 6.0], [2800.0, 5.0], [2900.0, 4.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 622.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [300.0, 417.0], [400.0, 333.0], [500.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 182.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3962.0, "series": [{"data": [[0.0, 3962.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1118.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 182.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.966458658346333, "minX": 1.6028451E12, "maxY": 10.0, "series": [{"data": [[1.60284516E12, 10.0], [1.60284528E12, 9.966458658346333], [1.6028451E12, 9.982113821138206], [1.60284522E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284528E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 3525.0, "series": [{"data": [[4.0, 167.0], [8.0, 1172.0], [2.0, 2449.0], [1.0, 2273.0], [9.0, 891.5], [10.0, 371.18742857142973], [5.0, 3525.0], [6.0, 51.0], [3.0, 2352.0], [7.0, 3064.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989737742303348, 374.7928544279745]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5392.15, "minX": 1.6028451E12, "maxY": 1430236.4333333333, "series": [{"data": [[1.60284516E12, 1400147.3666666667], [1.60284528E12, 1430236.4333333333], [1.6028451E12, 376744.06666666665], [1.60284522E12, 1032408.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60284516E12, 12708.583333333334], [1.60284528E12, 11588.983333333334], [1.6028451E12, 5392.15], [1.60284522E12, 17029.033333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284528E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 305.13414634146415, "minX": 1.6028451E12, "maxY": 429.26628489620657, "series": [{"data": [[1.60284516E12, 429.26628489620657], [1.60284528E12, 420.7293291731673], [1.6028451E12, 378.2048780487807], [1.60284522E12, 305.13414634146415]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284528E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 302.7906504065039, "minX": 1.6028451E12, "maxY": 423.3335719398705, "series": [{"data": [[1.60284516E12, 423.3335719398705], [1.60284528E12, 414.66380655226243], [1.6028451E12, 376.32520325203245], [1.60284522E12, 302.7906504065039]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284528E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5678627145085806, "minX": 1.6028451E12, "maxY": 1.0780487804878065, "series": [{"data": [[1.60284516E12, 0.7387258410880465], [1.60284528E12, 0.5678627145085806], [1.6028451E12, 1.0780487804878065], [1.60284522E12, 0.5853658536585368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284528E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.6028451E12, "maxY": 4015.0, "series": [{"data": [[1.60284516E12, 3753.0], [1.60284528E12, 4015.0], [1.6028451E12, 2903.0], [1.60284522E12, 2938.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60284516E12, 43.0], [1.60284528E12, 42.0], [1.6028451E12, 45.0], [1.60284522E12, 44.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60284516E12, 43.0], [1.60284528E12, 42.701700122356414], [1.6028451E12, 45.098400058746336], [1.60284522E12, 44.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60284516E12, 43.0], [1.60284528E12, 42.18849984705448], [1.6028451E12, 45.0], [1.60284522E12, 44.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60284516E12, 39.0], [1.60284528E12, 35.0], [1.6028451E12, 42.0], [1.60284522E12, 37.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60284516E12, 230.0], [1.60284528E12, 241.0], [1.6028451E12, 263.0], [1.60284522E12, 157.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284528E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 63.0, "minX": 1.0, "maxY": 2352.0, "series": [{"data": [[2.0, 1053.5], [3.0, 1562.0], [5.0, 1579.0], [6.0, 1164.5], [7.0, 1239.0], [8.0, 690.5], [9.0, 553.0], [10.0, 732.5], [11.0, 550.0], [12.0, 616.5], [13.0, 791.5], [14.0, 603.5], [15.0, 518.0], [16.0, 453.0], [17.0, 498.0], [18.0, 434.0], [19.0, 407.0], [20.0, 303.5], [21.0, 401.5], [22.0, 388.0], [23.0, 347.0], [24.0, 216.0], [25.0, 372.5], [26.0, 247.5], [27.0, 105.5], [28.0, 264.5], [29.0, 78.0], [30.0, 250.0], [33.0, 182.5], [32.0, 217.0], [35.0, 126.5], [34.0, 211.5], [36.0, 198.5], [37.0, 170.0], [38.0, 204.0], [41.0, 91.0], [40.0, 219.0], [42.0, 204.5], [43.0, 87.0], [45.0, 134.0], [44.0, 78.5], [47.0, 137.0], [49.0, 125.0], [50.0, 95.5], [51.0, 81.0], [55.0, 63.0], [56.0, 85.5], [57.0, 111.0], [58.0, 76.5], [59.0, 152.0], [60.0, 109.0], [61.0, 125.0], [62.0, 67.5], [64.0, 75.5], [65.0, 123.0], [66.0, 85.0], [69.0, 138.0], [71.0, 77.0], [72.0, 91.0], [82.0, 71.0], [1.0, 2352.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 63.0, "minX": 1.0, "maxY": 2352.0, "series": [{"data": [[2.0, 1031.0], [3.0, 1520.0], [5.0, 1577.0], [6.0, 1164.0], [7.0, 1238.0], [8.0, 690.0], [9.0, 553.0], [10.0, 722.0], [11.0, 526.5], [12.0, 605.0], [13.0, 790.0], [14.0, 603.0], [15.0, 515.0], [16.0, 452.5], [17.0, 498.0], [18.0, 424.5], [19.0, 406.0], [20.0, 303.0], [21.0, 387.0], [22.0, 387.0], [23.0, 346.5], [24.0, 216.0], [25.0, 372.0], [26.0, 246.0], [27.0, 105.5], [28.0, 262.5], [29.0, 78.0], [30.0, 250.0], [33.0, 182.5], [32.0, 217.0], [35.0, 126.0], [34.0, 211.0], [36.0, 198.5], [37.0, 170.0], [38.0, 203.5], [41.0, 91.0], [40.0, 219.0], [42.0, 204.5], [43.0, 86.0], [45.0, 134.0], [44.0, 78.5], [47.0, 136.5], [49.0, 125.0], [50.0, 95.5], [51.0, 81.0], [55.0, 63.0], [56.0, 85.0], [57.0, 111.0], [58.0, 76.0], [59.0, 152.0], [60.0, 108.5], [61.0, 125.0], [62.0, 67.5], [64.0, 75.5], [65.0, 123.0], [66.0, 85.0], [69.0, 137.0], [71.0, 76.5], [72.0, 90.5], [82.0, 71.0], [1.0, 2352.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.416666666666666, "minX": 1.6028451E12, "maxY": 32.8, "series": [{"data": [[1.60284516E12, 23.283333333333335], [1.60284528E12, 21.2], [1.6028451E12, 10.416666666666666], [1.60284522E12, 32.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284528E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.25, "minX": 1.6028451E12, "maxY": 32.8, "series": [{"data": [[1.60284516E12, 23.283333333333335], [1.60284528E12, 21.366666666666667], [1.6028451E12, 10.25], [1.60284522E12, 32.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284528E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.25, "minX": 1.6028451E12, "maxY": 32.8, "series": [{"data": [[1.60284516E12, 23.283333333333335], [1.60284528E12, 21.366666666666667], [1.6028451E12, 10.25], [1.60284522E12, 32.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284528E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.25, "minX": 1.6028451E12, "maxY": 32.8, "series": [{"data": [[1.60284516E12, 23.283333333333335], [1.60284528E12, 21.366666666666667], [1.6028451E12, 10.25], [1.60284522E12, 32.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284528E12, "title": "Total Transactions Per Second"}},
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

