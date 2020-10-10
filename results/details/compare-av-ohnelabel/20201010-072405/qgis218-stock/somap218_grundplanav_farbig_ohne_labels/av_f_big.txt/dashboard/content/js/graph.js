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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 3242.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 178.0], [0.3, 179.0], [0.4, 179.0], [0.5, 194.0], [0.6, 195.0], [0.7, 196.0], [0.8, 196.0], [0.9, 196.0], [1.0, 197.0], [1.1, 199.0], [1.2, 199.0], [1.3, 202.0], [1.4, 210.0], [1.5, 210.0], [1.6, 210.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 221.0], [2.1, 221.0], [2.2, 223.0], [2.3, 223.0], [2.4, 223.0], [2.5, 226.0], [2.6, 226.0], [2.7, 226.0], [2.8, 228.0], [2.9, 228.0], [3.0, 229.0], [3.1, 229.0], [3.2, 231.0], [3.3, 233.0], [3.4, 233.0], [3.5, 234.0], [3.6, 240.0], [3.7, 247.0], [3.8, 247.0], [3.9, 247.0], [4.0, 252.0], [4.1, 252.0], [4.2, 252.0], [4.3, 253.0], [4.4, 253.0], [4.5, 256.0], [4.6, 256.0], [4.7, 256.0], [4.8, 257.0], [4.9, 268.0], [5.0, 268.0], [5.1, 270.0], [5.2, 271.0], [5.3, 271.0], [5.4, 272.0], [5.5, 275.0], [5.6, 277.0], [5.7, 277.0], [5.8, 277.0], [5.9, 278.0], [6.0, 282.0], [6.1, 282.0], [6.2, 286.0], [6.3, 289.0], [6.4, 291.0], [6.5, 291.0], [6.6, 292.0], [6.7, 293.0], [6.8, 293.0], [6.9, 293.0], [7.0, 294.0], [7.1, 294.0], [7.2, 294.0], [7.3, 298.0], [7.4, 299.0], [7.5, 299.0], [7.6, 299.0], [7.7, 300.0], [7.8, 300.0], [7.9, 300.0], [8.0, 300.0], [8.1, 305.0], [8.2, 305.0], [8.3, 311.0], [8.4, 311.0], [8.5, 313.0], [8.6, 313.0], [8.7, 313.0], [8.8, 316.0], [8.9, 317.0], [9.0, 319.0], [9.1, 319.0], [9.2, 320.0], [9.3, 320.0], [9.4, 320.0], [9.5, 320.0], [9.6, 323.0], [9.7, 325.0], [9.8, 326.0], [9.9, 326.0], [10.0, 326.0], [10.1, 326.0], [10.2, 326.0], [10.3, 326.0], [10.4, 327.0], [10.5, 327.0], [10.6, 327.0], [10.7, 327.0], [10.8, 328.0], [10.9, 328.0], [11.0, 328.0], [11.1, 328.0], [11.2, 329.0], [11.3, 331.0], [11.4, 331.0], [11.5, 334.0], [11.6, 335.0], [11.7, 335.0], [11.8, 336.0], [11.9, 337.0], [12.0, 337.0], [12.1, 337.0], [12.2, 337.0], [12.3, 338.0], [12.4, 339.0], [12.5, 339.0], [12.6, 339.0], [12.7, 340.0], [12.8, 341.0], [12.9, 341.0], [13.0, 341.0], [13.1, 342.0], [13.2, 342.0], [13.3, 342.0], [13.4, 342.0], [13.5, 342.0], [13.6, 342.0], [13.7, 344.0], [13.8, 344.0], [13.9, 345.0], [14.0, 345.0], [14.1, 346.0], [14.2, 346.0], [14.3, 346.0], [14.4, 346.0], [14.5, 346.0], [14.6, 349.0], [14.7, 351.0], [14.8, 351.0], [14.9, 351.0], [15.0, 352.0], [15.1, 352.0], [15.2, 353.0], [15.3, 354.0], [15.4, 354.0], [15.5, 354.0], [15.6, 355.0], [15.7, 355.0], [15.8, 356.0], [15.9, 356.0], [16.0, 357.0], [16.1, 357.0], [16.2, 358.0], [16.3, 358.0], [16.4, 359.0], [16.5, 359.0], [16.6, 360.0], [16.7, 360.0], [16.8, 361.0], [16.9, 361.0], [17.0, 361.0], [17.1, 363.0], [17.2, 364.0], [17.3, 364.0], [17.4, 364.0], [17.5, 365.0], [17.6, 367.0], [17.7, 368.0], [17.8, 368.0], [17.9, 368.0], [18.0, 369.0], [18.1, 370.0], [18.2, 370.0], [18.3, 371.0], [18.4, 372.0], [18.5, 372.0], [18.6, 372.0], [18.7, 372.0], [18.8, 373.0], [18.9, 373.0], [19.0, 373.0], [19.1, 373.0], [19.2, 373.0], [19.3, 373.0], [19.4, 374.0], [19.5, 374.0], [19.6, 374.0], [19.7, 374.0], [19.8, 375.0], [19.9, 377.0], [20.0, 379.0], [20.1, 379.0], [20.2, 381.0], [20.3, 381.0], [20.4, 381.0], [20.5, 382.0], [20.6, 382.0], [20.7, 383.0], [20.8, 383.0], [20.9, 383.0], [21.0, 384.0], [21.1, 384.0], [21.2, 384.0], [21.3, 384.0], [21.4, 384.0], [21.5, 386.0], [21.6, 386.0], [21.7, 386.0], [21.8, 388.0], [21.9, 388.0], [22.0, 390.0], [22.1, 390.0], [22.2, 391.0], [22.3, 391.0], [22.4, 392.0], [22.5, 392.0], [22.6, 392.0], [22.7, 392.0], [22.8, 392.0], [22.9, 393.0], [23.0, 393.0], [23.1, 393.0], [23.2, 393.0], [23.3, 395.0], [23.4, 395.0], [23.5, 395.0], [23.6, 396.0], [23.7, 397.0], [23.8, 397.0], [23.9, 399.0], [24.0, 400.0], [24.1, 401.0], [24.2, 401.0], [24.3, 401.0], [24.4, 402.0], [24.5, 403.0], [24.6, 403.0], [24.7, 403.0], [24.8, 404.0], [24.9, 404.0], [25.0, 404.0], [25.1, 404.0], [25.2, 405.0], [25.3, 405.0], [25.4, 407.0], [25.5, 407.0], [25.6, 407.0], [25.7, 407.0], [25.8, 408.0], [25.9, 412.0], [26.0, 413.0], [26.1, 413.0], [26.2, 413.0], [26.3, 413.0], [26.4, 413.0], [26.5, 413.0], [26.6, 414.0], [26.7, 414.0], [26.8, 414.0], [26.9, 414.0], [27.0, 415.0], [27.1, 415.0], [27.2, 415.0], [27.3, 415.0], [27.4, 416.0], [27.5, 416.0], [27.6, 416.0], [27.7, 416.0], [27.8, 417.0], [27.9, 417.0], [28.0, 417.0], [28.1, 418.0], [28.2, 419.0], [28.3, 419.0], [28.4, 419.0], [28.5, 419.0], [28.6, 420.0], [28.7, 420.0], [28.8, 422.0], [28.9, 422.0], [29.0, 425.0], [29.1, 425.0], [29.2, 425.0], [29.3, 425.0], [29.4, 425.0], [29.5, 425.0], [29.6, 425.0], [29.7, 426.0], [29.8, 426.0], [29.9, 426.0], [30.0, 426.0], [30.1, 427.0], [30.2, 427.0], [30.3, 428.0], [30.4, 428.0], [30.5, 428.0], [30.6, 428.0], [30.7, 428.0], [30.8, 429.0], [30.9, 429.0], [31.0, 429.0], [31.1, 429.0], [31.2, 430.0], [31.3, 430.0], [31.4, 430.0], [31.5, 430.0], [31.6, 431.0], [31.7, 431.0], [31.8, 431.0], [31.9, 431.0], [32.0, 431.0], [32.1, 431.0], [32.2, 432.0], [32.3, 433.0], [32.4, 433.0], [32.5, 433.0], [32.6, 433.0], [32.7, 434.0], [32.8, 434.0], [32.9, 434.0], [33.0, 435.0], [33.1, 435.0], [33.2, 435.0], [33.3, 435.0], [33.4, 436.0], [33.5, 437.0], [33.6, 437.0], [33.7, 438.0], [33.8, 438.0], [33.9, 438.0], [34.0, 438.0], [34.1, 439.0], [34.2, 439.0], [34.3, 439.0], [34.4, 439.0], [34.5, 439.0], [34.6, 440.0], [34.7, 440.0], [34.8, 440.0], [34.9, 440.0], [35.0, 441.0], [35.1, 441.0], [35.2, 441.0], [35.3, 441.0], [35.4, 444.0], [35.5, 444.0], [35.6, 444.0], [35.7, 444.0], [35.8, 444.0], [35.9, 444.0], [36.0, 445.0], [36.1, 445.0], [36.2, 445.0], [36.3, 445.0], [36.4, 446.0], [36.5, 447.0], [36.6, 447.0], [36.7, 447.0], [36.8, 448.0], [36.9, 448.0], [37.0, 448.0], [37.1, 449.0], [37.2, 450.0], [37.3, 451.0], [37.4, 451.0], [37.5, 451.0], [37.6, 452.0], [37.7, 452.0], [37.8, 452.0], [37.9, 452.0], [38.0, 452.0], [38.1, 453.0], [38.2, 453.0], [38.3, 453.0], [38.4, 454.0], [38.5, 454.0], [38.6, 455.0], [38.7, 456.0], [38.8, 456.0], [38.9, 456.0], [39.0, 457.0], [39.1, 459.0], [39.2, 459.0], [39.3, 459.0], [39.4, 460.0], [39.5, 460.0], [39.6, 461.0], [39.7, 461.0], [39.8, 461.0], [39.9, 461.0], [40.0, 462.0], [40.1, 462.0], [40.2, 462.0], [40.3, 463.0], [40.4, 463.0], [40.5, 463.0], [40.6, 463.0], [40.7, 463.0], [40.8, 463.0], [40.9, 464.0], [41.0, 464.0], [41.1, 465.0], [41.2, 465.0], [41.3, 466.0], [41.4, 466.0], [41.5, 466.0], [41.6, 466.0], [41.7, 466.0], [41.8, 466.0], [41.9, 466.0], [42.0, 466.0], [42.1, 467.0], [42.2, 467.0], [42.3, 467.0], [42.4, 468.0], [42.5, 470.0], [42.6, 470.0], [42.7, 470.0], [42.8, 470.0], [42.9, 471.0], [43.0, 471.0], [43.1, 471.0], [43.2, 471.0], [43.3, 472.0], [43.4, 472.0], [43.5, 473.0], [43.6, 473.0], [43.7, 474.0], [43.8, 474.0], [43.9, 474.0], [44.0, 476.0], [44.1, 476.0], [44.2, 476.0], [44.3, 478.0], [44.4, 479.0], [44.5, 480.0], [44.6, 480.0], [44.7, 481.0], [44.8, 481.0], [44.9, 482.0], [45.0, 482.0], [45.1, 483.0], [45.2, 484.0], [45.3, 484.0], [45.4, 485.0], [45.5, 486.0], [45.6, 487.0], [45.7, 487.0], [45.8, 488.0], [45.9, 488.0], [46.0, 489.0], [46.1, 489.0], [46.2, 489.0], [46.3, 489.0], [46.4, 489.0], [46.5, 489.0], [46.6, 490.0], [46.7, 492.0], [46.8, 492.0], [46.9, 492.0], [47.0, 492.0], [47.1, 495.0], [47.2, 495.0], [47.3, 495.0], [47.4, 495.0], [47.5, 496.0], [47.6, 496.0], [47.7, 496.0], [47.8, 496.0], [47.9, 496.0], [48.0, 496.0], [48.1, 497.0], [48.2, 497.0], [48.3, 497.0], [48.4, 497.0], [48.5, 497.0], [48.6, 497.0], [48.7, 497.0], [48.8, 498.0], [48.9, 500.0], [49.0, 500.0], [49.1, 500.0], [49.2, 501.0], [49.3, 502.0], [49.4, 502.0], [49.5, 502.0], [49.6, 502.0], [49.7, 503.0], [49.8, 503.0], [49.9, 503.0], [50.0, 504.0], [50.1, 505.0], [50.2, 505.0], [50.3, 505.0], [50.4, 506.0], [50.5, 506.0], [50.6, 506.0], [50.7, 507.0], [50.8, 507.0], [50.9, 507.0], [51.0, 507.0], [51.1, 509.0], [51.2, 509.0], [51.3, 509.0], [51.4, 509.0], [51.5, 510.0], [51.6, 510.0], [51.7, 510.0], [51.8, 510.0], [51.9, 511.0], [52.0, 511.0], [52.1, 511.0], [52.2, 512.0], [52.3, 512.0], [52.4, 513.0], [52.5, 513.0], [52.6, 514.0], [52.7, 514.0], [52.8, 514.0], [52.9, 514.0], [53.0, 514.0], [53.1, 515.0], [53.2, 516.0], [53.3, 516.0], [53.4, 517.0], [53.5, 517.0], [53.6, 517.0], [53.7, 517.0], [53.8, 517.0], [53.9, 518.0], [54.0, 518.0], [54.1, 519.0], [54.2, 519.0], [54.3, 520.0], [54.4, 520.0], [54.5, 521.0], [54.6, 522.0], [54.7, 523.0], [54.8, 523.0], [54.9, 523.0], [55.0, 523.0], [55.1, 523.0], [55.2, 525.0], [55.3, 525.0], [55.4, 525.0], [55.5, 525.0], [55.6, 526.0], [55.7, 527.0], [55.8, 527.0], [55.9, 527.0], [56.0, 528.0], [56.1, 528.0], [56.2, 528.0], [56.3, 528.0], [56.4, 529.0], [56.5, 529.0], [56.6, 530.0], [56.7, 530.0], [56.8, 530.0], [56.9, 531.0], [57.0, 531.0], [57.1, 531.0], [57.2, 531.0], [57.3, 532.0], [57.4, 532.0], [57.5, 532.0], [57.6, 532.0], [57.7, 532.0], [57.8, 532.0], [57.9, 533.0], [58.0, 534.0], [58.1, 534.0], [58.2, 534.0], [58.3, 534.0], [58.4, 534.0], [58.5, 534.0], [58.6, 534.0], [58.7, 538.0], [58.8, 538.0], [58.9, 538.0], [59.0, 540.0], [59.1, 540.0], [59.2, 540.0], [59.3, 540.0], [59.4, 541.0], [59.5, 541.0], [59.6, 541.0], [59.7, 541.0], [59.8, 543.0], [59.9, 543.0], [60.0, 543.0], [60.1, 543.0], [60.2, 543.0], [60.3, 544.0], [60.4, 544.0], [60.5, 544.0], [60.6, 545.0], [60.7, 545.0], [60.8, 545.0], [60.9, 545.0], [61.0, 546.0], [61.1, 546.0], [61.2, 546.0], [61.3, 547.0], [61.4, 547.0], [61.5, 549.0], [61.6, 549.0], [61.7, 549.0], [61.8, 549.0], [61.9, 549.0], [62.0, 550.0], [62.1, 550.0], [62.2, 550.0], [62.3, 550.0], [62.4, 551.0], [62.5, 551.0], [62.6, 551.0], [62.7, 551.0], [62.8, 551.0], [62.9, 553.0], [63.0, 554.0], [63.1, 554.0], [63.2, 554.0], [63.3, 554.0], [63.4, 554.0], [63.5, 555.0], [63.6, 555.0], [63.7, 555.0], [63.8, 555.0], [63.9, 556.0], [64.0, 557.0], [64.1, 558.0], [64.2, 558.0], [64.3, 559.0], [64.4, 559.0], [64.5, 560.0], [64.6, 560.0], [64.7, 561.0], [64.8, 562.0], [64.9, 562.0], [65.0, 562.0], [65.1, 562.0], [65.2, 562.0], [65.3, 562.0], [65.4, 563.0], [65.5, 563.0], [65.6, 564.0], [65.7, 564.0], [65.8, 564.0], [65.9, 564.0], [66.0, 565.0], [66.1, 565.0], [66.2, 566.0], [66.3, 566.0], [66.4, 566.0], [66.5, 566.0], [66.6, 567.0], [66.7, 567.0], [66.8, 567.0], [66.9, 568.0], [67.0, 571.0], [67.1, 573.0], [67.2, 573.0], [67.3, 575.0], [67.4, 575.0], [67.5, 576.0], [67.6, 576.0], [67.7, 577.0], [67.8, 577.0], [67.9, 578.0], [68.0, 578.0], [68.1, 580.0], [68.2, 581.0], [68.3, 581.0], [68.4, 581.0], [68.5, 582.0], [68.6, 582.0], [68.7, 582.0], [68.8, 584.0], [68.9, 585.0], [69.0, 586.0], [69.1, 586.0], [69.2, 586.0], [69.3, 587.0], [69.4, 588.0], [69.5, 588.0], [69.6, 589.0], [69.7, 591.0], [69.8, 591.0], [69.9, 591.0], [70.0, 591.0], [70.1, 592.0], [70.2, 592.0], [70.3, 593.0], [70.4, 594.0], [70.5, 595.0], [70.6, 595.0], [70.7, 598.0], [70.8, 598.0], [70.9, 599.0], [71.0, 599.0], [71.1, 599.0], [71.2, 600.0], [71.3, 600.0], [71.4, 600.0], [71.5, 600.0], [71.6, 602.0], [71.7, 602.0], [71.8, 602.0], [71.9, 602.0], [72.0, 603.0], [72.1, 603.0], [72.2, 605.0], [72.3, 606.0], [72.4, 606.0], [72.5, 606.0], [72.6, 608.0], [72.7, 609.0], [72.8, 611.0], [72.9, 611.0], [73.0, 611.0], [73.1, 611.0], [73.2, 612.0], [73.3, 612.0], [73.4, 612.0], [73.5, 617.0], [73.6, 617.0], [73.7, 617.0], [73.8, 619.0], [73.9, 620.0], [74.0, 620.0], [74.1, 620.0], [74.2, 620.0], [74.3, 621.0], [74.4, 621.0], [74.5, 621.0], [74.6, 621.0], [74.7, 622.0], [74.8, 622.0], [74.9, 622.0], [75.0, 623.0], [75.1, 623.0], [75.2, 623.0], [75.3, 624.0], [75.4, 624.0], [75.5, 624.0], [75.6, 626.0], [75.7, 626.0], [75.8, 628.0], [75.9, 628.0], [76.0, 628.0], [76.1, 629.0], [76.2, 629.0], [76.3, 629.0], [76.4, 631.0], [76.5, 631.0], [76.6, 631.0], [76.7, 631.0], [76.8, 633.0], [76.9, 634.0], [77.0, 634.0], [77.1, 634.0], [77.2, 635.0], [77.3, 636.0], [77.4, 636.0], [77.5, 637.0], [77.6, 641.0], [77.7, 642.0], [77.8, 642.0], [77.9, 644.0], [78.0, 644.0], [78.1, 644.0], [78.2, 644.0], [78.3, 644.0], [78.4, 645.0], [78.5, 645.0], [78.6, 646.0], [78.7, 647.0], [78.8, 647.0], [78.9, 647.0], [79.0, 647.0], [79.1, 647.0], [79.2, 648.0], [79.3, 648.0], [79.4, 649.0], [79.5, 649.0], [79.6, 649.0], [79.7, 649.0], [79.8, 650.0], [79.9, 651.0], [80.0, 651.0], [80.1, 651.0], [80.2, 653.0], [80.3, 653.0], [80.4, 653.0], [80.5, 653.0], [80.6, 656.0], [80.7, 666.0], [80.8, 666.0], [80.9, 666.0], [81.0, 667.0], [81.1, 667.0], [81.2, 667.0], [81.3, 668.0], [81.4, 668.0], [81.5, 669.0], [81.6, 669.0], [81.7, 670.0], [81.8, 671.0], [81.9, 671.0], [82.0, 673.0], [82.1, 673.0], [82.2, 675.0], [82.3, 675.0], [82.4, 676.0], [82.5, 680.0], [82.6, 681.0], [82.7, 681.0], [82.8, 685.0], [82.9, 687.0], [83.0, 691.0], [83.1, 691.0], [83.2, 694.0], [83.3, 695.0], [83.4, 695.0], [83.5, 696.0], [83.6, 701.0], [83.7, 701.0], [83.8, 701.0], [83.9, 702.0], [84.0, 702.0], [84.1, 702.0], [84.2, 702.0], [84.3, 703.0], [84.4, 706.0], [84.5, 708.0], [84.6, 708.0], [84.7, 708.0], [84.8, 711.0], [84.9, 712.0], [85.0, 712.0], [85.1, 712.0], [85.2, 716.0], [85.3, 716.0], [85.4, 718.0], [85.5, 719.0], [85.6, 720.0], [85.7, 720.0], [85.8, 722.0], [85.9, 722.0], [86.0, 732.0], [86.1, 732.0], [86.2, 733.0], [86.3, 736.0], [86.4, 739.0], [86.5, 739.0], [86.6, 741.0], [86.7, 742.0], [86.8, 742.0], [86.9, 742.0], [87.0, 742.0], [87.1, 747.0], [87.2, 747.0], [87.3, 749.0], [87.4, 750.0], [87.5, 750.0], [87.6, 750.0], [87.7, 752.0], [87.8, 755.0], [87.9, 755.0], [88.0, 755.0], [88.1, 758.0], [88.2, 761.0], [88.3, 776.0], [88.4, 776.0], [88.5, 780.0], [88.6, 782.0], [88.7, 782.0], [88.8, 784.0], [88.9, 789.0], [89.0, 792.0], [89.1, 792.0], [89.2, 792.0], [89.3, 794.0], [89.4, 795.0], [89.5, 795.0], [89.6, 799.0], [89.7, 803.0], [89.8, 807.0], [89.9, 807.0], [90.0, 809.0], [90.1, 811.0], [90.2, 811.0], [90.3, 819.0], [90.4, 822.0], [90.5, 825.0], [90.6, 825.0], [90.7, 832.0], [90.8, 833.0], [90.9, 834.0], [91.0, 834.0], [91.1, 836.0], [91.2, 836.0], [91.3, 840.0], [91.4, 840.0], [91.5, 847.0], [91.6, 850.0], [91.7, 850.0], [91.8, 856.0], [91.9, 861.0], [92.0, 867.0], [92.1, 867.0], [92.2, 868.0], [92.3, 869.0], [92.4, 873.0], [92.5, 873.0], [92.6, 880.0], [92.7, 882.0], [92.8, 884.0], [92.9, 884.0], [93.0, 890.0], [93.1, 890.0], [93.2, 896.0], [93.3, 896.0], [93.4, 897.0], [93.5, 905.0], [93.6, 905.0], [93.7, 910.0], [93.8, 914.0], [93.9, 923.0], [94.0, 923.0], [94.1, 925.0], [94.2, 930.0], [94.3, 933.0], [94.4, 933.0], [94.5, 939.0], [94.6, 940.0], [94.7, 946.0], [94.8, 946.0], [94.9, 959.0], [95.0, 961.0], [95.1, 961.0], [95.2, 963.0], [95.3, 979.0], [95.4, 979.0], [95.5, 979.0], [95.6, 980.0], [95.7, 985.0], [95.8, 986.0], [95.9, 986.0], [96.0, 1001.0], [96.1, 1018.0], [96.2, 1025.0], [96.3, 1025.0], [96.4, 1052.0], [96.5, 1063.0], [96.6, 1104.0], [96.7, 1104.0], [96.8, 1120.0], [96.9, 1138.0], [97.0, 1138.0], [97.1, 1142.0], [97.2, 1184.0], [97.3, 1203.0], [97.4, 1203.0], [97.5, 1227.0], [97.6, 1232.0], [97.7, 1240.0], [97.8, 1240.0], [97.9, 1279.0], [98.0, 1305.0], [98.1, 1356.0], [98.2, 1356.0], [98.3, 1438.0], [98.4, 1472.0], [98.5, 1472.0], [98.6, 1516.0], [98.7, 1540.0], [98.8, 1548.0], [98.9, 1548.0], [99.0, 1571.0], [99.1, 1632.0], [99.2, 1736.0], [99.3, 1736.0], [99.4, 1994.0], [99.5, 2153.0], [99.6, 2562.0], [99.7, 2562.0], [99.8, 2851.0], [99.9, 3242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 183.0, "series": [{"data": [[2100.0, 1.0], [600.0, 91.0], [2500.0, 1.0], [700.0, 45.0], [2800.0, 1.0], [200.0, 47.0], [3200.0, 1.0], [800.0, 28.0], [900.0, 18.0], [1000.0, 5.0], [1100.0, 5.0], [300.0, 120.0], [1200.0, 5.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 4.0], [1600.0, 1.0], [400.0, 183.0], [100.0, 9.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 164.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 363.0, "series": [{"data": [[0.0, 361.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 363.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.772727272727273, "minX": 1.60231464E12, "maxY": 9.990689013035379, "series": [{"data": [[1.60231464E12, 9.990689013035379], [1.6023147E12, 9.772727272727273]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023147E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 298.0, "minX": 1.0, "maxY": 703.0, "series": [{"data": [[8.0, 365.0], [4.0, 298.0], [2.0, 328.0], [1.0, 703.0], [9.0, 423.5], [10.0, 553.2582872928165], [5.0, 393.0], [6.0, 340.0], [3.0, 327.0], [7.0, 431.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93197278911564, 550.9265306122452]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1521.8333333333333, "minX": 1.60231464E12, "maxY": 1559851.3333333333, "series": [{"data": [[1.60231464E12, 1559851.3333333333], [1.6023147E12, 474194.98333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60231464E12, 4148.2], [1.6023147E12, 1521.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023147E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 528.0000000000001, "minX": 1.60231464E12, "maxY": 559.3798882681567, "series": [{"data": [[1.60231464E12, 559.3798882681567], [1.6023147E12, 528.0000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023147E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 526.5808080808081, "minX": 1.60231464E12, "maxY": 558.1266294227183, "series": [{"data": [[1.60231464E12, 558.1266294227183], [1.6023147E12, 526.5808080808081]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023147E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60231464E12, "maxY": 0.18621973929236468, "series": [{"data": [[1.60231464E12, 0.18621973929236468], [1.6023147E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023147E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60231464E12, "maxY": 3242.0, "series": [{"data": [[1.60231464E12, 3242.0], [1.6023147E12, 1736.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60231464E12, 194.8419998717308], [1.6023147E12, 250.95499976277353]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60231464E12, 195.32620005130767], [1.6023147E12, 251.8505000948906]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60231464E12, 195.1109999358654], [1.6023147E12, 251.45249988138676]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60231464E12, 175.0], [1.6023147E12, 247.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60231464E12, 509.0], [1.6023147E12, 489.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023147E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 325.0, "minX": 2.0, "maxY": 1109.5, "series": [{"data": [[2.0, 325.0], [8.0, 355.5], [9.0, 719.0], [14.0, 593.0], [15.0, 588.0], [4.0, 1109.5], [16.0, 565.5], [17.0, 549.5], [18.0, 517.5], [19.0, 531.5], [20.0, 506.0], [21.0, 450.0], [22.0, 453.5], [23.0, 384.0], [25.0, 429.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 323.0, "minX": 2.0, "maxY": 1108.0, "series": [{"data": [[2.0, 323.0], [8.0, 355.0], [9.0, 718.0], [14.0, 592.5], [15.0, 588.0], [4.0, 1108.0], [16.0, 564.5], [17.0, 549.0], [18.0, 517.0], [19.0, 531.0], [20.0, 505.0], [21.0, 449.0], [22.0, 452.0], [23.0, 384.0], [25.0, 429.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1333333333333333, "minX": 1.60231464E12, "maxY": 9.116666666666667, "series": [{"data": [[1.60231464E12, 9.116666666666667], [1.6023147E12, 3.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023147E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60231464E12, "maxY": 8.95, "series": [{"data": [[1.60231464E12, 8.95], [1.6023147E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023147E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60231464E12, "maxY": 8.95, "series": [{"data": [[1.60231464E12, 8.95], [1.6023147E12, 3.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023147E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.60231464E12, "maxY": 8.95, "series": [{"data": [[1.60231464E12, 8.95], [1.6023147E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023147E12, "title": "Total Transactions Per Second"}},
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

