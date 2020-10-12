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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 2061.0, "series": [{"data": [[0.0, 27.0], [0.1, 33.0], [0.2, 34.0], [0.3, 36.0], [0.4, 36.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 39.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 44.0], [2.9, 44.0], [3.0, 44.0], [3.1, 44.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 46.0], [3.6, 46.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 51.0], [5.8, 52.0], [5.9, 52.0], [6.0, 52.0], [6.1, 52.0], [6.2, 53.0], [6.3, 54.0], [6.4, 54.0], [6.5, 54.0], [6.6, 54.0], [6.7, 55.0], [6.8, 56.0], [6.9, 56.0], [7.0, 56.0], [7.1, 57.0], [7.2, 57.0], [7.3, 58.0], [7.4, 58.0], [7.5, 59.0], [7.6, 59.0], [7.7, 60.0], [7.8, 60.0], [7.9, 60.0], [8.0, 61.0], [8.1, 61.0], [8.2, 62.0], [8.3, 62.0], [8.4, 63.0], [8.5, 63.0], [8.6, 63.0], [8.7, 64.0], [8.8, 64.0], [8.9, 65.0], [9.0, 65.0], [9.1, 66.0], [9.2, 66.0], [9.3, 66.0], [9.4, 67.0], [9.5, 67.0], [9.6, 68.0], [9.7, 68.0], [9.8, 69.0], [9.9, 69.0], [10.0, 70.0], [10.1, 71.0], [10.2, 71.0], [10.3, 71.0], [10.4, 72.0], [10.5, 72.0], [10.6, 73.0], [10.7, 73.0], [10.8, 73.0], [10.9, 74.0], [11.0, 74.0], [11.1, 74.0], [11.2, 75.0], [11.3, 75.0], [11.4, 75.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 77.0], [11.9, 77.0], [12.0, 77.0], [12.1, 78.0], [12.2, 78.0], [12.3, 78.0], [12.4, 79.0], [12.5, 79.0], [12.6, 79.0], [12.7, 79.0], [12.8, 80.0], [12.9, 80.0], [13.0, 80.0], [13.1, 80.0], [13.2, 81.0], [13.3, 81.0], [13.4, 82.0], [13.5, 82.0], [13.6, 82.0], [13.7, 83.0], [13.8, 83.0], [13.9, 83.0], [14.0, 84.0], [14.1, 84.0], [14.2, 84.0], [14.3, 85.0], [14.4, 85.0], [14.5, 85.0], [14.6, 86.0], [14.7, 86.0], [14.8, 86.0], [14.9, 86.0], [15.0, 87.0], [15.1, 87.0], [15.2, 88.0], [15.3, 88.0], [15.4, 88.0], [15.5, 89.0], [15.6, 89.0], [15.7, 89.0], [15.8, 90.0], [15.9, 90.0], [16.0, 90.0], [16.1, 90.0], [16.2, 91.0], [16.3, 91.0], [16.4, 91.0], [16.5, 91.0], [16.6, 92.0], [16.7, 92.0], [16.8, 92.0], [16.9, 92.0], [17.0, 93.0], [17.1, 93.0], [17.2, 93.0], [17.3, 93.0], [17.4, 94.0], [17.5, 94.0], [17.6, 94.0], [17.7, 94.0], [17.8, 95.0], [17.9, 95.0], [18.0, 95.0], [18.1, 96.0], [18.2, 96.0], [18.3, 96.0], [18.4, 97.0], [18.5, 97.0], [18.6, 98.0], [18.7, 98.0], [18.8, 98.0], [18.9, 98.0], [19.0, 99.0], [19.1, 99.0], [19.2, 99.0], [19.3, 99.0], [19.4, 100.0], [19.5, 100.0], [19.6, 100.0], [19.7, 101.0], [19.8, 101.0], [19.9, 102.0], [20.0, 102.0], [20.1, 103.0], [20.2, 103.0], [20.3, 104.0], [20.4, 104.0], [20.5, 105.0], [20.6, 105.0], [20.7, 106.0], [20.8, 106.0], [20.9, 106.0], [21.0, 107.0], [21.1, 107.0], [21.2, 108.0], [21.3, 108.0], [21.4, 109.0], [21.5, 109.0], [21.6, 110.0], [21.7, 110.0], [21.8, 111.0], [21.9, 111.0], [22.0, 112.0], [22.1, 112.0], [22.2, 113.0], [22.3, 113.0], [22.4, 114.0], [22.5, 114.0], [22.6, 115.0], [22.7, 115.0], [22.8, 115.0], [22.9, 116.0], [23.0, 116.0], [23.1, 116.0], [23.2, 117.0], [23.3, 117.0], [23.4, 118.0], [23.5, 118.0], [23.6, 119.0], [23.7, 119.0], [23.8, 120.0], [23.9, 121.0], [24.0, 121.0], [24.1, 121.0], [24.2, 122.0], [24.3, 122.0], [24.4, 123.0], [24.5, 123.0], [24.6, 124.0], [24.7, 125.0], [24.8, 125.0], [24.9, 126.0], [25.0, 126.0], [25.1, 127.0], [25.2, 127.0], [25.3, 128.0], [25.4, 128.0], [25.5, 129.0], [25.6, 130.0], [25.7, 131.0], [25.8, 131.0], [25.9, 131.0], [26.0, 132.0], [26.1, 132.0], [26.2, 133.0], [26.3, 133.0], [26.4, 134.0], [26.5, 134.0], [26.6, 135.0], [26.7, 135.0], [26.8, 135.0], [26.9, 136.0], [27.0, 136.0], [27.1, 137.0], [27.2, 137.0], [27.3, 137.0], [27.4, 138.0], [27.5, 138.0], [27.6, 138.0], [27.7, 139.0], [27.8, 139.0], [27.9, 139.0], [28.0, 139.0], [28.1, 139.0], [28.2, 140.0], [28.3, 140.0], [28.4, 141.0], [28.5, 141.0], [28.6, 142.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 143.0], [29.1, 143.0], [29.2, 143.0], [29.3, 143.0], [29.4, 144.0], [29.5, 144.0], [29.6, 144.0], [29.7, 144.0], [29.8, 145.0], [29.9, 145.0], [30.0, 145.0], [30.1, 146.0], [30.2, 146.0], [30.3, 147.0], [30.4, 147.0], [30.5, 148.0], [30.6, 148.0], [30.7, 148.0], [30.8, 149.0], [30.9, 149.0], [31.0, 150.0], [31.1, 150.0], [31.2, 151.0], [31.3, 151.0], [31.4, 151.0], [31.5, 152.0], [31.6, 152.0], [31.7, 152.0], [31.8, 152.0], [31.9, 153.0], [32.0, 154.0], [32.1, 154.0], [32.2, 154.0], [32.3, 155.0], [32.4, 155.0], [32.5, 156.0], [32.6, 156.0], [32.7, 157.0], [32.8, 157.0], [32.9, 157.0], [33.0, 158.0], [33.1, 158.0], [33.2, 158.0], [33.3, 158.0], [33.4, 159.0], [33.5, 159.0], [33.6, 160.0], [33.7, 160.0], [33.8, 160.0], [33.9, 161.0], [34.0, 161.0], [34.1, 162.0], [34.2, 163.0], [34.3, 163.0], [34.4, 164.0], [34.5, 164.0], [34.6, 164.0], [34.7, 165.0], [34.8, 166.0], [34.9, 166.0], [35.0, 167.0], [35.1, 167.0], [35.2, 167.0], [35.3, 168.0], [35.4, 168.0], [35.5, 168.0], [35.6, 169.0], [35.7, 170.0], [35.8, 170.0], [35.9, 171.0], [36.0, 171.0], [36.1, 172.0], [36.2, 173.0], [36.3, 173.0], [36.4, 174.0], [36.5, 175.0], [36.6, 176.0], [36.7, 176.0], [36.8, 176.0], [36.9, 178.0], [37.0, 178.0], [37.1, 179.0], [37.2, 179.0], [37.3, 180.0], [37.4, 181.0], [37.5, 181.0], [37.6, 182.0], [37.7, 182.0], [37.8, 183.0], [37.9, 183.0], [38.0, 184.0], [38.1, 184.0], [38.2, 185.0], [38.3, 186.0], [38.4, 186.0], [38.5, 187.0], [38.6, 187.0], [38.7, 188.0], [38.8, 188.0], [38.9, 189.0], [39.0, 189.0], [39.1, 190.0], [39.2, 191.0], [39.3, 191.0], [39.4, 191.0], [39.5, 193.0], [39.6, 193.0], [39.7, 193.0], [39.8, 194.0], [39.9, 195.0], [40.0, 196.0], [40.1, 197.0], [40.2, 197.0], [40.3, 198.0], [40.4, 198.0], [40.5, 198.0], [40.6, 200.0], [40.7, 200.0], [40.8, 200.0], [40.9, 201.0], [41.0, 201.0], [41.1, 203.0], [41.2, 204.0], [41.3, 204.0], [41.4, 205.0], [41.5, 205.0], [41.6, 206.0], [41.7, 207.0], [41.8, 207.0], [41.9, 208.0], [42.0, 209.0], [42.1, 209.0], [42.2, 210.0], [42.3, 210.0], [42.4, 211.0], [42.5, 212.0], [42.6, 213.0], [42.7, 214.0], [42.8, 215.0], [42.9, 216.0], [43.0, 216.0], [43.1, 217.0], [43.2, 218.0], [43.3, 218.0], [43.4, 219.0], [43.5, 220.0], [43.6, 221.0], [43.7, 222.0], [43.8, 222.0], [43.9, 223.0], [44.0, 224.0], [44.1, 224.0], [44.2, 226.0], [44.3, 226.0], [44.4, 227.0], [44.5, 228.0], [44.6, 228.0], [44.7, 230.0], [44.8, 230.0], [44.9, 231.0], [45.0, 232.0], [45.1, 232.0], [45.2, 233.0], [45.3, 234.0], [45.4, 234.0], [45.5, 235.0], [45.6, 235.0], [45.7, 236.0], [45.8, 237.0], [45.9, 238.0], [46.0, 239.0], [46.1, 239.0], [46.2, 240.0], [46.3, 241.0], [46.4, 242.0], [46.5, 243.0], [46.6, 244.0], [46.7, 244.0], [46.8, 245.0], [46.9, 246.0], [47.0, 247.0], [47.1, 248.0], [47.2, 249.0], [47.3, 250.0], [47.4, 251.0], [47.5, 251.0], [47.6, 253.0], [47.7, 253.0], [47.8, 255.0], [47.9, 256.0], [48.0, 258.0], [48.1, 259.0], [48.2, 260.0], [48.3, 260.0], [48.4, 261.0], [48.5, 262.0], [48.6, 262.0], [48.7, 263.0], [48.8, 264.0], [48.9, 265.0], [49.0, 266.0], [49.1, 267.0], [49.2, 268.0], [49.3, 269.0], [49.4, 270.0], [49.5, 271.0], [49.6, 272.0], [49.7, 273.0], [49.8, 275.0], [49.9, 275.0], [50.0, 276.0], [50.1, 277.0], [50.2, 279.0], [50.3, 279.0], [50.4, 280.0], [50.5, 280.0], [50.6, 281.0], [50.7, 281.0], [50.8, 282.0], [50.9, 283.0], [51.0, 284.0], [51.1, 285.0], [51.2, 286.0], [51.3, 287.0], [51.4, 288.0], [51.5, 288.0], [51.6, 290.0], [51.7, 291.0], [51.8, 292.0], [51.9, 292.0], [52.0, 293.0], [52.1, 294.0], [52.2, 294.0], [52.3, 296.0], [52.4, 297.0], [52.5, 298.0], [52.6, 298.0], [52.7, 299.0], [52.8, 300.0], [52.9, 301.0], [53.0, 302.0], [53.1, 303.0], [53.2, 304.0], [53.3, 305.0], [53.4, 305.0], [53.5, 306.0], [53.6, 307.0], [53.7, 309.0], [53.8, 310.0], [53.9, 311.0], [54.0, 312.0], [54.1, 313.0], [54.2, 314.0], [54.3, 315.0], [54.4, 316.0], [54.5, 316.0], [54.6, 317.0], [54.7, 318.0], [54.8, 320.0], [54.9, 322.0], [55.0, 323.0], [55.1, 323.0], [55.2, 324.0], [55.3, 325.0], [55.4, 325.0], [55.5, 326.0], [55.6, 327.0], [55.7, 329.0], [55.8, 330.0], [55.9, 331.0], [56.0, 332.0], [56.1, 334.0], [56.2, 335.0], [56.3, 335.0], [56.4, 337.0], [56.5, 338.0], [56.6, 339.0], [56.7, 340.0], [56.8, 342.0], [56.9, 342.0], [57.0, 343.0], [57.1, 344.0], [57.2, 347.0], [57.3, 347.0], [57.4, 348.0], [57.5, 349.0], [57.6, 351.0], [57.7, 353.0], [57.8, 354.0], [57.9, 355.0], [58.0, 356.0], [58.1, 357.0], [58.2, 358.0], [58.3, 359.0], [58.4, 361.0], [58.5, 363.0], [58.6, 363.0], [58.7, 364.0], [58.8, 365.0], [58.9, 366.0], [59.0, 368.0], [59.1, 368.0], [59.2, 370.0], [59.3, 371.0], [59.4, 372.0], [59.5, 375.0], [59.6, 376.0], [59.7, 378.0], [59.8, 378.0], [59.9, 379.0], [60.0, 380.0], [60.1, 381.0], [60.2, 383.0], [60.3, 383.0], [60.4, 384.0], [60.5, 385.0], [60.6, 387.0], [60.7, 388.0], [60.8, 389.0], [60.9, 390.0], [61.0, 391.0], [61.1, 393.0], [61.2, 394.0], [61.3, 396.0], [61.4, 396.0], [61.5, 398.0], [61.6, 398.0], [61.7, 400.0], [61.8, 401.0], [61.9, 402.0], [62.0, 403.0], [62.1, 404.0], [62.2, 405.0], [62.3, 407.0], [62.4, 408.0], [62.5, 409.0], [62.6, 410.0], [62.7, 411.0], [62.8, 411.0], [62.9, 412.0], [63.0, 413.0], [63.1, 414.0], [63.2, 415.0], [63.3, 415.0], [63.4, 418.0], [63.5, 418.0], [63.6, 419.0], [63.7, 420.0], [63.8, 421.0], [63.9, 422.0], [64.0, 422.0], [64.1, 423.0], [64.2, 425.0], [64.3, 426.0], [64.4, 426.0], [64.5, 428.0], [64.6, 428.0], [64.7, 429.0], [64.8, 431.0], [64.9, 432.0], [65.0, 432.0], [65.1, 433.0], [65.2, 434.0], [65.3, 437.0], [65.4, 438.0], [65.5, 439.0], [65.6, 440.0], [65.7, 441.0], [65.8, 443.0], [65.9, 444.0], [66.0, 444.0], [66.1, 445.0], [66.2, 446.0], [66.3, 448.0], [66.4, 450.0], [66.5, 451.0], [66.6, 452.0], [66.7, 452.0], [66.8, 453.0], [66.9, 454.0], [67.0, 455.0], [67.1, 456.0], [67.2, 457.0], [67.3, 458.0], [67.4, 460.0], [67.5, 461.0], [67.6, 462.0], [67.7, 463.0], [67.8, 463.0], [67.9, 465.0], [68.0, 466.0], [68.1, 467.0], [68.2, 467.0], [68.3, 468.0], [68.4, 469.0], [68.5, 470.0], [68.6, 472.0], [68.7, 472.0], [68.8, 473.0], [68.9, 474.0], [69.0, 476.0], [69.1, 476.0], [69.2, 477.0], [69.3, 479.0], [69.4, 480.0], [69.5, 480.0], [69.6, 481.0], [69.7, 483.0], [69.8, 484.0], [69.9, 485.0], [70.0, 485.0], [70.1, 487.0], [70.2, 489.0], [70.3, 490.0], [70.4, 491.0], [70.5, 492.0], [70.6, 493.0], [70.7, 494.0], [70.8, 495.0], [70.9, 496.0], [71.0, 496.0], [71.1, 498.0], [71.2, 499.0], [71.3, 500.0], [71.4, 501.0], [71.5, 502.0], [71.6, 503.0], [71.7, 503.0], [71.8, 504.0], [71.9, 504.0], [72.0, 505.0], [72.1, 506.0], [72.2, 507.0], [72.3, 508.0], [72.4, 509.0], [72.5, 510.0], [72.6, 512.0], [72.7, 513.0], [72.8, 514.0], [72.9, 515.0], [73.0, 516.0], [73.1, 517.0], [73.2, 518.0], [73.3, 519.0], [73.4, 520.0], [73.5, 521.0], [73.6, 521.0], [73.7, 523.0], [73.8, 524.0], [73.9, 525.0], [74.0, 525.0], [74.1, 527.0], [74.2, 527.0], [74.3, 528.0], [74.4, 529.0], [74.5, 530.0], [74.6, 530.0], [74.7, 532.0], [74.8, 533.0], [74.9, 533.0], [75.0, 534.0], [75.1, 535.0], [75.2, 535.0], [75.3, 537.0], [75.4, 539.0], [75.5, 540.0], [75.6, 541.0], [75.7, 542.0], [75.8, 543.0], [75.9, 544.0], [76.0, 545.0], [76.1, 546.0], [76.2, 547.0], [76.3, 548.0], [76.4, 549.0], [76.5, 550.0], [76.6, 550.0], [76.7, 551.0], [76.8, 552.0], [76.9, 553.0], [77.0, 555.0], [77.1, 556.0], [77.2, 557.0], [77.3, 558.0], [77.4, 558.0], [77.5, 559.0], [77.6, 560.0], [77.7, 561.0], [77.8, 562.0], [77.9, 563.0], [78.0, 564.0], [78.1, 565.0], [78.2, 566.0], [78.3, 569.0], [78.4, 570.0], [78.5, 571.0], [78.6, 572.0], [78.7, 573.0], [78.8, 574.0], [78.9, 576.0], [79.0, 576.0], [79.1, 578.0], [79.2, 578.0], [79.3, 580.0], [79.4, 581.0], [79.5, 582.0], [79.6, 583.0], [79.7, 583.0], [79.8, 584.0], [79.9, 585.0], [80.0, 587.0], [80.1, 587.0], [80.2, 588.0], [80.3, 589.0], [80.4, 589.0], [80.5, 590.0], [80.6, 591.0], [80.7, 593.0], [80.8, 594.0], [80.9, 595.0], [81.0, 596.0], [81.1, 598.0], [81.2, 599.0], [81.3, 600.0], [81.4, 601.0], [81.5, 602.0], [81.6, 604.0], [81.7, 607.0], [81.8, 607.0], [81.9, 608.0], [82.0, 611.0], [82.1, 612.0], [82.2, 615.0], [82.3, 615.0], [82.4, 616.0], [82.5, 617.0], [82.6, 619.0], [82.7, 620.0], [82.8, 621.0], [82.9, 623.0], [83.0, 624.0], [83.1, 625.0], [83.2, 627.0], [83.3, 628.0], [83.4, 629.0], [83.5, 630.0], [83.6, 631.0], [83.7, 633.0], [83.8, 634.0], [83.9, 635.0], [84.0, 637.0], [84.1, 639.0], [84.2, 640.0], [84.3, 642.0], [84.4, 643.0], [84.5, 644.0], [84.6, 645.0], [84.7, 647.0], [84.8, 648.0], [84.9, 650.0], [85.0, 651.0], [85.1, 653.0], [85.2, 654.0], [85.3, 655.0], [85.4, 655.0], [85.5, 658.0], [85.6, 659.0], [85.7, 661.0], [85.8, 662.0], [85.9, 664.0], [86.0, 666.0], [86.1, 667.0], [86.2, 668.0], [86.3, 669.0], [86.4, 672.0], [86.5, 674.0], [86.6, 675.0], [86.7, 676.0], [86.8, 678.0], [86.9, 680.0], [87.0, 680.0], [87.1, 682.0], [87.2, 683.0], [87.3, 684.0], [87.4, 685.0], [87.5, 687.0], [87.6, 688.0], [87.7, 689.0], [87.8, 691.0], [87.9, 693.0], [88.0, 694.0], [88.1, 695.0], [88.2, 697.0], [88.3, 698.0], [88.4, 699.0], [88.5, 700.0], [88.6, 700.0], [88.7, 702.0], [88.8, 702.0], [88.9, 706.0], [89.0, 708.0], [89.1, 710.0], [89.2, 714.0], [89.3, 715.0], [89.4, 717.0], [89.5, 720.0], [89.6, 724.0], [89.7, 726.0], [89.8, 729.0], [89.9, 730.0], [90.0, 733.0], [90.1, 737.0], [90.2, 739.0], [90.3, 742.0], [90.4, 745.0], [90.5, 749.0], [90.6, 750.0], [90.7, 751.0], [90.8, 754.0], [90.9, 756.0], [91.0, 758.0], [91.1, 762.0], [91.2, 764.0], [91.3, 767.0], [91.4, 771.0], [91.5, 774.0], [91.6, 778.0], [91.7, 782.0], [91.8, 784.0], [91.9, 788.0], [92.0, 791.0], [92.1, 792.0], [92.2, 794.0], [92.3, 801.0], [92.4, 803.0], [92.5, 808.0], [92.6, 809.0], [92.7, 810.0], [92.8, 816.0], [92.9, 820.0], [93.0, 827.0], [93.1, 829.0], [93.2, 833.0], [93.3, 835.0], [93.4, 838.0], [93.5, 840.0], [93.6, 847.0], [93.7, 849.0], [93.8, 855.0], [93.9, 857.0], [94.0, 862.0], [94.1, 868.0], [94.2, 872.0], [94.3, 878.0], [94.4, 882.0], [94.5, 884.0], [94.6, 891.0], [94.7, 893.0], [94.8, 896.0], [94.9, 906.0], [95.0, 909.0], [95.1, 917.0], [95.2, 920.0], [95.3, 925.0], [95.4, 929.0], [95.5, 932.0], [95.6, 934.0], [95.7, 938.0], [95.8, 956.0], [95.9, 962.0], [96.0, 965.0], [96.1, 967.0], [96.2, 977.0], [96.3, 988.0], [96.4, 994.0], [96.5, 1002.0], [96.6, 1006.0], [96.7, 1011.0], [96.8, 1018.0], [96.9, 1031.0], [97.0, 1036.0], [97.1, 1040.0], [97.2, 1044.0], [97.3, 1054.0], [97.4, 1067.0], [97.5, 1074.0], [97.6, 1080.0], [97.7, 1087.0], [97.8, 1095.0], [97.9, 1105.0], [98.0, 1115.0], [98.1, 1123.0], [98.2, 1140.0], [98.3, 1157.0], [98.4, 1172.0], [98.5, 1180.0], [98.6, 1203.0], [98.7, 1214.0], [98.8, 1253.0], [98.9, 1257.0], [99.0, 1288.0], [99.1, 1309.0], [99.2, 1339.0], [99.3, 1354.0], [99.4, 1363.0], [99.5, 1382.0], [99.6, 1434.0], [99.7, 1474.0], [99.8, 1550.0], [99.9, 1705.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1102.0, "series": [{"data": [[0.0, 1004.0], [600.0, 373.0], [700.0, 199.0], [800.0, 133.0], [200.0, 631.0], [900.0, 84.0], [1000.0, 72.0], [1100.0, 38.0], [1200.0, 26.0], [300.0, 465.0], [1300.0, 24.0], [1400.0, 10.0], [1500.0, 7.0], [100.0, 1102.0], [400.0, 494.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [500.0, 521.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3704.0, "series": [{"data": [[0.0, 3704.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1472.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 14.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.944237918215613, "minX": 1.60249404E12, "maxY": 10.0, "series": [{"data": [[1.6024941E12, 10.0], [1.60249422E12, 9.944237918215613], [1.60249404E12, 10.0], [1.60249416E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249422E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 208.0, "minX": 1.0, "maxY": 1012.0, "series": [{"data": [[8.0, 234.0], [4.0, 528.0], [2.0, 1005.0], [1.0, 1012.0], [9.0, 262.0], [10.0, 357.72881683072785], [5.0, 277.0], [6.0, 208.0], [3.0, 599.0], [7.0, 357.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 357.9720616570329]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6319.333333333333, "minX": 1.60249404E12, "maxY": 5822941.766666667, "series": [{"data": [[1.6024941E12, 5822941.766666667], [1.60249422E12, 2577502.9833333334], [1.60249404E12, 3173526.283333333], [1.60249416E12, 5337783.983333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024941E12, 12168.416666666666], [1.60249422E12, 6319.333333333333], [1.60249404E12, 8331.883333333333], [1.60249416E12, 12949.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249422E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 343.57671480144444, "minX": 1.60249404E12, "maxY": 381.9865900383139, "series": [{"data": [[1.6024941E12, 381.9865900383139], [1.60249422E12, 346.63320941759605], [1.60249404E12, 343.57671480144444], [1.60249416E12, 350.6541837331776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249422E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 342.2806859205779, "minX": 1.60249404E12, "maxY": 380.418901660281, "series": [{"data": [[1.6024941E12, 380.418901660281], [1.60249422E12, 345.5154894671621], [1.60249404E12, 342.2806859205779], [1.60249416E12, 349.40023405500324]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249422E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009362200117027531, "minX": 1.60249404E12, "maxY": 0.09115523465703963, "series": [{"data": [[1.6024941E12, 0.012771392081736905], [1.60249422E12, 0.011152416356877325], [1.60249404E12, 0.09115523465703963], [1.60249416E12, 0.009362200117027531]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249422E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60249404E12, "maxY": 2061.0, "series": [{"data": [[1.6024941E12, 2061.0], [1.60249422E12, 1952.0], [1.60249404E12, 1712.0], [1.60249416E12, 1916.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024941E12, 37.0], [1.60249422E12, 38.0], [1.60249404E12, 41.0], [1.60249416E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024941E12, 37.0], [1.60249422E12, 38.0], [1.60249404E12, 41.0], [1.60249416E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024941E12, 37.0], [1.60249422E12, 38.0], [1.60249404E12, 41.0], [1.60249416E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024941E12, 33.0], [1.60249422E12, 33.0], [1.60249404E12, 27.0], [1.60249416E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024941E12, 295.5], [1.60249422E12, 258.0], [1.60249404E12, 283.0], [1.60249416E12, 270.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249422E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 1005.0, "series": [{"data": [[33.0, 249.0], [32.0, 253.5], [35.0, 292.0], [34.0, 169.5], [36.0, 187.0], [39.0, 198.0], [40.0, 115.5], [41.0, 136.5], [43.0, 132.0], [44.0, 128.5], [45.0, 152.5], [48.0, 136.5], [3.0, 1005.0], [50.0, 88.0], [52.0, 157.0], [54.0, 149.5], [60.0, 116.5], [61.0, 98.0], [62.0, 159.5], [75.0, 75.0], [80.0, 92.0], [88.0, 88.0], [12.0, 721.5], [13.0, 629.0], [14.0, 626.0], [15.0, 493.0], [1.0, 855.0], [16.0, 569.5], [17.0, 531.0], [18.0, 533.0], [19.0, 513.0], [20.0, 446.5], [21.0, 425.0], [22.0, 454.5], [23.0, 402.0], [24.0, 411.0], [25.0, 400.0], [26.0, 383.0], [27.0, 369.5], [28.0, 239.5], [29.0, 315.5], [30.0, 328.5], [31.0, 327.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 995.0, "series": [{"data": [[33.0, 248.0], [32.0, 253.5], [35.0, 290.5], [34.0, 168.0], [36.0, 187.0], [39.0, 197.0], [40.0, 115.5], [41.0, 136.0], [43.0, 131.5], [44.0, 127.5], [45.0, 152.0], [48.0, 135.5], [3.0, 995.0], [50.0, 88.0], [52.0, 156.0], [54.0, 149.5], [60.0, 116.5], [61.0, 98.0], [62.0, 159.0], [75.0, 75.0], [80.0, 92.0], [88.0, 87.5], [12.0, 716.0], [13.0, 629.0], [14.0, 620.0], [15.0, 491.0], [1.0, 844.0], [16.0, 569.0], [17.0, 526.0], [18.0, 530.0], [19.0, 512.0], [20.0, 445.5], [21.0, 422.0], [22.0, 453.0], [23.0, 400.0], [24.0, 408.5], [25.0, 399.5], [26.0, 382.0], [27.0, 369.0], [28.0, 238.0], [29.0, 314.0], [30.0, 327.0], [31.0, 325.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.283333333333333, "minX": 1.60249404E12, "maxY": 28.483333333333334, "series": [{"data": [[1.6024941E12, 26.1], [1.60249422E12, 13.283333333333333], [1.60249404E12, 18.633333333333333], [1.60249416E12, 28.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249422E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.45, "minX": 1.60249404E12, "maxY": 28.483333333333334, "series": [{"data": [[1.6024941E12, 26.1], [1.60249422E12, 13.45], [1.60249404E12, 18.466666666666665], [1.60249416E12, 28.483333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249422E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.45, "minX": 1.60249404E12, "maxY": 28.483333333333334, "series": [{"data": [[1.6024941E12, 26.1], [1.60249422E12, 13.45], [1.60249404E12, 18.466666666666665], [1.60249416E12, 28.483333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249422E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.45, "minX": 1.60249404E12, "maxY": 28.483333333333334, "series": [{"data": [[1.6024941E12, 26.1], [1.60249422E12, 13.45], [1.60249404E12, 18.466666666666665], [1.60249416E12, 28.483333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249422E12, "title": "Total Transactions Per Second"}},
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

