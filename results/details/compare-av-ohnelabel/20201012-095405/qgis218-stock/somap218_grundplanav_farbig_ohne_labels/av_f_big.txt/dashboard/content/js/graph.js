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
        data: {"result": {"minY": 182.0, "minX": 0.0, "maxY": 3384.0, "series": [{"data": [[0.0, 182.0], [0.1, 182.0], [0.2, 188.0], [0.3, 192.0], [0.4, 192.0], [0.5, 196.0], [0.6, 206.0], [0.7, 209.0], [0.8, 209.0], [0.9, 210.0], [1.0, 213.0], [1.1, 214.0], [1.2, 214.0], [1.3, 215.0], [1.4, 216.0], [1.5, 216.0], [1.6, 216.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 225.0], [2.1, 225.0], [2.2, 227.0], [2.3, 227.0], [2.4, 234.0], [2.5, 235.0], [2.6, 240.0], [2.7, 240.0], [2.8, 242.0], [2.9, 248.0], [3.0, 251.0], [3.1, 251.0], [3.2, 253.0], [3.3, 255.0], [3.4, 255.0], [3.5, 256.0], [3.6, 261.0], [3.7, 261.0], [3.8, 261.0], [3.9, 261.0], [4.0, 265.0], [4.1, 266.0], [4.2, 266.0], [4.3, 272.0], [4.4, 272.0], [4.5, 273.0], [4.6, 273.0], [4.7, 280.0], [4.8, 281.0], [4.9, 281.0], [5.0, 281.0], [5.1, 282.0], [5.2, 284.0], [5.3, 284.0], [5.4, 285.0], [5.5, 289.0], [5.6, 291.0], [5.7, 291.0], [5.8, 294.0], [5.9, 295.0], [6.0, 297.0], [6.1, 297.0], [6.2, 299.0], [6.3, 299.0], [6.4, 300.0], [6.5, 300.0], [6.6, 304.0], [6.7, 305.0], [6.8, 305.0], [6.9, 309.0], [7.0, 309.0], [7.1, 311.0], [7.2, 311.0], [7.3, 313.0], [7.4, 316.0], [7.5, 317.0], [7.6, 317.0], [7.7, 318.0], [7.8, 319.0], [7.9, 320.0], [8.0, 320.0], [8.1, 320.0], [8.2, 320.0], [8.3, 321.0], [8.4, 321.0], [8.5, 321.0], [8.6, 323.0], [8.7, 323.0], [8.8, 324.0], [8.9, 327.0], [9.0, 327.0], [9.1, 327.0], [9.2, 327.0], [9.3, 328.0], [9.4, 328.0], [9.5, 328.0], [9.6, 329.0], [9.7, 331.0], [9.8, 332.0], [9.9, 332.0], [10.0, 333.0], [10.1, 333.0], [10.2, 333.0], [10.3, 334.0], [10.4, 334.0], [10.5, 334.0], [10.6, 334.0], [10.7, 336.0], [10.8, 337.0], [10.9, 338.0], [11.0, 338.0], [11.1, 339.0], [11.2, 340.0], [11.3, 345.0], [11.4, 345.0], [11.5, 346.0], [11.6, 346.0], [11.7, 346.0], [11.8, 348.0], [11.9, 348.0], [12.0, 348.0], [12.1, 348.0], [12.2, 350.0], [12.3, 351.0], [12.4, 351.0], [12.5, 351.0], [12.6, 352.0], [12.7, 353.0], [12.8, 354.0], [12.9, 354.0], [13.0, 355.0], [13.1, 355.0], [13.2, 355.0], [13.3, 355.0], [13.4, 356.0], [13.5, 356.0], [13.6, 356.0], [13.7, 356.0], [13.8, 357.0], [13.9, 357.0], [14.0, 357.0], [14.1, 357.0], [14.2, 359.0], [14.3, 360.0], [14.4, 360.0], [14.5, 360.0], [14.6, 361.0], [14.7, 361.0], [14.8, 361.0], [14.9, 361.0], [15.0, 361.0], [15.1, 361.0], [15.2, 364.0], [15.3, 364.0], [15.4, 364.0], [15.5, 364.0], [15.6, 365.0], [15.7, 365.0], [15.8, 365.0], [15.9, 365.0], [16.0, 366.0], [16.1, 366.0], [16.2, 367.0], [16.3, 367.0], [16.4, 367.0], [16.5, 367.0], [16.6, 368.0], [16.7, 368.0], [16.8, 368.0], [16.9, 368.0], [17.0, 368.0], [17.1, 369.0], [17.2, 369.0], [17.3, 370.0], [17.4, 370.0], [17.5, 371.0], [17.6, 372.0], [17.7, 372.0], [17.8, 372.0], [17.9, 373.0], [18.0, 373.0], [18.1, 373.0], [18.2, 373.0], [18.3, 373.0], [18.4, 374.0], [18.5, 374.0], [18.6, 375.0], [18.7, 375.0], [18.8, 375.0], [18.9, 375.0], [19.0, 375.0], [19.1, 376.0], [19.2, 378.0], [19.3, 378.0], [19.4, 378.0], [19.5, 378.0], [19.6, 379.0], [19.7, 379.0], [19.8, 379.0], [19.9, 379.0], [20.0, 380.0], [20.1, 380.0], [20.2, 380.0], [20.3, 381.0], [20.4, 381.0], [20.5, 381.0], [20.6, 383.0], [20.7, 385.0], [20.8, 385.0], [20.9, 388.0], [21.0, 388.0], [21.1, 388.0], [21.2, 388.0], [21.3, 389.0], [21.4, 389.0], [21.5, 390.0], [21.6, 390.0], [21.7, 390.0], [21.8, 390.0], [21.9, 390.0], [22.0, 392.0], [22.1, 392.0], [22.2, 394.0], [22.3, 394.0], [22.4, 395.0], [22.5, 395.0], [22.6, 396.0], [22.7, 396.0], [22.8, 396.0], [22.9, 397.0], [23.0, 399.0], [23.1, 399.0], [23.2, 399.0], [23.3, 399.0], [23.4, 399.0], [23.5, 399.0], [23.6, 400.0], [23.7, 400.0], [23.8, 400.0], [23.9, 401.0], [24.0, 401.0], [24.1, 402.0], [24.2, 402.0], [24.3, 402.0], [24.4, 403.0], [24.5, 403.0], [24.6, 403.0], [24.7, 404.0], [24.8, 404.0], [24.9, 404.0], [25.0, 404.0], [25.1, 405.0], [25.2, 405.0], [25.3, 405.0], [25.4, 405.0], [25.5, 406.0], [25.6, 406.0], [25.7, 406.0], [25.8, 406.0], [25.9, 407.0], [26.0, 407.0], [26.1, 407.0], [26.2, 407.0], [26.3, 408.0], [26.4, 409.0], [26.5, 409.0], [26.6, 410.0], [26.7, 411.0], [26.8, 411.0], [26.9, 411.0], [27.0, 412.0], [27.1, 412.0], [27.2, 412.0], [27.3, 412.0], [27.4, 413.0], [27.5, 413.0], [27.6, 413.0], [27.7, 414.0], [27.8, 415.0], [27.9, 416.0], [28.0, 416.0], [28.1, 416.0], [28.2, 418.0], [28.3, 419.0], [28.4, 419.0], [28.5, 419.0], [28.6, 420.0], [28.7, 420.0], [28.8, 420.0], [28.9, 421.0], [29.0, 421.0], [29.1, 421.0], [29.2, 421.0], [29.3, 422.0], [29.4, 422.0], [29.5, 422.0], [29.6, 423.0], [29.7, 423.0], [29.8, 424.0], [29.9, 424.0], [30.0, 424.0], [30.1, 424.0], [30.2, 424.0], [30.3, 425.0], [30.4, 425.0], [30.5, 426.0], [30.6, 426.0], [30.7, 426.0], [30.8, 426.0], [30.9, 426.0], [31.0, 426.0], [31.1, 426.0], [31.2, 427.0], [31.3, 427.0], [31.4, 427.0], [31.5, 429.0], [31.6, 429.0], [31.7, 429.0], [31.8, 430.0], [31.9, 431.0], [32.0, 432.0], [32.1, 432.0], [32.2, 432.0], [32.3, 433.0], [32.4, 433.0], [32.5, 433.0], [32.6, 433.0], [32.7, 434.0], [32.8, 436.0], [32.9, 436.0], [33.0, 436.0], [33.1, 438.0], [33.2, 438.0], [33.3, 438.0], [33.4, 438.0], [33.5, 439.0], [33.6, 439.0], [33.7, 439.0], [33.8, 440.0], [33.9, 440.0], [34.0, 440.0], [34.1, 440.0], [34.2, 441.0], [34.3, 441.0], [34.4, 441.0], [34.5, 441.0], [34.6, 444.0], [34.7, 445.0], [34.8, 445.0], [34.9, 446.0], [35.0, 447.0], [35.1, 447.0], [35.2, 448.0], [35.3, 448.0], [35.4, 448.0], [35.5, 448.0], [35.6, 449.0], [35.7, 450.0], [35.8, 450.0], [35.9, 450.0], [36.0, 450.0], [36.1, 451.0], [36.2, 451.0], [36.3, 451.0], [36.4, 451.0], [36.5, 452.0], [36.6, 454.0], [36.7, 454.0], [36.8, 454.0], [36.9, 454.0], [37.0, 454.0], [37.1, 454.0], [37.2, 455.0], [37.3, 455.0], [37.4, 455.0], [37.5, 455.0], [37.6, 455.0], [37.7, 456.0], [37.8, 456.0], [37.9, 456.0], [38.0, 457.0], [38.1, 458.0], [38.2, 458.0], [38.3, 458.0], [38.4, 458.0], [38.5, 458.0], [38.6, 459.0], [38.7, 459.0], [38.8, 460.0], [38.9, 460.0], [39.0, 460.0], [39.1, 461.0], [39.2, 461.0], [39.3, 461.0], [39.4, 461.0], [39.5, 462.0], [39.6, 463.0], [39.7, 463.0], [39.8, 463.0], [39.9, 464.0], [40.0, 465.0], [40.1, 465.0], [40.2, 465.0], [40.3, 465.0], [40.4, 465.0], [40.5, 465.0], [40.6, 468.0], [40.7, 468.0], [40.8, 468.0], [40.9, 468.0], [41.0, 469.0], [41.1, 471.0], [41.2, 471.0], [41.3, 471.0], [41.4, 471.0], [41.5, 472.0], [41.6, 472.0], [41.7, 472.0], [41.8, 472.0], [41.9, 472.0], [42.0, 472.0], [42.1, 472.0], [42.2, 474.0], [42.3, 474.0], [42.4, 475.0], [42.5, 475.0], [42.6, 476.0], [42.7, 476.0], [42.8, 476.0], [42.9, 476.0], [43.0, 476.0], [43.1, 476.0], [43.2, 477.0], [43.3, 478.0], [43.4, 478.0], [43.5, 478.0], [43.6, 479.0], [43.7, 479.0], [43.8, 479.0], [43.9, 479.0], [44.0, 480.0], [44.1, 480.0], [44.2, 480.0], [44.3, 481.0], [44.4, 482.0], [44.5, 482.0], [44.6, 482.0], [44.7, 485.0], [44.8, 485.0], [44.9, 485.0], [45.0, 485.0], [45.1, 487.0], [45.2, 488.0], [45.3, 488.0], [45.4, 490.0], [45.5, 490.0], [45.6, 490.0], [45.7, 490.0], [45.8, 491.0], [45.9, 491.0], [46.0, 491.0], [46.1, 491.0], [46.2, 492.0], [46.3, 492.0], [46.4, 492.0], [46.5, 492.0], [46.6, 492.0], [46.7, 492.0], [46.8, 492.0], [46.9, 493.0], [47.0, 493.0], [47.1, 493.0], [47.2, 493.0], [47.3, 494.0], [47.4, 494.0], [47.5, 494.0], [47.6, 494.0], [47.7, 495.0], [47.8, 495.0], [47.9, 496.0], [48.0, 496.0], [48.1, 496.0], [48.2, 497.0], [48.3, 497.0], [48.4, 497.0], [48.5, 497.0], [48.6, 498.0], [48.7, 498.0], [48.8, 498.0], [48.9, 500.0], [49.0, 500.0], [49.1, 500.0], [49.2, 500.0], [49.3, 500.0], [49.4, 501.0], [49.5, 501.0], [49.6, 501.0], [49.7, 502.0], [49.8, 502.0], [49.9, 502.0], [50.0, 502.0], [50.1, 502.0], [50.2, 502.0], [50.3, 502.0], [50.4, 504.0], [50.5, 504.0], [50.6, 504.0], [50.7, 505.0], [50.8, 506.0], [50.9, 507.0], [51.0, 507.0], [51.1, 508.0], [51.2, 508.0], [51.3, 509.0], [51.4, 509.0], [51.5, 509.0], [51.6, 510.0], [51.7, 510.0], [51.8, 511.0], [51.9, 512.0], [52.0, 512.0], [52.1, 512.0], [52.2, 513.0], [52.3, 513.0], [52.4, 514.0], [52.5, 514.0], [52.6, 514.0], [52.7, 514.0], [52.8, 514.0], [52.9, 514.0], [53.0, 514.0], [53.1, 515.0], [53.2, 516.0], [53.3, 516.0], [53.4, 516.0], [53.5, 516.0], [53.6, 516.0], [53.7, 516.0], [53.8, 517.0], [53.9, 519.0], [54.0, 519.0], [54.1, 519.0], [54.2, 519.0], [54.3, 519.0], [54.4, 519.0], [54.5, 519.0], [54.6, 520.0], [54.7, 521.0], [54.8, 521.0], [54.9, 521.0], [55.0, 522.0], [55.1, 522.0], [55.2, 522.0], [55.3, 522.0], [55.4, 522.0], [55.5, 522.0], [55.6, 523.0], [55.7, 527.0], [55.8, 527.0], [55.9, 527.0], [56.0, 527.0], [56.1, 528.0], [56.2, 529.0], [56.3, 529.0], [56.4, 530.0], [56.5, 531.0], [56.6, 531.0], [56.7, 531.0], [56.8, 533.0], [56.9, 533.0], [57.0, 533.0], [57.1, 533.0], [57.2, 533.0], [57.3, 533.0], [57.4, 533.0], [57.5, 536.0], [57.6, 538.0], [57.7, 538.0], [57.8, 538.0], [57.9, 538.0], [58.0, 539.0], [58.1, 539.0], [58.2, 539.0], [58.3, 540.0], [58.4, 540.0], [58.5, 540.0], [58.6, 540.0], [58.7, 540.0], [58.8, 541.0], [58.9, 541.0], [59.0, 541.0], [59.1, 541.0], [59.2, 542.0], [59.3, 542.0], [59.4, 542.0], [59.5, 543.0], [59.6, 543.0], [59.7, 543.0], [59.8, 543.0], [59.9, 544.0], [60.0, 545.0], [60.1, 545.0], [60.2, 545.0], [60.3, 545.0], [60.4, 545.0], [60.5, 546.0], [60.6, 547.0], [60.7, 547.0], [60.8, 547.0], [60.9, 547.0], [61.0, 548.0], [61.1, 549.0], [61.2, 549.0], [61.3, 550.0], [61.4, 550.0], [61.5, 551.0], [61.6, 551.0], [61.7, 552.0], [61.8, 553.0], [61.9, 553.0], [62.0, 554.0], [62.1, 554.0], [62.2, 554.0], [62.3, 554.0], [62.4, 555.0], [62.5, 555.0], [62.6, 556.0], [62.7, 556.0], [62.8, 556.0], [62.9, 556.0], [63.0, 556.0], [63.1, 556.0], [63.2, 557.0], [63.3, 557.0], [63.4, 557.0], [63.5, 557.0], [63.6, 557.0], [63.7, 557.0], [63.8, 557.0], [63.9, 558.0], [64.0, 559.0], [64.1, 559.0], [64.2, 559.0], [64.3, 560.0], [64.4, 560.0], [64.5, 561.0], [64.6, 561.0], [64.7, 563.0], [64.8, 563.0], [64.9, 564.0], [65.0, 564.0], [65.1, 564.0], [65.2, 564.0], [65.3, 564.0], [65.4, 565.0], [65.5, 566.0], [65.6, 566.0], [65.7, 566.0], [65.8, 567.0], [65.9, 569.0], [66.0, 570.0], [66.1, 570.0], [66.2, 571.0], [66.3, 572.0], [66.4, 572.0], [66.5, 572.0], [66.6, 573.0], [66.7, 573.0], [66.8, 573.0], [66.9, 573.0], [67.0, 573.0], [67.1, 573.0], [67.2, 573.0], [67.3, 575.0], [67.4, 577.0], [67.5, 579.0], [67.6, 579.0], [67.7, 579.0], [67.8, 582.0], [67.9, 583.0], [68.0, 583.0], [68.1, 584.0], [68.2, 584.0], [68.3, 585.0], [68.4, 585.0], [68.5, 585.0], [68.6, 586.0], [68.7, 586.0], [68.8, 587.0], [68.9, 587.0], [69.0, 588.0], [69.1, 588.0], [69.2, 589.0], [69.3, 591.0], [69.4, 591.0], [69.5, 591.0], [69.6, 593.0], [69.7, 594.0], [69.8, 594.0], [69.9, 594.0], [70.0, 594.0], [70.1, 595.0], [70.2, 595.0], [70.3, 595.0], [70.4, 596.0], [70.5, 597.0], [70.6, 597.0], [70.7, 598.0], [70.8, 598.0], [70.9, 600.0], [71.0, 600.0], [71.1, 600.0], [71.2, 601.0], [71.3, 601.0], [71.4, 601.0], [71.5, 601.0], [71.6, 602.0], [71.7, 602.0], [71.8, 604.0], [71.9, 605.0], [72.0, 605.0], [72.1, 605.0], [72.2, 606.0], [72.3, 606.0], [72.4, 607.0], [72.5, 607.0], [72.6, 608.0], [72.7, 609.0], [72.8, 611.0], [72.9, 611.0], [73.0, 611.0], [73.1, 612.0], [73.2, 613.0], [73.3, 613.0], [73.4, 614.0], [73.5, 615.0], [73.6, 615.0], [73.7, 616.0], [73.8, 617.0], [73.9, 617.0], [74.0, 617.0], [74.1, 619.0], [74.2, 620.0], [74.3, 621.0], [74.4, 621.0], [74.5, 622.0], [74.6, 622.0], [74.7, 622.0], [74.8, 622.0], [74.9, 625.0], [75.0, 626.0], [75.1, 626.0], [75.2, 626.0], [75.3, 626.0], [75.4, 629.0], [75.5, 629.0], [75.6, 629.0], [75.7, 629.0], [75.8, 630.0], [75.9, 630.0], [76.0, 630.0], [76.1, 630.0], [76.2, 630.0], [76.3, 630.0], [76.4, 632.0], [76.5, 632.0], [76.6, 632.0], [76.7, 632.0], [76.8, 632.0], [76.9, 633.0], [77.0, 633.0], [77.1, 633.0], [77.2, 635.0], [77.3, 635.0], [77.4, 635.0], [77.5, 636.0], [77.6, 637.0], [77.7, 637.0], [77.8, 637.0], [77.9, 638.0], [78.0, 638.0], [78.1, 639.0], [78.2, 639.0], [78.3, 640.0], [78.4, 642.0], [78.5, 642.0], [78.6, 642.0], [78.7, 645.0], [78.8, 646.0], [78.9, 646.0], [79.0, 646.0], [79.1, 646.0], [79.2, 647.0], [79.3, 647.0], [79.4, 648.0], [79.5, 650.0], [79.6, 651.0], [79.7, 651.0], [79.8, 651.0], [79.9, 652.0], [80.0, 652.0], [80.1, 652.0], [80.2, 656.0], [80.3, 656.0], [80.4, 656.0], [80.5, 656.0], [80.6, 659.0], [80.7, 659.0], [80.8, 659.0], [80.9, 660.0], [81.0, 662.0], [81.1, 665.0], [81.2, 665.0], [81.3, 667.0], [81.4, 668.0], [81.5, 669.0], [81.6, 669.0], [81.7, 675.0], [81.8, 677.0], [81.9, 677.0], [82.0, 679.0], [82.1, 688.0], [82.2, 688.0], [82.3, 688.0], [82.4, 688.0], [82.5, 691.0], [82.6, 691.0], [82.7, 691.0], [82.8, 693.0], [82.9, 693.0], [83.0, 693.0], [83.1, 693.0], [83.2, 697.0], [83.3, 699.0], [83.4, 699.0], [83.5, 700.0], [83.6, 703.0], [83.7, 704.0], [83.8, 704.0], [83.9, 706.0], [84.0, 706.0], [84.1, 707.0], [84.2, 707.0], [84.3, 707.0], [84.4, 708.0], [84.5, 709.0], [84.6, 709.0], [84.7, 709.0], [84.8, 709.0], [84.9, 711.0], [85.0, 711.0], [85.1, 711.0], [85.2, 713.0], [85.3, 713.0], [85.4, 718.0], [85.5, 724.0], [85.6, 724.0], [85.7, 724.0], [85.8, 725.0], [85.9, 725.0], [86.0, 727.0], [86.1, 727.0], [86.2, 728.0], [86.3, 728.0], [86.4, 728.0], [86.5, 728.0], [86.6, 729.0], [86.7, 731.0], [86.8, 731.0], [86.9, 734.0], [87.0, 739.0], [87.1, 739.0], [87.2, 739.0], [87.3, 742.0], [87.4, 744.0], [87.5, 746.0], [87.6, 746.0], [87.7, 746.0], [87.8, 746.0], [87.9, 748.0], [88.0, 748.0], [88.1, 749.0], [88.2, 751.0], [88.3, 756.0], [88.4, 756.0], [88.5, 757.0], [88.6, 759.0], [88.7, 759.0], [88.8, 760.0], [88.9, 761.0], [89.0, 763.0], [89.1, 763.0], [89.2, 764.0], [89.3, 765.0], [89.4, 769.0], [89.5, 769.0], [89.6, 769.0], [89.7, 772.0], [89.8, 774.0], [89.9, 774.0], [90.0, 782.0], [90.1, 796.0], [90.2, 796.0], [90.3, 804.0], [90.4, 807.0], [90.5, 811.0], [90.6, 811.0], [90.7, 817.0], [90.8, 818.0], [90.9, 820.0], [91.0, 820.0], [91.1, 824.0], [91.2, 825.0], [91.3, 832.0], [91.4, 832.0], [91.5, 833.0], [91.6, 834.0], [91.7, 834.0], [91.8, 839.0], [91.9, 841.0], [92.0, 846.0], [92.1, 846.0], [92.2, 856.0], [92.3, 863.0], [92.4, 866.0], [92.5, 866.0], [92.6, 868.0], [92.7, 875.0], [92.8, 884.0], [92.9, 884.0], [93.0, 896.0], [93.1, 909.0], [93.2, 910.0], [93.3, 910.0], [93.4, 911.0], [93.5, 921.0], [93.6, 921.0], [93.7, 930.0], [93.8, 934.0], [93.9, 936.0], [94.0, 936.0], [94.1, 940.0], [94.2, 948.0], [94.3, 966.0], [94.4, 966.0], [94.5, 972.0], [94.6, 974.0], [94.7, 984.0], [94.8, 984.0], [94.9, 984.0], [95.0, 990.0], [95.1, 990.0], [95.2, 1001.0], [95.3, 1052.0], [95.4, 1092.0], [95.5, 1092.0], [95.6, 1095.0], [95.7, 1096.0], [95.8, 1097.0], [95.9, 1097.0], [96.0, 1121.0], [96.1, 1130.0], [96.2, 1138.0], [96.3, 1138.0], [96.4, 1148.0], [96.5, 1148.0], [96.6, 1170.0], [96.7, 1170.0], [96.8, 1171.0], [96.9, 1227.0], [97.0, 1227.0], [97.1, 1241.0], [97.2, 1254.0], [97.3, 1265.0], [97.4, 1265.0], [97.5, 1292.0], [97.6, 1318.0], [97.7, 1318.0], [97.8, 1318.0], [97.9, 1344.0], [98.0, 1366.0], [98.1, 1376.0], [98.2, 1376.0], [98.3, 1431.0], [98.4, 1438.0], [98.5, 1438.0], [98.6, 1537.0], [98.7, 1568.0], [98.8, 1582.0], [98.9, 1582.0], [99.0, 1617.0], [99.1, 1700.0], [99.2, 1777.0], [99.3, 1777.0], [99.4, 2006.0], [99.5, 2265.0], [99.6, 2399.0], [99.7, 2399.0], [99.8, 2694.0], [99.9, 3384.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 186.0, "series": [{"data": [[2200.0, 1.0], [2300.0, 1.0], [600.0, 92.0], [2600.0, 1.0], [700.0, 50.0], [200.0, 43.0], [3300.0, 1.0], [800.0, 21.0], [900.0, 15.0], [1000.0, 6.0], [1100.0, 7.0], [300.0, 126.0], [1200.0, 5.0], [1300.0, 5.0], [1400.0, 2.0], [1500.0, 3.0], [400.0, 186.0], [100.0, 4.0], [1600.0, 1.0], [1700.0, 2.0], [500.0, 162.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 363.0, "series": [{"data": [[0.0, 363.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 361.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.782608695652172, "minX": 1.60249644E12, "maxY": 10.0, "series": [{"data": [[1.6024965E12, 9.782608695652172], [1.60249644E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024965E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.0, "maxY": 856.0, "series": [{"data": [[8.0, 439.0], [4.0, 406.0], [2.0, 348.0], [1.0, 856.0], [9.0, 389.0], [10.0, 557.8925619834715], [5.0, 346.0], [6.0, 321.0], [3.0, 401.0], [7.0, 392.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 556.3646258503406]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1591.65, "minX": 1.60249644E12, "maxY": 1538734.6333333333, "series": [{"data": [[1.6024965E12, 495311.68333333335], [1.60249644E12, 1538734.6333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024965E12, 1591.65], [1.60249644E12, 4078.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024965E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 531.739130434783, "minX": 1.60249644E12, "maxY": 566.0189393939391, "series": [{"data": [[1.6024965E12, 531.739130434783], [1.60249644E12, 566.0189393939391]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024965E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 530.7246376811601, "minX": 1.60249644E12, "maxY": 564.5871212121219, "series": [{"data": [[1.6024965E12, 530.7246376811601], [1.60249644E12, 564.5871212121219]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024965E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60249644E12, "maxY": 0.20643939393939406, "series": [{"data": [[1.6024965E12, 0.0], [1.60249644E12, 0.20643939393939406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024965E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 182.0, "minX": 1.60249644E12, "maxY": 3384.0, "series": [{"data": [[1.6024965E12, 1366.0], [1.60249644E12, 3384.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024965E12, 239.35999975204467], [1.60249644E12, 203.6099987387657]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024965E12, 240.76960025787355], [1.60249644E12, 206.71130015134813]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024965E12, 239.87999987602234], [1.60249644E12, 206.07649981081485]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024965E12, 235.0], [1.60249644E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024965E12, 488.0], [1.60249644E12, 506.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024965E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 403.0, "minX": 5.0, "maxY": 728.0, "series": [{"data": [[9.0, 728.0], [11.0, 577.0], [13.0, 545.0], [14.0, 560.5], [15.0, 626.0], [16.0, 505.5], [17.0, 548.0], [18.0, 517.5], [19.0, 538.5], [5.0, 500.0], [20.0, 476.5], [21.0, 426.0], [22.0, 564.5], [23.0, 427.0], [24.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 403.0, "minX": 5.0, "maxY": 724.0, "series": [{"data": [[9.0, 724.0], [11.0, 577.0], [13.0, 544.0], [14.0, 560.5], [15.0, 624.0], [16.0, 505.0], [17.0, 546.0], [18.0, 517.5], [19.0, 537.5], [5.0, 498.0], [20.0, 476.0], [21.0, 426.0], [22.0, 560.0], [23.0, 426.0], [24.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.60249644E12, "maxY": 8.966666666666667, "series": [{"data": [[1.6024965E12, 3.283333333333333], [1.60249644E12, 8.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024965E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.60249644E12, "maxY": 8.8, "series": [{"data": [[1.6024965E12, 3.45], [1.60249644E12, 8.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6024965E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.60249644E12, "maxY": 8.8, "series": [{"data": [[1.6024965E12, 3.45], [1.60249644E12, 8.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024965E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.60249644E12, "maxY": 8.8, "series": [{"data": [[1.6024965E12, 3.45], [1.60249644E12, 8.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6024965E12, "title": "Total Transactions Per Second"}},
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

