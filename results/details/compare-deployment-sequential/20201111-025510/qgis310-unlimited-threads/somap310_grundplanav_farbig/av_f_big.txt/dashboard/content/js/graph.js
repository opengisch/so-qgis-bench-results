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
        data: {"result": {"minY": 191.0, "minX": 0.0, "maxY": 3011.0, "series": [{"data": [[0.0, 191.0], [0.1, 191.0], [0.2, 192.0], [0.3, 192.0], [0.4, 192.0], [0.5, 193.0], [0.6, 194.0], [0.7, 197.0], [0.8, 197.0], [0.9, 197.0], [1.0, 197.0], [1.1, 198.0], [1.2, 198.0], [1.3, 198.0], [1.4, 200.0], [1.5, 200.0], [1.6, 200.0], [1.7, 202.0], [1.8, 202.0], [1.9, 202.0], [2.0, 203.0], [2.1, 205.0], [2.2, 206.0], [2.3, 206.0], [2.4, 207.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 210.0], [2.9, 211.0], [3.0, 211.0], [3.1, 211.0], [3.2, 211.0], [3.3, 211.0], [3.4, 211.0], [3.5, 213.0], [3.6, 213.0], [3.7, 214.0], [3.8, 214.0], [3.9, 214.0], [4.0, 215.0], [4.1, 215.0], [4.2, 215.0], [4.3, 215.0], [4.4, 216.0], [4.5, 216.0], [4.6, 216.0], [4.7, 216.0], [4.8, 217.0], [4.9, 220.0], [5.0, 220.0], [5.1, 220.0], [5.2, 220.0], [5.3, 220.0], [5.4, 223.0], [5.5, 223.0], [5.6, 226.0], [5.7, 226.0], [5.8, 226.0], [5.9, 226.0], [6.0, 228.0], [6.1, 228.0], [6.2, 228.0], [6.3, 229.0], [6.4, 231.0], [6.5, 231.0], [6.6, 234.0], [6.7, 235.0], [6.8, 235.0], [6.9, 236.0], [7.0, 236.0], [7.1, 237.0], [7.2, 237.0], [7.3, 238.0], [7.4, 242.0], [7.5, 245.0], [7.6, 245.0], [7.7, 247.0], [7.8, 248.0], [7.9, 249.0], [8.0, 249.0], [8.1, 249.0], [8.2, 250.0], [8.3, 250.0], [8.4, 250.0], [8.5, 252.0], [8.6, 252.0], [8.7, 252.0], [8.8, 253.0], [8.9, 253.0], [9.0, 253.0], [9.1, 253.0], [9.2, 255.0], [9.3, 256.0], [9.4, 258.0], [9.5, 258.0], [9.6, 260.0], [9.7, 261.0], [9.8, 261.0], [9.9, 261.0], [10.0, 262.0], [10.1, 262.0], [10.2, 262.0], [10.3, 262.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 263.0], [10.8, 263.0], [10.9, 263.0], [11.0, 263.0], [11.1, 265.0], [11.2, 266.0], [11.3, 267.0], [11.4, 267.0], [11.5, 267.0], [11.6, 268.0], [11.7, 268.0], [11.8, 268.0], [11.9, 269.0], [12.0, 269.0], [12.1, 269.0], [12.2, 269.0], [12.3, 270.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 271.0], [12.8, 272.0], [12.9, 272.0], [13.0, 273.0], [13.1, 273.0], [13.2, 273.0], [13.3, 273.0], [13.4, 273.0], [13.5, 273.0], [13.6, 273.0], [13.7, 274.0], [13.8, 274.0], [13.9, 274.0], [14.0, 274.0], [14.1, 274.0], [14.2, 274.0], [14.3, 275.0], [14.4, 275.0], [14.5, 275.0], [14.6, 276.0], [14.7, 276.0], [14.8, 276.0], [14.9, 276.0], [15.0, 277.0], [15.1, 277.0], [15.2, 277.0], [15.3, 278.0], [15.4, 278.0], [15.5, 278.0], [15.6, 278.0], [15.7, 278.0], [15.8, 278.0], [15.9, 278.0], [16.0, 279.0], [16.1, 279.0], [16.2, 279.0], [16.3, 279.0], [16.4, 279.0], [16.5, 280.0], [16.6, 280.0], [16.7, 280.0], [16.8, 280.0], [16.9, 280.0], [17.0, 280.0], [17.1, 280.0], [17.2, 280.0], [17.3, 280.0], [17.4, 280.0], [17.5, 281.0], [17.6, 281.0], [17.7, 281.0], [17.8, 281.0], [17.9, 282.0], [18.0, 283.0], [18.1, 283.0], [18.2, 283.0], [18.3, 283.0], [18.4, 283.0], [18.5, 283.0], [18.6, 284.0], [18.7, 284.0], [18.8, 284.0], [18.9, 284.0], [19.0, 284.0], [19.1, 284.0], [19.2, 284.0], [19.3, 284.0], [19.4, 284.0], [19.5, 284.0], [19.6, 284.0], [19.7, 284.0], [19.8, 285.0], [19.9, 285.0], [20.0, 285.0], [20.1, 285.0], [20.2, 285.0], [20.3, 285.0], [20.4, 285.0], [20.5, 286.0], [20.6, 286.0], [20.7, 286.0], [20.8, 286.0], [20.9, 286.0], [21.0, 286.0], [21.1, 287.0], [21.2, 287.0], [21.3, 287.0], [21.4, 287.0], [21.5, 288.0], [21.6, 288.0], [21.7, 288.0], [21.8, 289.0], [21.9, 289.0], [22.0, 290.0], [22.1, 290.0], [22.2, 291.0], [22.3, 291.0], [22.4, 291.0], [22.5, 291.0], [22.6, 291.0], [22.7, 291.0], [22.8, 291.0], [22.9, 292.0], [23.0, 292.0], [23.1, 292.0], [23.2, 293.0], [23.3, 294.0], [23.4, 294.0], [23.5, 294.0], [23.6, 294.0], [23.7, 294.0], [23.8, 294.0], [23.9, 294.0], [24.0, 295.0], [24.1, 295.0], [24.2, 295.0], [24.3, 296.0], [24.4, 297.0], [24.5, 297.0], [24.6, 297.0], [24.7, 297.0], [24.8, 298.0], [24.9, 298.0], [25.0, 298.0], [25.1, 299.0], [25.2, 299.0], [25.3, 299.0], [25.4, 299.0], [25.5, 300.0], [25.6, 300.0], [25.7, 300.0], [25.8, 300.0], [25.9, 301.0], [26.0, 301.0], [26.1, 301.0], [26.2, 301.0], [26.3, 302.0], [26.4, 302.0], [26.5, 302.0], [26.6, 302.0], [26.7, 304.0], [26.8, 304.0], [26.9, 305.0], [27.0, 308.0], [27.1, 308.0], [27.2, 308.0], [27.3, 310.0], [27.4, 312.0], [27.5, 313.0], [27.6, 313.0], [27.7, 316.0], [27.8, 316.0], [27.9, 317.0], [28.0, 317.0], [28.1, 321.0], [28.2, 321.0], [28.3, 321.0], [28.4, 321.0], [28.5, 325.0], [28.6, 327.0], [28.7, 327.0], [28.8, 327.0], [28.9, 328.0], [29.0, 331.0], [29.1, 331.0], [29.2, 331.0], [29.3, 335.0], [29.4, 338.0], [29.5, 338.0], [29.6, 341.0], [29.7, 341.0], [29.8, 342.0], [29.9, 342.0], [30.0, 343.0], [30.1, 345.0], [30.2, 345.0], [30.3, 350.0], [30.4, 350.0], [30.5, 352.0], [30.6, 352.0], [30.7, 352.0], [30.8, 353.0], [30.9, 354.0], [31.0, 354.0], [31.1, 354.0], [31.2, 356.0], [31.3, 356.0], [31.4, 356.0], [31.5, 357.0], [31.6, 357.0], [31.7, 357.0], [31.8, 358.0], [31.9, 359.0], [32.0, 359.0], [32.1, 359.0], [32.2, 360.0], [32.3, 361.0], [32.4, 362.0], [32.5, 362.0], [32.6, 362.0], [32.7, 363.0], [32.8, 363.0], [32.9, 363.0], [33.0, 363.0], [33.1, 363.0], [33.2, 363.0], [33.3, 363.0], [33.4, 363.0], [33.5, 364.0], [33.6, 364.0], [33.7, 364.0], [33.8, 365.0], [33.9, 365.0], [34.0, 365.0], [34.1, 366.0], [34.2, 366.0], [34.3, 367.0], [34.4, 367.0], [34.5, 367.0], [34.6, 367.0], [34.7, 367.0], [34.8, 367.0], [34.9, 369.0], [35.0, 369.0], [35.1, 369.0], [35.2, 369.0], [35.3, 369.0], [35.4, 370.0], [35.5, 370.0], [35.6, 370.0], [35.7, 371.0], [35.8, 371.0], [35.9, 371.0], [36.0, 371.0], [36.1, 371.0], [36.2, 371.0], [36.3, 371.0], [36.4, 371.0], [36.5, 371.0], [36.6, 372.0], [36.7, 372.0], [36.8, 372.0], [36.9, 372.0], [37.0, 372.0], [37.1, 372.0], [37.2, 372.0], [37.3, 372.0], [37.4, 372.0], [37.5, 373.0], [37.6, 373.0], [37.7, 374.0], [37.8, 374.0], [37.9, 374.0], [38.0, 374.0], [38.1, 375.0], [38.2, 375.0], [38.3, 375.0], [38.4, 376.0], [38.5, 376.0], [38.6, 377.0], [38.7, 377.0], [38.8, 377.0], [38.9, 377.0], [39.0, 377.0], [39.1, 378.0], [39.2, 378.0], [39.3, 378.0], [39.4, 378.0], [39.5, 378.0], [39.6, 379.0], [39.7, 379.0], [39.8, 379.0], [39.9, 379.0], [40.0, 379.0], [40.1, 379.0], [40.2, 382.0], [40.3, 382.0], [40.4, 382.0], [40.5, 382.0], [40.6, 383.0], [40.7, 383.0], [40.8, 383.0], [40.9, 383.0], [41.0, 383.0], [41.1, 384.0], [41.2, 384.0], [41.3, 384.0], [41.4, 384.0], [41.5, 384.0], [41.6, 384.0], [41.7, 384.0], [41.8, 384.0], [41.9, 384.0], [42.0, 384.0], [42.1, 385.0], [42.2, 385.0], [42.3, 385.0], [42.4, 385.0], [42.5, 385.0], [42.6, 385.0], [42.7, 385.0], [42.8, 385.0], [42.9, 386.0], [43.0, 386.0], [43.1, 386.0], [43.2, 386.0], [43.3, 386.0], [43.4, 386.0], [43.5, 386.0], [43.6, 386.0], [43.7, 386.0], [43.8, 386.0], [43.9, 386.0], [44.0, 387.0], [44.1, 387.0], [44.2, 387.0], [44.3, 387.0], [44.4, 387.0], [44.5, 387.0], [44.6, 387.0], [44.7, 387.0], [44.8, 387.0], [44.9, 387.0], [45.0, 387.0], [45.1, 387.0], [45.2, 387.0], [45.3, 387.0], [45.4, 388.0], [45.5, 389.0], [45.6, 389.0], [45.7, 389.0], [45.8, 389.0], [45.9, 389.0], [46.0, 389.0], [46.1, 389.0], [46.2, 390.0], [46.3, 391.0], [46.4, 391.0], [46.5, 391.0], [46.6, 392.0], [46.7, 392.0], [46.8, 392.0], [46.9, 394.0], [47.0, 395.0], [47.1, 395.0], [47.2, 395.0], [47.3, 395.0], [47.4, 395.0], [47.5, 395.0], [47.6, 395.0], [47.7, 396.0], [47.8, 396.0], [47.9, 397.0], [48.0, 397.0], [48.1, 397.0], [48.2, 397.0], [48.3, 397.0], [48.4, 397.0], [48.5, 397.0], [48.6, 398.0], [48.7, 398.0], [48.8, 398.0], [48.9, 398.0], [49.0, 398.0], [49.1, 398.0], [49.2, 398.0], [49.3, 398.0], [49.4, 399.0], [49.5, 399.0], [49.6, 399.0], [49.7, 399.0], [49.8, 401.0], [49.9, 401.0], [50.0, 402.0], [50.1, 403.0], [50.2, 403.0], [50.3, 404.0], [50.4, 404.0], [50.5, 404.0], [50.6, 404.0], [50.7, 405.0], [50.8, 405.0], [50.9, 405.0], [51.0, 405.0], [51.1, 407.0], [51.2, 407.0], [51.3, 408.0], [51.4, 408.0], [51.5, 408.0], [51.6, 408.0], [51.7, 408.0], [51.8, 408.0], [51.9, 408.0], [52.0, 410.0], [52.1, 410.0], [52.2, 411.0], [52.3, 411.0], [52.4, 412.0], [52.5, 412.0], [52.6, 413.0], [52.7, 414.0], [52.8, 414.0], [52.9, 414.0], [53.0, 414.0], [53.1, 415.0], [53.2, 415.0], [53.3, 415.0], [53.4, 415.0], [53.5, 416.0], [53.6, 416.0], [53.7, 416.0], [53.8, 417.0], [53.9, 419.0], [54.0, 419.0], [54.1, 419.0], [54.2, 420.0], [54.3, 422.0], [54.4, 422.0], [54.5, 422.0], [54.6, 424.0], [54.7, 426.0], [54.8, 426.0], [54.9, 426.0], [55.0, 427.0], [55.1, 427.0], [55.2, 427.0], [55.3, 429.0], [55.4, 431.0], [55.5, 431.0], [55.6, 432.0], [55.7, 432.0], [55.8, 432.0], [55.9, 432.0], [56.0, 432.0], [56.1, 433.0], [56.2, 433.0], [56.3, 433.0], [56.4, 434.0], [56.5, 436.0], [56.6, 437.0], [56.7, 437.0], [56.8, 437.0], [56.9, 438.0], [57.0, 438.0], [57.1, 438.0], [57.2, 439.0], [57.3, 439.0], [57.4, 439.0], [57.5, 439.0], [57.6, 440.0], [57.7, 441.0], [57.8, 441.0], [57.9, 442.0], [58.0, 443.0], [58.1, 443.0], [58.2, 443.0], [58.3, 445.0], [58.4, 446.0], [58.5, 446.0], [58.6, 446.0], [58.7, 446.0], [58.8, 447.0], [58.9, 447.0], [59.0, 447.0], [59.1, 448.0], [59.2, 448.0], [59.3, 448.0], [59.4, 449.0], [59.5, 449.0], [59.6, 450.0], [59.7, 450.0], [59.8, 452.0], [59.9, 453.0], [60.0, 453.0], [60.1, 453.0], [60.2, 453.0], [60.3, 454.0], [60.4, 454.0], [60.5, 456.0], [60.6, 456.0], [60.7, 457.0], [60.8, 457.0], [60.9, 457.0], [61.0, 458.0], [61.1, 459.0], [61.2, 459.0], [61.3, 460.0], [61.4, 460.0], [61.5, 460.0], [61.6, 460.0], [61.7, 461.0], [61.8, 462.0], [61.9, 462.0], [62.0, 465.0], [62.1, 466.0], [62.2, 466.0], [62.3, 466.0], [62.4, 466.0], [62.5, 467.0], [62.6, 467.0], [62.7, 467.0], [62.8, 468.0], [62.9, 470.0], [63.0, 471.0], [63.1, 471.0], [63.2, 471.0], [63.3, 472.0], [63.4, 472.0], [63.5, 472.0], [63.6, 483.0], [63.7, 484.0], [63.8, 484.0], [63.9, 485.0], [64.0, 488.0], [64.1, 490.0], [64.2, 490.0], [64.3, 490.0], [64.4, 491.0], [64.5, 491.0], [64.6, 491.0], [64.7, 492.0], [64.8, 493.0], [64.9, 493.0], [65.0, 493.0], [65.1, 494.0], [65.2, 494.0], [65.3, 494.0], [65.4, 499.0], [65.5, 502.0], [65.6, 508.0], [65.7, 508.0], [65.8, 509.0], [65.9, 510.0], [66.0, 511.0], [66.1, 511.0], [66.2, 512.0], [66.3, 516.0], [66.4, 518.0], [66.5, 518.0], [66.6, 518.0], [66.7, 519.0], [66.8, 519.0], [66.9, 519.0], [67.0, 520.0], [67.1, 523.0], [67.2, 523.0], [67.3, 524.0], [67.4, 526.0], [67.5, 526.0], [67.6, 526.0], [67.7, 526.0], [67.8, 527.0], [67.9, 530.0], [68.0, 530.0], [68.1, 530.0], [68.2, 532.0], [68.3, 532.0], [68.4, 532.0], [68.5, 534.0], [68.6, 535.0], [68.7, 535.0], [68.8, 536.0], [68.9, 536.0], [69.0, 537.0], [69.1, 537.0], [69.2, 537.0], [69.3, 537.0], [69.4, 537.0], [69.5, 537.0], [69.6, 537.0], [69.7, 538.0], [69.8, 539.0], [69.9, 539.0], [70.0, 539.0], [70.1, 539.0], [70.2, 539.0], [70.3, 540.0], [70.4, 540.0], [70.5, 540.0], [70.6, 540.0], [70.7, 541.0], [70.8, 542.0], [70.9, 542.0], [71.0, 542.0], [71.1, 544.0], [71.2, 544.0], [71.3, 546.0], [71.4, 546.0], [71.5, 546.0], [71.6, 546.0], [71.7, 546.0], [71.8, 547.0], [71.9, 547.0], [72.0, 548.0], [72.1, 548.0], [72.2, 548.0], [72.3, 549.0], [72.4, 549.0], [72.5, 549.0], [72.6, 549.0], [72.7, 549.0], [72.8, 549.0], [72.9, 549.0], [73.0, 550.0], [73.1, 550.0], [73.2, 550.0], [73.3, 550.0], [73.4, 551.0], [73.5, 552.0], [73.6, 552.0], [73.7, 552.0], [73.8, 554.0], [73.9, 555.0], [74.0, 555.0], [74.1, 555.0], [74.2, 556.0], [74.3, 557.0], [74.4, 557.0], [74.5, 558.0], [74.6, 558.0], [74.7, 558.0], [74.8, 558.0], [74.9, 562.0], [75.0, 563.0], [75.1, 563.0], [75.2, 563.0], [75.3, 565.0], [75.4, 565.0], [75.5, 565.0], [75.6, 566.0], [75.7, 566.0], [75.8, 566.0], [75.9, 566.0], [76.0, 567.0], [76.1, 567.0], [76.2, 570.0], [76.3, 570.0], [76.4, 570.0], [76.5, 570.0], [76.6, 572.0], [76.7, 572.0], [76.8, 572.0], [76.9, 575.0], [77.0, 575.0], [77.1, 579.0], [77.2, 579.0], [77.3, 579.0], [77.4, 579.0], [77.5, 582.0], [77.6, 582.0], [77.7, 583.0], [77.8, 583.0], [77.9, 583.0], [78.0, 585.0], [78.1, 586.0], [78.2, 586.0], [78.3, 586.0], [78.4, 590.0], [78.5, 590.0], [78.6, 591.0], [78.7, 591.0], [78.8, 591.0], [78.9, 591.0], [79.0, 593.0], [79.1, 596.0], [79.2, 596.0], [79.3, 596.0], [79.4, 597.0], [79.5, 597.0], [79.6, 598.0], [79.7, 598.0], [79.8, 598.0], [79.9, 599.0], [80.0, 599.0], [80.1, 599.0], [80.2, 600.0], [80.3, 601.0], [80.4, 601.0], [80.5, 606.0], [80.6, 607.0], [80.7, 609.0], [80.8, 609.0], [80.9, 609.0], [81.0, 610.0], [81.1, 612.0], [81.2, 612.0], [81.3, 613.0], [81.4, 614.0], [81.5, 615.0], [81.6, 615.0], [81.7, 618.0], [81.8, 618.0], [81.9, 618.0], [82.0, 618.0], [82.1, 620.0], [82.2, 622.0], [82.3, 622.0], [82.4, 622.0], [82.5, 625.0], [82.6, 626.0], [82.7, 626.0], [82.8, 629.0], [82.9, 630.0], [83.0, 630.0], [83.1, 630.0], [83.2, 633.0], [83.3, 633.0], [83.4, 633.0], [83.5, 633.0], [83.6, 633.0], [83.7, 635.0], [83.8, 635.0], [83.9, 636.0], [84.0, 638.0], [84.1, 638.0], [84.2, 638.0], [84.3, 640.0], [84.4, 640.0], [84.5, 642.0], [84.6, 642.0], [84.7, 643.0], [84.8, 643.0], [84.9, 644.0], [85.0, 644.0], [85.1, 649.0], [85.2, 652.0], [85.3, 652.0], [85.4, 652.0], [85.5, 653.0], [85.6, 654.0], [85.7, 654.0], [85.8, 655.0], [85.9, 656.0], [86.0, 656.0], [86.1, 656.0], [86.2, 658.0], [86.3, 659.0], [86.4, 659.0], [86.5, 659.0], [86.6, 660.0], [86.7, 660.0], [86.8, 660.0], [86.9, 660.0], [87.0, 661.0], [87.1, 662.0], [87.2, 662.0], [87.3, 662.0], [87.4, 662.0], [87.5, 663.0], [87.6, 663.0], [87.7, 665.0], [87.8, 665.0], [87.9, 666.0], [88.0, 666.0], [88.1, 668.0], [88.2, 669.0], [88.3, 671.0], [88.4, 671.0], [88.5, 672.0], [88.6, 673.0], [88.7, 673.0], [88.8, 674.0], [88.9, 676.0], [89.0, 678.0], [89.1, 678.0], [89.2, 679.0], [89.3, 684.0], [89.4, 686.0], [89.5, 686.0], [89.6, 689.0], [89.7, 693.0], [89.8, 693.0], [89.9, 693.0], [90.0, 697.0], [90.1, 698.0], [90.2, 698.0], [90.3, 703.0], [90.4, 704.0], [90.5, 704.0], [90.6, 704.0], [90.7, 709.0], [90.8, 711.0], [90.9, 712.0], [91.0, 712.0], [91.1, 713.0], [91.2, 713.0], [91.3, 718.0], [91.4, 718.0], [91.5, 718.0], [91.6, 718.0], [91.7, 718.0], [91.8, 719.0], [91.9, 724.0], [92.0, 724.0], [92.1, 724.0], [92.2, 725.0], [92.3, 726.0], [92.4, 728.0], [92.5, 728.0], [92.6, 730.0], [92.7, 733.0], [92.8, 736.0], [92.9, 736.0], [93.0, 745.0], [93.1, 747.0], [93.2, 754.0], [93.3, 754.0], [93.4, 756.0], [93.5, 775.0], [93.6, 775.0], [93.7, 777.0], [93.8, 779.0], [93.9, 789.0], [94.0, 789.0], [94.1, 789.0], [94.2, 798.0], [94.3, 798.0], [94.4, 798.0], [94.5, 811.0], [94.6, 822.0], [94.7, 833.0], [94.8, 833.0], [94.9, 843.0], [95.0, 847.0], [95.1, 847.0], [95.2, 855.0], [95.3, 859.0], [95.4, 863.0], [95.5, 863.0], [95.6, 864.0], [95.7, 871.0], [95.8, 898.0], [95.9, 898.0], [96.0, 900.0], [96.1, 911.0], [96.2, 921.0], [96.3, 921.0], [96.4, 938.0], [96.5, 943.0], [96.6, 949.0], [96.7, 949.0], [96.8, 952.0], [96.9, 967.0], [97.0, 967.0], [97.1, 972.0], [97.2, 983.0], [97.3, 990.0], [97.4, 990.0], [97.5, 992.0], [97.6, 1033.0], [97.7, 1043.0], [97.8, 1043.0], [97.9, 1095.0], [98.0, 1095.0], [98.1, 1117.0], [98.2, 1117.0], [98.3, 1153.0], [98.4, 1195.0], [98.5, 1195.0], [98.6, 1200.0], [98.7, 1218.0], [98.8, 1224.0], [98.9, 1224.0], [99.0, 1312.0], [99.1, 1576.0], [99.2, 1626.0], [99.3, 1626.0], [99.4, 1640.0], [99.5, 2342.0], [99.6, 2589.0], [99.7, 2589.0], [99.8, 2931.0], [99.9, 3011.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 179.0, "series": [{"data": [[2300.0, 1.0], [600.0, 74.0], [2500.0, 1.0], [700.0, 31.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 177.0], [800.0, 11.0], [900.0, 12.0], [1000.0, 4.0], [1100.0, 3.0], [300.0, 179.0], [1200.0, 3.0], [1300.0, 1.0], [1500.0, 1.0], [400.0, 115.0], [100.0, 10.0], [1600.0, 2.0], [500.0, 108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 481.0, "series": [{"data": [[0.0, 481.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 247.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6050648E12, "maxY": 1.0, "series": [{"data": [[1.60506498E12, 1.0], [1.6050648E12, 1.0], [1.60506486E12, 1.0], [1.60506516E12, 1.0], [1.60506504E12, 1.0], [1.6050651E12, 1.0], [1.60506492E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 468.64897959183656, "minX": 1.0, "maxY": 468.64897959183656, "series": [{"data": [[1.0, 468.64897959183656]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 468.64897959183656]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 307.25, "minX": 1.6050648E12, "maxY": 372714.0333333333, "series": [{"data": [[1.60506498E12, 369548.1], [1.6050648E12, 141527.85], [1.60506486E12, 372714.0333333333], [1.60506516E12, 166832.28333333333], [1.60506504E12, 282580.26666666666], [1.6050651E12, 249218.76666666666], [1.60506492E12, 253829.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506498E12, 1090.4833333333333], [1.6050648E12, 307.25], [1.60506486E12, 881.35], [1.60506516E12, 416.98333333333335], [1.60506504E12, 877.75], [1.6050651E12, 1019.9], [1.60506492E12, 929.3166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 407.7755102040816, "minX": 1.6050648E12, "maxY": 516.0689655172414, "series": [{"data": [[1.60506498E12, 407.7755102040816], [1.6050648E12, 510.3658536585366], [1.60506486E12, 516.0689655172414], [1.60506516E12, 430.33333333333337], [1.60506504E12, 515.2155172413793], [1.6050651E12, 444.2962962962965], [1.60506492E12, 483.3414634146338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 406.6938775510206, "minX": 1.6050648E12, "maxY": 514.6637931034481, "series": [{"data": [[1.60506498E12, 406.6938775510206], [1.6050648E12, 509.1463414634145], [1.60506486E12, 514.6637931034481], [1.60506516E12, 428.87719298245617], [1.60506504E12, 513.9913793103447], [1.6050651E12, 443.4148148148151], [1.60506492E12, 482.1869918699185]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008620689655172415, "minX": 1.6050648E12, "maxY": 0.8292682926829267, "series": [{"data": [[1.60506498E12, 0.027210884353741506], [1.6050648E12, 0.8292682926829267], [1.60506486E12, 0.01724137931034483], [1.60506516E12, 0.03508771929824562], [1.60506504E12, 0.008620689655172415], [1.6050651E12, 0.01481481481481482], [1.60506492E12, 0.01626016260162602]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.6050648E12, "maxY": 3011.0, "series": [{"data": [[1.60506498E12, 3011.0], [1.6050648E12, 2931.0], [1.60506486E12, 1218.0], [1.60506516E12, 1640.0], [1.60506504E12, 972.0], [1.6050651E12, 1095.0], [1.60506492E12, 2342.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506498E12, 191.33199996471404], [1.6050648E12, 192.0], [1.60506486E12, 197.05299997210503], [1.60506516E12, 198.0], [1.60506504E12, 358.052999972105], [1.6050651E12, 254.79199974060057], [1.60506492E12, 263.27599967479705]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506498E12, 191.46520001411437], [1.6050648E12, 192.0], [1.60506486E12, 197.158300011158], [1.60506516E12, 198.0], [1.60506504E12, 358.15830001115796], [1.6050651E12, 255.77120010375975], [1.60506492E12, 264.50360013008117]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506498E12, 191.40599998235703], [1.6050648E12, 192.0], [1.60506486E12, 197.1114999860525], [1.60506516E12, 198.0], [1.60506504E12, 358.11149998605254], [1.6050651E12, 255.3359998703003], [1.60506492E12, 263.9579998373985]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506498E12, 191.0], [1.6050648E12, 192.0], [1.60506486E12, 197.0], [1.60506516E12, 198.0], [1.60506504E12, 358.0], [1.6050651E12, 253.0], [1.60506492E12, 262.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506498E12, 294.0], [1.6050648E12, 362.0], [1.60506486E12, 444.0], [1.60506516E12, 280.0], [1.60506504E12, 469.5], [1.6050651E12, 408.0], [1.60506492E12, 450.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 711.0, "series": [{"data": [[1.0, 711.0], [4.0, 281.5], [2.0, 489.0], [5.0, 212.0], [3.0, 361.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 708.0, "series": [{"data": [[1.0, 708.0], [4.0, 281.0], [2.0, 487.0], [5.0, 212.0], [3.0, 360.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.6050648E12, "maxY": 2.45, "series": [{"data": [[1.60506498E12, 2.45], [1.6050648E12, 0.7], [1.60506486E12, 1.9333333333333333], [1.60506516E12, 0.9333333333333333], [1.60506504E12, 1.9333333333333333], [1.6050651E12, 2.25], [1.60506492E12, 2.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.6050648E12, "maxY": 2.45, "series": [{"data": [[1.60506498E12, 2.45], [1.6050648E12, 0.6833333333333333], [1.60506486E12, 1.9333333333333333], [1.60506516E12, 0.95], [1.60506504E12, 1.9333333333333333], [1.6050651E12, 2.25], [1.60506492E12, 2.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.6050648E12, "maxY": 2.45, "series": [{"data": [[1.60506498E12, 2.45], [1.6050648E12, 0.6833333333333333], [1.60506486E12, 1.9333333333333333], [1.60506516E12, 0.95], [1.60506504E12, 1.9333333333333333], [1.6050651E12, 2.25], [1.60506492E12, 2.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.6050648E12, "maxY": 2.45, "series": [{"data": [[1.60506498E12, 2.45], [1.6050648E12, 0.6833333333333333], [1.60506486E12, 1.9333333333333333], [1.60506516E12, 0.95], [1.60506504E12, 1.9333333333333333], [1.6050651E12, 2.25], [1.60506492E12, 2.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506516E12, "title": "Total Transactions Per Second"}},
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

