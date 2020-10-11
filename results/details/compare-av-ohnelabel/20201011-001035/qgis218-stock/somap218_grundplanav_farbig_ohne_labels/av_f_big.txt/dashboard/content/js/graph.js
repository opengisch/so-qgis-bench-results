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
        data: {"result": {"minY": 176.0, "minX": 0.0, "maxY": 3030.0, "series": [{"data": [[0.0, 176.0], [0.1, 176.0], [0.2, 180.0], [0.3, 184.0], [0.4, 184.0], [0.5, 193.0], [0.6, 198.0], [0.7, 200.0], [0.8, 200.0], [0.9, 205.0], [1.0, 214.0], [1.1, 216.0], [1.2, 216.0], [1.3, 216.0], [1.4, 222.0], [1.5, 222.0], [1.6, 222.0], [1.7, 224.0], [1.8, 225.0], [1.9, 225.0], [2.0, 225.0], [2.1, 226.0], [2.2, 228.0], [2.3, 228.0], [2.4, 229.0], [2.5, 229.0], [2.6, 231.0], [2.7, 231.0], [2.8, 231.0], [2.9, 232.0], [3.0, 232.0], [3.1, 232.0], [3.2, 237.0], [3.3, 241.0], [3.4, 241.0], [3.5, 241.0], [3.6, 242.0], [3.7, 242.0], [3.8, 242.0], [3.9, 243.0], [4.0, 247.0], [4.1, 247.0], [4.2, 247.0], [4.3, 256.0], [4.4, 258.0], [4.5, 260.0], [4.6, 260.0], [4.7, 260.0], [4.8, 263.0], [4.9, 265.0], [5.0, 265.0], [5.1, 266.0], [5.2, 268.0], [5.3, 268.0], [5.4, 270.0], [5.5, 273.0], [5.6, 274.0], [5.7, 274.0], [5.8, 274.0], [5.9, 274.0], [6.0, 275.0], [6.1, 275.0], [6.2, 277.0], [6.3, 279.0], [6.4, 281.0], [6.5, 281.0], [6.6, 282.0], [6.7, 283.0], [6.8, 283.0], [6.9, 285.0], [7.0, 286.0], [7.1, 286.0], [7.2, 286.0], [7.3, 287.0], [7.4, 288.0], [7.5, 291.0], [7.6, 291.0], [7.7, 292.0], [7.8, 295.0], [7.9, 295.0], [8.0, 295.0], [8.1, 295.0], [8.2, 298.0], [8.3, 298.0], [8.4, 298.0], [8.5, 299.0], [8.6, 299.0], [8.7, 299.0], [8.8, 304.0], [8.9, 306.0], [9.0, 309.0], [9.1, 309.0], [9.2, 310.0], [9.3, 310.0], [9.4, 310.0], [9.5, 310.0], [9.6, 313.0], [9.7, 316.0], [9.8, 319.0], [9.9, 319.0], [10.0, 321.0], [10.1, 321.0], [10.2, 321.0], [10.3, 321.0], [10.4, 321.0], [10.5, 326.0], [10.6, 326.0], [10.7, 326.0], [10.8, 326.0], [10.9, 326.0], [11.0, 326.0], [11.1, 327.0], [11.2, 327.0], [11.3, 329.0], [11.4, 329.0], [11.5, 329.0], [11.6, 330.0], [11.7, 330.0], [11.8, 330.0], [11.9, 331.0], [12.0, 332.0], [12.1, 332.0], [12.2, 333.0], [12.3, 334.0], [12.4, 334.0], [12.5, 334.0], [12.6, 335.0], [12.7, 335.0], [12.8, 336.0], [12.9, 336.0], [13.0, 337.0], [13.1, 337.0], [13.2, 337.0], [13.3, 337.0], [13.4, 338.0], [13.5, 338.0], [13.6, 338.0], [13.7, 338.0], [13.8, 340.0], [13.9, 340.0], [14.0, 340.0], [14.1, 340.0], [14.2, 340.0], [14.3, 340.0], [14.4, 340.0], [14.5, 342.0], [14.6, 342.0], [14.7, 343.0], [14.8, 343.0], [14.9, 344.0], [15.0, 344.0], [15.1, 344.0], [15.2, 344.0], [15.3, 345.0], [15.4, 347.0], [15.5, 347.0], [15.6, 347.0], [15.7, 348.0], [15.8, 348.0], [15.9, 348.0], [16.0, 348.0], [16.1, 348.0], [16.2, 348.0], [16.3, 348.0], [16.4, 348.0], [16.5, 349.0], [16.6, 350.0], [16.7, 350.0], [16.8, 350.0], [16.9, 350.0], [17.0, 350.0], [17.1, 350.0], [17.2, 352.0], [17.3, 354.0], [17.4, 354.0], [17.5, 354.0], [17.6, 355.0], [17.7, 355.0], [17.8, 355.0], [17.9, 356.0], [18.0, 356.0], [18.1, 356.0], [18.2, 356.0], [18.3, 357.0], [18.4, 358.0], [18.5, 358.0], [18.6, 358.0], [18.7, 358.0], [18.8, 360.0], [18.9, 360.0], [19.0, 360.0], [19.1, 361.0], [19.2, 361.0], [19.3, 361.0], [19.4, 362.0], [19.5, 363.0], [19.6, 364.0], [19.7, 364.0], [19.8, 364.0], [19.9, 365.0], [20.0, 366.0], [20.1, 366.0], [20.2, 366.0], [20.3, 367.0], [20.4, 367.0], [20.5, 367.0], [20.6, 367.0], [20.7, 367.0], [20.8, 367.0], [20.9, 367.0], [21.0, 369.0], [21.1, 371.0], [21.2, 371.0], [21.3, 371.0], [21.4, 372.0], [21.5, 373.0], [21.6, 373.0], [21.7, 373.0], [21.8, 373.0], [21.9, 373.0], [22.0, 373.0], [22.1, 374.0], [22.2, 375.0], [22.3, 375.0], [22.4, 375.0], [22.5, 375.0], [22.6, 375.0], [22.7, 375.0], [22.8, 375.0], [22.9, 376.0], [23.0, 378.0], [23.1, 378.0], [23.2, 379.0], [23.3, 379.0], [23.4, 379.0], [23.5, 379.0], [23.6, 379.0], [23.7, 380.0], [23.8, 380.0], [23.9, 380.0], [24.0, 381.0], [24.1, 381.0], [24.2, 381.0], [24.3, 381.0], [24.4, 382.0], [24.5, 382.0], [24.6, 382.0], [24.7, 383.0], [24.8, 383.0], [24.9, 383.0], [25.0, 383.0], [25.1, 384.0], [25.2, 384.0], [25.3, 384.0], [25.4, 385.0], [25.5, 385.0], [25.6, 386.0], [25.7, 386.0], [25.8, 386.0], [25.9, 387.0], [26.0, 387.0], [26.1, 387.0], [26.2, 387.0], [26.3, 389.0], [26.4, 389.0], [26.5, 389.0], [26.6, 389.0], [26.7, 390.0], [26.8, 390.0], [26.9, 390.0], [27.0, 391.0], [27.1, 391.0], [27.2, 391.0], [27.3, 391.0], [27.4, 392.0], [27.5, 392.0], [27.6, 392.0], [27.7, 393.0], [27.8, 393.0], [27.9, 393.0], [28.0, 393.0], [28.1, 394.0], [28.2, 394.0], [28.3, 395.0], [28.4, 395.0], [28.5, 395.0], [28.6, 395.0], [28.7, 395.0], [28.8, 396.0], [28.9, 396.0], [29.0, 396.0], [29.1, 396.0], [29.2, 397.0], [29.3, 397.0], [29.4, 397.0], [29.5, 397.0], [29.6, 397.0], [29.7, 397.0], [29.8, 397.0], [29.9, 397.0], [30.0, 401.0], [30.1, 401.0], [30.2, 401.0], [30.3, 403.0], [30.4, 403.0], [30.5, 404.0], [30.6, 404.0], [30.7, 405.0], [30.8, 405.0], [30.9, 405.0], [31.0, 405.0], [31.1, 406.0], [31.2, 406.0], [31.3, 407.0], [31.4, 407.0], [31.5, 407.0], [31.6, 407.0], [31.7, 407.0], [31.8, 408.0], [31.9, 409.0], [32.0, 409.0], [32.1, 409.0], [32.2, 409.0], [32.3, 410.0], [32.4, 410.0], [32.5, 410.0], [32.6, 410.0], [32.7, 411.0], [32.8, 411.0], [32.9, 411.0], [33.0, 411.0], [33.1, 411.0], [33.2, 411.0], [33.3, 411.0], [33.4, 411.0], [33.5, 412.0], [33.6, 412.0], [33.7, 413.0], [33.8, 413.0], [33.9, 414.0], [34.0, 414.0], [34.1, 415.0], [34.2, 415.0], [34.3, 415.0], [34.4, 415.0], [34.5, 417.0], [34.6, 418.0], [34.7, 418.0], [34.8, 418.0], [34.9, 418.0], [35.0, 420.0], [35.1, 420.0], [35.2, 420.0], [35.3, 420.0], [35.4, 421.0], [35.5, 421.0], [35.6, 421.0], [35.7, 421.0], [35.8, 423.0], [35.9, 423.0], [36.0, 423.0], [36.1, 423.0], [36.2, 423.0], [36.3, 423.0], [36.4, 424.0], [36.5, 424.0], [36.6, 425.0], [36.7, 425.0], [36.8, 425.0], [36.9, 427.0], [37.0, 427.0], [37.1, 428.0], [37.2, 430.0], [37.3, 430.0], [37.4, 430.0], [37.5, 430.0], [37.6, 431.0], [37.7, 431.0], [37.8, 431.0], [37.9, 431.0], [38.0, 431.0], [38.1, 432.0], [38.2, 432.0], [38.3, 432.0], [38.4, 432.0], [38.5, 432.0], [38.6, 433.0], [38.7, 433.0], [38.8, 433.0], [38.9, 433.0], [39.0, 433.0], [39.1, 435.0], [39.2, 435.0], [39.3, 435.0], [39.4, 435.0], [39.5, 435.0], [39.6, 436.0], [39.7, 436.0], [39.8, 436.0], [39.9, 436.0], [40.0, 437.0], [40.1, 437.0], [40.2, 437.0], [40.3, 437.0], [40.4, 437.0], [40.5, 437.0], [40.6, 438.0], [40.7, 438.0], [40.8, 438.0], [40.9, 439.0], [41.0, 440.0], [41.1, 440.0], [41.2, 440.0], [41.3, 440.0], [41.4, 440.0], [41.5, 441.0], [41.6, 441.0], [41.7, 441.0], [41.8, 441.0], [41.9, 441.0], [42.0, 441.0], [42.1, 444.0], [42.2, 444.0], [42.3, 444.0], [42.4, 445.0], [42.5, 446.0], [42.6, 447.0], [42.7, 447.0], [42.8, 447.0], [42.9, 448.0], [43.0, 448.0], [43.1, 448.0], [43.2, 449.0], [43.3, 449.0], [43.4, 449.0], [43.5, 449.0], [43.6, 450.0], [43.7, 450.0], [43.8, 450.0], [43.9, 451.0], [44.0, 451.0], [44.1, 451.0], [44.2, 451.0], [44.3, 452.0], [44.4, 452.0], [44.5, 454.0], [44.6, 454.0], [44.7, 454.0], [44.8, 454.0], [44.9, 456.0], [45.0, 456.0], [45.1, 457.0], [45.2, 457.0], [45.3, 457.0], [45.4, 457.0], [45.5, 457.0], [45.6, 457.0], [45.7, 457.0], [45.8, 458.0], [45.9, 458.0], [46.0, 459.0], [46.1, 459.0], [46.2, 459.0], [46.3, 460.0], [46.4, 460.0], [46.5, 460.0], [46.6, 461.0], [46.7, 461.0], [46.8, 461.0], [46.9, 461.0], [47.0, 462.0], [47.1, 462.0], [47.2, 462.0], [47.3, 463.0], [47.4, 463.0], [47.5, 464.0], [47.6, 464.0], [47.7, 464.0], [47.8, 464.0], [47.9, 464.0], [48.0, 464.0], [48.1, 465.0], [48.2, 465.0], [48.3, 465.0], [48.4, 465.0], [48.5, 465.0], [48.6, 466.0], [48.7, 466.0], [48.8, 467.0], [48.9, 467.0], [49.0, 468.0], [49.1, 468.0], [49.2, 468.0], [49.3, 468.0], [49.4, 471.0], [49.5, 471.0], [49.6, 471.0], [49.7, 472.0], [49.8, 472.0], [49.9, 472.0], [50.0, 473.0], [50.1, 474.0], [50.2, 474.0], [50.3, 474.0], [50.4, 474.0], [50.5, 474.0], [50.6, 474.0], [50.7, 475.0], [50.8, 476.0], [50.9, 476.0], [51.0, 476.0], [51.1, 477.0], [51.2, 477.0], [51.3, 478.0], [51.4, 478.0], [51.5, 479.0], [51.6, 479.0], [51.7, 479.0], [51.8, 480.0], [51.9, 480.0], [52.0, 481.0], [52.1, 481.0], [52.2, 481.0], [52.3, 481.0], [52.4, 481.0], [52.5, 481.0], [52.6, 482.0], [52.7, 482.0], [52.8, 482.0], [52.9, 482.0], [53.0, 483.0], [53.1, 483.0], [53.2, 483.0], [53.3, 483.0], [53.4, 484.0], [53.5, 486.0], [53.6, 486.0], [53.7, 487.0], [53.8, 488.0], [53.9, 488.0], [54.0, 488.0], [54.1, 488.0], [54.2, 489.0], [54.3, 490.0], [54.4, 490.0], [54.5, 490.0], [54.6, 491.0], [54.7, 491.0], [54.8, 491.0], [54.9, 491.0], [55.0, 492.0], [55.1, 492.0], [55.2, 493.0], [55.3, 494.0], [55.4, 495.0], [55.5, 495.0], [55.6, 495.0], [55.7, 497.0], [55.8, 500.0], [55.9, 500.0], [56.0, 500.0], [56.1, 501.0], [56.2, 502.0], [56.3, 502.0], [56.4, 502.0], [56.5, 503.0], [56.6, 503.0], [56.7, 503.0], [56.8, 503.0], [56.9, 504.0], [57.0, 504.0], [57.1, 504.0], [57.2, 506.0], [57.3, 508.0], [57.4, 508.0], [57.5, 509.0], [57.6, 509.0], [57.7, 510.0], [57.8, 510.0], [57.9, 510.0], [58.0, 512.0], [58.1, 513.0], [58.2, 513.0], [58.3, 513.0], [58.4, 513.0], [58.5, 513.0], [58.6, 514.0], [58.7, 515.0], [58.8, 515.0], [58.9, 515.0], [59.0, 516.0], [59.1, 516.0], [59.2, 517.0], [59.3, 517.0], [59.4, 517.0], [59.5, 518.0], [59.6, 519.0], [59.7, 519.0], [59.8, 519.0], [59.9, 519.0], [60.0, 520.0], [60.1, 520.0], [60.2, 521.0], [60.3, 522.0], [60.4, 522.0], [60.5, 522.0], [60.6, 524.0], [60.7, 524.0], [60.8, 524.0], [60.9, 524.0], [61.0, 524.0], [61.1, 525.0], [61.2, 525.0], [61.3, 525.0], [61.4, 525.0], [61.5, 526.0], [61.6, 526.0], [61.7, 527.0], [61.8, 527.0], [61.9, 527.0], [62.0, 528.0], [62.1, 529.0], [62.2, 529.0], [62.3, 529.0], [62.4, 529.0], [62.5, 529.0], [62.6, 530.0], [62.7, 530.0], [62.8, 530.0], [62.9, 530.0], [63.0, 531.0], [63.1, 531.0], [63.2, 532.0], [63.3, 532.0], [63.4, 532.0], [63.5, 532.0], [63.6, 533.0], [63.7, 534.0], [63.8, 534.0], [63.9, 534.0], [64.0, 534.0], [64.1, 534.0], [64.2, 534.0], [64.3, 536.0], [64.4, 536.0], [64.5, 539.0], [64.6, 539.0], [64.7, 540.0], [64.8, 541.0], [64.9, 542.0], [65.0, 542.0], [65.1, 544.0], [65.2, 544.0], [65.3, 544.0], [65.4, 544.0], [65.5, 544.0], [65.6, 545.0], [65.7, 545.0], [65.8, 545.0], [65.9, 545.0], [66.0, 547.0], [66.1, 547.0], [66.2, 548.0], [66.3, 550.0], [66.4, 551.0], [66.5, 551.0], [66.6, 552.0], [66.7, 552.0], [66.8, 552.0], [66.9, 552.0], [67.0, 553.0], [67.1, 554.0], [67.2, 554.0], [67.3, 554.0], [67.4, 555.0], [67.5, 555.0], [67.6, 555.0], [67.7, 555.0], [67.8, 556.0], [67.9, 556.0], [68.0, 556.0], [68.1, 560.0], [68.2, 560.0], [68.3, 560.0], [68.4, 560.0], [68.5, 560.0], [68.6, 560.0], [68.7, 560.0], [68.8, 561.0], [68.9, 563.0], [69.0, 563.0], [69.1, 563.0], [69.2, 563.0], [69.3, 563.0], [69.4, 564.0], [69.5, 564.0], [69.6, 565.0], [69.7, 565.0], [69.8, 565.0], [69.9, 565.0], [70.0, 567.0], [70.1, 567.0], [70.2, 567.0], [70.3, 567.0], [70.4, 567.0], [70.5, 568.0], [70.6, 568.0], [70.7, 569.0], [70.8, 570.0], [70.9, 570.0], [71.0, 570.0], [71.1, 570.0], [71.2, 571.0], [71.3, 573.0], [71.4, 573.0], [71.5, 573.0], [71.6, 575.0], [71.7, 575.0], [71.8, 575.0], [71.9, 577.0], [72.0, 577.0], [72.1, 577.0], [72.2, 577.0], [72.3, 578.0], [72.4, 579.0], [72.5, 579.0], [72.6, 579.0], [72.7, 579.0], [72.8, 580.0], [72.9, 580.0], [73.0, 583.0], [73.1, 584.0], [73.2, 586.0], [73.3, 586.0], [73.4, 586.0], [73.5, 587.0], [73.6, 587.0], [73.7, 587.0], [73.8, 589.0], [73.9, 589.0], [74.0, 589.0], [74.1, 590.0], [74.2, 590.0], [74.3, 591.0], [74.4, 591.0], [74.5, 592.0], [74.6, 592.0], [74.7, 594.0], [74.8, 594.0], [74.9, 594.0], [75.0, 595.0], [75.1, 595.0], [75.2, 596.0], [75.3, 596.0], [75.4, 596.0], [75.5, 596.0], [75.6, 597.0], [75.7, 598.0], [75.8, 600.0], [75.9, 600.0], [76.0, 600.0], [76.1, 600.0], [76.2, 601.0], [76.3, 601.0], [76.4, 601.0], [76.5, 601.0], [76.6, 603.0], [76.7, 603.0], [76.8, 603.0], [76.9, 605.0], [77.0, 605.0], [77.1, 606.0], [77.2, 607.0], [77.3, 608.0], [77.4, 608.0], [77.5, 608.0], [77.6, 608.0], [77.7, 608.0], [77.8, 608.0], [77.9, 608.0], [78.0, 610.0], [78.1, 610.0], [78.2, 610.0], [78.3, 611.0], [78.4, 611.0], [78.5, 611.0], [78.6, 612.0], [78.7, 613.0], [78.8, 613.0], [78.9, 613.0], [79.0, 614.0], [79.1, 614.0], [79.2, 614.0], [79.3, 614.0], [79.4, 614.0], [79.5, 615.0], [79.6, 616.0], [79.7, 616.0], [79.8, 616.0], [79.9, 617.0], [80.0, 617.0], [80.1, 617.0], [80.2, 620.0], [80.3, 620.0], [80.4, 620.0], [80.5, 622.0], [80.6, 624.0], [80.7, 624.0], [80.8, 624.0], [80.9, 625.0], [81.0, 626.0], [81.1, 627.0], [81.2, 627.0], [81.3, 629.0], [81.4, 631.0], [81.5, 631.0], [81.6, 631.0], [81.7, 634.0], [81.8, 635.0], [81.9, 635.0], [82.0, 637.0], [82.1, 637.0], [82.2, 638.0], [82.3, 638.0], [82.4, 642.0], [82.5, 642.0], [82.6, 645.0], [82.7, 645.0], [82.8, 648.0], [82.9, 648.0], [83.0, 649.0], [83.1, 649.0], [83.2, 649.0], [83.3, 653.0], [83.4, 653.0], [83.5, 655.0], [83.6, 656.0], [83.7, 657.0], [83.8, 657.0], [83.9, 658.0], [84.0, 659.0], [84.1, 659.0], [84.2, 659.0], [84.3, 660.0], [84.4, 660.0], [84.5, 661.0], [84.6, 661.0], [84.7, 661.0], [84.8, 661.0], [84.9, 663.0], [85.0, 663.0], [85.1, 666.0], [85.2, 667.0], [85.3, 667.0], [85.4, 670.0], [85.5, 670.0], [85.6, 671.0], [85.7, 671.0], [85.8, 672.0], [85.9, 672.0], [86.0, 672.0], [86.1, 672.0], [86.2, 673.0], [86.3, 676.0], [86.4, 677.0], [86.5, 677.0], [86.6, 679.0], [86.7, 679.0], [86.8, 679.0], [86.9, 684.0], [87.0, 688.0], [87.1, 692.0], [87.2, 692.0], [87.3, 692.0], [87.4, 693.0], [87.5, 700.0], [87.6, 700.0], [87.7, 714.0], [87.8, 716.0], [87.9, 721.0], [88.0, 721.0], [88.1, 724.0], [88.2, 725.0], [88.3, 726.0], [88.4, 726.0], [88.5, 726.0], [88.6, 729.0], [88.7, 729.0], [88.8, 740.0], [88.9, 742.0], [89.0, 743.0], [89.1, 743.0], [89.2, 748.0], [89.3, 752.0], [89.4, 754.0], [89.5, 754.0], [89.6, 755.0], [89.7, 756.0], [89.8, 762.0], [89.9, 762.0], [90.0, 762.0], [90.1, 763.0], [90.2, 763.0], [90.3, 765.0], [90.4, 769.0], [90.5, 770.0], [90.6, 770.0], [90.7, 770.0], [90.8, 774.0], [90.9, 776.0], [91.0, 776.0], [91.1, 779.0], [91.2, 781.0], [91.3, 782.0], [91.4, 782.0], [91.5, 784.0], [91.6, 785.0], [91.7, 785.0], [91.8, 785.0], [91.9, 787.0], [92.0, 799.0], [92.1, 799.0], [92.2, 803.0], [92.3, 809.0], [92.4, 812.0], [92.5, 812.0], [92.6, 831.0], [92.7, 837.0], [92.8, 841.0], [92.9, 841.0], [93.0, 871.0], [93.1, 873.0], [93.2, 875.0], [93.3, 875.0], [93.4, 885.0], [93.5, 887.0], [93.6, 887.0], [93.7, 889.0], [93.8, 893.0], [93.9, 897.0], [94.0, 897.0], [94.1, 898.0], [94.2, 903.0], [94.3, 922.0], [94.4, 922.0], [94.5, 928.0], [94.6, 929.0], [94.7, 933.0], [94.8, 933.0], [94.9, 950.0], [95.0, 957.0], [95.1, 957.0], [95.2, 979.0], [95.3, 994.0], [95.4, 997.0], [95.5, 997.0], [95.6, 1014.0], [95.7, 1020.0], [95.8, 1037.0], [95.9, 1037.0], [96.0, 1053.0], [96.1, 1062.0], [96.2, 1088.0], [96.3, 1088.0], [96.4, 1095.0], [96.5, 1102.0], [96.6, 1102.0], [96.7, 1102.0], [96.8, 1152.0], [96.9, 1153.0], [97.0, 1153.0], [97.1, 1160.0], [97.2, 1164.0], [97.3, 1165.0], [97.4, 1165.0], [97.5, 1178.0], [97.6, 1198.0], [97.7, 1240.0], [97.8, 1240.0], [97.9, 1252.0], [98.0, 1280.0], [98.1, 1321.0], [98.2, 1321.0], [98.3, 1321.0], [98.4, 1322.0], [98.5, 1322.0], [98.6, 1386.0], [98.7, 1502.0], [98.8, 1539.0], [98.9, 1539.0], [99.0, 1592.0], [99.1, 1600.0], [99.2, 1743.0], [99.3, 1743.0], [99.4, 2057.0], [99.5, 2251.0], [99.6, 2721.0], [99.7, 2721.0], [99.8, 2734.0], [99.9, 3030.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 190.0, "series": [{"data": [[2200.0, 1.0], [600.0, 86.0], [700.0, 34.0], [2700.0, 2.0], [3000.0, 1.0], [200.0, 59.0], [800.0, 15.0], [900.0, 10.0], [1000.0, 7.0], [1100.0, 9.0], [300.0, 156.0], [1200.0, 3.0], [1300.0, 4.0], [1500.0, 3.0], [1600.0, 1.0], [400.0, 190.0], [100.0, 5.0], [1700.0, 1.0], [2000.0, 1.0], [500.0, 147.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 412.0, "series": [{"data": [[0.0, 412.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 313.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.5, "minX": 1.602375E12, "maxY": 9.939972714870393, "series": [{"data": [[1.602375E12, 9.5], [1.60237506E12, 9.939972714870393]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 809.0, "series": [{"data": [[8.0, 491.0], [4.0, 299.0], [2.0, 344.0], [1.0, 809.0], [9.0, 688.0], [10.0, 529.1721763085387], [5.0, 310.0], [6.0, 321.0], [3.0, 335.0], [7.0, 408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.938775510204081, 528.1414965986393]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.533333333333333, "minX": 1.602375E12, "maxY": 2027244.8666666667, "series": [{"data": [[1.602375E12, 6801.45], [1.60237506E12, 2027244.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602375E12, 15.533333333333333], [1.60237506E12, 5654.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 465.0, "minX": 1.602375E12, "maxY": 528.313778990451, "series": [{"data": [[1.602375E12, 465.0], [1.60237506E12, 528.313778990451]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 462.5, "minX": 1.602375E12, "maxY": 527.2510231923602, "series": [{"data": [[1.602375E12, 462.5], [1.60237506E12, 527.2510231923602]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06275579809004092, "minX": 1.602375E12, "maxY": 17.5, "series": [{"data": [[1.602375E12, 17.5], [1.60237506E12, 0.06275579809004092]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.602375E12, "maxY": 3030.0, "series": [{"data": [[1.602375E12, 688.0], [1.60237506E12, 3030.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602375E12, 242.0], [1.60237506E12, 203.02999912500383]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602375E12, 242.0], [1.60237506E12, 207.39940062999725]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602375E12, 242.0], [1.60237506E12, 204.8649995625019]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602375E12, 242.0], [1.60237506E12, 176.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602375E12, 465.0], [1.60237506E12, 473.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 335.0, "minX": 2.0, "maxY": 1358.5, "series": [{"data": [[2.0, 465.0], [8.0, 1358.5], [13.0, 497.0], [16.0, 578.0], [17.0, 504.0], [18.0, 521.5], [19.0, 516.5], [20.0, 513.5], [21.0, 431.0], [22.0, 404.5], [23.0, 361.5], [24.0, 400.5], [25.0, 430.5], [27.0, 421.0], [7.0, 335.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 335.0, "minX": 2.0, "maxY": 1358.0, "series": [{"data": [[2.0, 462.5], [8.0, 1358.0], [13.0, 497.0], [16.0, 577.5], [17.0, 503.0], [18.0, 521.5], [19.0, 515.5], [20.0, 513.5], [21.0, 430.0], [22.0, 404.5], [23.0, 361.0], [24.0, 399.5], [25.0, 429.0], [27.0, 421.0], [7.0, 335.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.602375E12, "maxY": 12.05, "series": [{"data": [[1.602375E12, 0.2], [1.60237506E12, 12.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.602375E12, "maxY": 12.216666666666667, "series": [{"data": [[1.602375E12, 0.03333333333333333], [1.60237506E12, 12.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60237506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.602375E12, "maxY": 12.216666666666667, "series": [{"data": [[1.602375E12, 0.03333333333333333], [1.60237506E12, 12.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.602375E12, "maxY": 12.216666666666667, "series": [{"data": [[1.602375E12, 0.03333333333333333], [1.60237506E12, 12.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60237506E12, "title": "Total Transactions Per Second"}},
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

