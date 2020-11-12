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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3187.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 194.0], [0.4, 194.0], [0.5, 195.0], [0.6, 198.0], [0.7, 200.0], [0.8, 200.0], [0.9, 202.0], [1.0, 205.0], [1.1, 209.0], [1.2, 209.0], [1.3, 211.0], [1.4, 214.0], [1.5, 216.0], [1.6, 216.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 220.0], [2.1, 220.0], [2.2, 221.0], [2.3, 221.0], [2.4, 222.0], [2.5, 229.0], [2.6, 232.0], [2.7, 232.0], [2.8, 237.0], [2.9, 237.0], [3.0, 237.0], [3.1, 237.0], [3.2, 239.0], [3.3, 242.0], [3.4, 242.0], [3.5, 243.0], [3.6, 243.0], [3.7, 244.0], [3.8, 244.0], [3.9, 247.0], [4.0, 251.0], [4.1, 259.0], [4.2, 259.0], [4.3, 260.0], [4.4, 261.0], [4.5, 262.0], [4.6, 262.0], [4.7, 265.0], [4.8, 266.0], [4.9, 271.0], [5.0, 271.0], [5.1, 278.0], [5.2, 278.0], [5.3, 278.0], [5.4, 283.0], [5.5, 283.0], [5.6, 283.0], [5.7, 283.0], [5.8, 284.0], [5.9, 285.0], [6.0, 286.0], [6.1, 286.0], [6.2, 289.0], [6.3, 289.0], [6.4, 290.0], [6.5, 290.0], [6.6, 294.0], [6.7, 295.0], [6.8, 295.0], [6.9, 295.0], [7.0, 296.0], [7.1, 298.0], [7.2, 298.0], [7.3, 298.0], [7.4, 298.0], [7.5, 298.0], [7.6, 298.0], [7.7, 299.0], [7.8, 299.0], [7.9, 302.0], [8.0, 302.0], [8.1, 303.0], [8.2, 304.0], [8.3, 305.0], [8.4, 305.0], [8.5, 311.0], [8.6, 313.0], [8.7, 313.0], [8.8, 313.0], [8.9, 317.0], [9.0, 317.0], [9.1, 317.0], [9.2, 318.0], [9.3, 318.0], [9.4, 319.0], [9.5, 319.0], [9.6, 319.0], [9.7, 319.0], [9.8, 320.0], [9.9, 320.0], [10.0, 321.0], [10.1, 325.0], [10.2, 325.0], [10.3, 326.0], [10.4, 327.0], [10.5, 328.0], [10.6, 328.0], [10.7, 328.0], [10.8, 329.0], [10.9, 329.0], [11.0, 329.0], [11.1, 329.0], [11.2, 331.0], [11.3, 332.0], [11.4, 332.0], [11.5, 332.0], [11.6, 332.0], [11.7, 332.0], [11.8, 332.0], [11.9, 334.0], [12.0, 334.0], [12.1, 334.0], [12.2, 336.0], [12.3, 337.0], [12.4, 337.0], [12.5, 337.0], [12.6, 338.0], [12.7, 339.0], [12.8, 340.0], [12.9, 340.0], [13.0, 340.0], [13.1, 340.0], [13.2, 340.0], [13.3, 340.0], [13.4, 341.0], [13.5, 341.0], [13.6, 341.0], [13.7, 341.0], [13.8, 341.0], [13.9, 341.0], [14.0, 341.0], [14.1, 342.0], [14.2, 346.0], [14.3, 347.0], [14.4, 347.0], [14.5, 348.0], [14.6, 348.0], [14.7, 348.0], [14.8, 348.0], [14.9, 349.0], [15.0, 350.0], [15.1, 350.0], [15.2, 351.0], [15.3, 352.0], [15.4, 354.0], [15.5, 354.0], [15.6, 356.0], [15.7, 357.0], [15.8, 358.0], [15.9, 358.0], [16.0, 358.0], [16.1, 359.0], [16.2, 360.0], [16.3, 360.0], [16.4, 360.0], [16.5, 360.0], [16.6, 360.0], [16.7, 360.0], [16.8, 360.0], [16.9, 361.0], [17.0, 361.0], [17.1, 364.0], [17.2, 365.0], [17.3, 366.0], [17.4, 366.0], [17.5, 367.0], [17.6, 368.0], [17.7, 368.0], [17.8, 368.0], [17.9, 369.0], [18.0, 373.0], [18.1, 373.0], [18.2, 373.0], [18.3, 373.0], [18.4, 374.0], [18.5, 374.0], [18.6, 374.0], [18.7, 374.0], [18.8, 376.0], [18.9, 376.0], [19.0, 376.0], [19.1, 377.0], [19.2, 378.0], [19.3, 378.0], [19.4, 379.0], [19.5, 379.0], [19.6, 380.0], [19.7, 380.0], [19.8, 380.0], [19.9, 380.0], [20.0, 380.0], [20.1, 380.0], [20.2, 381.0], [20.3, 383.0], [20.4, 383.0], [20.5, 383.0], [20.6, 383.0], [20.7, 383.0], [20.8, 383.0], [20.9, 384.0], [21.0, 384.0], [21.1, 384.0], [21.2, 384.0], [21.3, 385.0], [21.4, 385.0], [21.5, 387.0], [21.6, 387.0], [21.7, 387.0], [21.8, 387.0], [21.9, 387.0], [22.0, 388.0], [22.1, 389.0], [22.2, 390.0], [22.3, 390.0], [22.4, 392.0], [22.5, 392.0], [22.6, 392.0], [22.7, 392.0], [22.8, 393.0], [22.9, 393.0], [23.0, 394.0], [23.1, 394.0], [23.2, 394.0], [23.3, 395.0], [23.4, 395.0], [23.5, 395.0], [23.6, 395.0], [23.7, 395.0], [23.8, 395.0], [23.9, 396.0], [24.0, 396.0], [24.1, 396.0], [24.2, 396.0], [24.3, 397.0], [24.4, 397.0], [24.5, 397.0], [24.6, 397.0], [24.7, 397.0], [24.8, 398.0], [24.9, 399.0], [25.0, 399.0], [25.1, 399.0], [25.2, 400.0], [25.3, 400.0], [25.4, 401.0], [25.5, 401.0], [25.6, 401.0], [25.7, 401.0], [25.8, 402.0], [25.9, 402.0], [26.0, 402.0], [26.1, 402.0], [26.2, 402.0], [26.3, 403.0], [26.4, 403.0], [26.5, 403.0], [26.6, 404.0], [26.7, 404.0], [26.8, 404.0], [26.9, 405.0], [27.0, 405.0], [27.1, 405.0], [27.2, 405.0], [27.3, 405.0], [27.4, 405.0], [27.5, 406.0], [27.6, 406.0], [27.7, 406.0], [27.8, 406.0], [27.9, 407.0], [28.0, 407.0], [28.1, 407.0], [28.2, 408.0], [28.3, 409.0], [28.4, 409.0], [28.5, 409.0], [28.6, 409.0], [28.7, 409.0], [28.8, 410.0], [28.9, 411.0], [29.0, 411.0], [29.1, 411.0], [29.2, 412.0], [29.3, 412.0], [29.4, 412.0], [29.5, 412.0], [29.6, 412.0], [29.7, 413.0], [29.8, 413.0], [29.9, 413.0], [30.0, 414.0], [30.1, 414.0], [30.2, 414.0], [30.3, 414.0], [30.4, 414.0], [30.5, 415.0], [30.6, 415.0], [30.7, 415.0], [30.8, 415.0], [30.9, 415.0], [31.0, 415.0], [31.1, 416.0], [31.2, 416.0], [31.3, 417.0], [31.4, 417.0], [31.5, 417.0], [31.6, 417.0], [31.7, 417.0], [31.8, 417.0], [31.9, 418.0], [32.0, 418.0], [32.1, 418.0], [32.2, 418.0], [32.3, 419.0], [32.4, 419.0], [32.5, 419.0], [32.6, 420.0], [32.7, 420.0], [32.8, 420.0], [32.9, 420.0], [33.0, 420.0], [33.1, 421.0], [33.2, 422.0], [33.3, 422.0], [33.4, 422.0], [33.5, 423.0], [33.6, 423.0], [33.7, 423.0], [33.8, 423.0], [33.9, 424.0], [34.0, 424.0], [34.1, 424.0], [34.2, 424.0], [34.3, 425.0], [34.4, 425.0], [34.5, 426.0], [34.6, 426.0], [34.7, 426.0], [34.8, 426.0], [34.9, 427.0], [35.0, 427.0], [35.1, 427.0], [35.2, 427.0], [35.3, 428.0], [35.4, 428.0], [35.5, 428.0], [35.6, 429.0], [35.7, 429.0], [35.8, 431.0], [35.9, 431.0], [36.0, 431.0], [36.1, 432.0], [36.2, 432.0], [36.3, 432.0], [36.4, 432.0], [36.5, 433.0], [36.6, 433.0], [36.7, 433.0], [36.8, 433.0], [36.9, 433.0], [37.0, 433.0], [37.1, 433.0], [37.2, 434.0], [37.3, 434.0], [37.4, 434.0], [37.5, 436.0], [37.6, 436.0], [37.7, 438.0], [37.8, 438.0], [37.9, 438.0], [38.0, 438.0], [38.1, 439.0], [38.2, 439.0], [38.3, 439.0], [38.4, 440.0], [38.5, 440.0], [38.6, 442.0], [38.7, 442.0], [38.8, 442.0], [38.9, 442.0], [39.0, 443.0], [39.1, 444.0], [39.2, 444.0], [39.3, 444.0], [39.4, 445.0], [39.5, 445.0], [39.6, 446.0], [39.7, 446.0], [39.8, 446.0], [39.9, 447.0], [40.0, 448.0], [40.1, 448.0], [40.2, 448.0], [40.3, 448.0], [40.4, 448.0], [40.5, 450.0], [40.6, 451.0], [40.7, 451.0], [40.8, 451.0], [40.9, 451.0], [41.0, 453.0], [41.1, 453.0], [41.2, 453.0], [41.3, 453.0], [41.4, 454.0], [41.5, 455.0], [41.6, 455.0], [41.7, 455.0], [41.8, 456.0], [41.9, 456.0], [42.0, 456.0], [42.1, 456.0], [42.2, 458.0], [42.3, 458.0], [42.4, 458.0], [42.5, 459.0], [42.6, 459.0], [42.7, 459.0], [42.8, 459.0], [42.9, 459.0], [43.0, 460.0], [43.1, 460.0], [43.2, 461.0], [43.3, 461.0], [43.4, 461.0], [43.5, 461.0], [43.6, 463.0], [43.7, 464.0], [43.8, 464.0], [43.9, 464.0], [44.0, 466.0], [44.1, 466.0], [44.2, 466.0], [44.3, 467.0], [44.4, 467.0], [44.5, 468.0], [44.6, 468.0], [44.7, 468.0], [44.8, 469.0], [44.9, 469.0], [45.0, 469.0], [45.1, 469.0], [45.2, 469.0], [45.3, 469.0], [45.4, 471.0], [45.5, 471.0], [45.6, 472.0], [45.7, 472.0], [45.8, 472.0], [45.9, 472.0], [46.0, 473.0], [46.1, 473.0], [46.2, 473.0], [46.3, 473.0], [46.4, 473.0], [46.5, 473.0], [46.6, 474.0], [46.7, 474.0], [46.8, 474.0], [46.9, 474.0], [47.0, 474.0], [47.1, 475.0], [47.2, 475.0], [47.3, 475.0], [47.4, 475.0], [47.5, 475.0], [47.6, 475.0], [47.7, 477.0], [47.8, 478.0], [47.9, 480.0], [48.0, 480.0], [48.1, 480.0], [48.2, 480.0], [48.3, 480.0], [48.4, 480.0], [48.5, 480.0], [48.6, 480.0], [48.7, 480.0], [48.8, 481.0], [48.9, 481.0], [49.0, 482.0], [49.1, 482.0], [49.2, 483.0], [49.3, 483.0], [49.4, 484.0], [49.5, 484.0], [49.6, 484.0], [49.7, 484.0], [49.8, 485.0], [49.9, 485.0], [50.0, 485.0], [50.1, 486.0], [50.2, 486.0], [50.3, 486.0], [50.4, 487.0], [50.5, 488.0], [50.6, 488.0], [50.7, 488.0], [50.8, 488.0], [50.9, 489.0], [51.0, 489.0], [51.1, 489.0], [51.2, 489.0], [51.3, 489.0], [51.4, 489.0], [51.5, 490.0], [51.6, 490.0], [51.7, 490.0], [51.8, 490.0], [51.9, 490.0], [52.0, 491.0], [52.1, 491.0], [52.2, 491.0], [52.3, 492.0], [52.4, 493.0], [52.5, 493.0], [52.6, 494.0], [52.7, 494.0], [52.8, 494.0], [52.9, 494.0], [53.0, 494.0], [53.1, 495.0], [53.2, 496.0], [53.3, 496.0], [53.4, 496.0], [53.5, 497.0], [53.6, 497.0], [53.7, 497.0], [53.8, 497.0], [53.9, 498.0], [54.0, 498.0], [54.1, 498.0], [54.2, 498.0], [54.3, 498.0], [54.4, 498.0], [54.5, 499.0], [54.6, 499.0], [54.7, 500.0], [54.8, 500.0], [54.9, 500.0], [55.0, 501.0], [55.1, 501.0], [55.2, 501.0], [55.3, 501.0], [55.4, 501.0], [55.5, 501.0], [55.6, 502.0], [55.7, 502.0], [55.8, 502.0], [55.9, 502.0], [56.0, 503.0], [56.1, 503.0], [56.2, 504.0], [56.3, 504.0], [56.4, 505.0], [56.5, 505.0], [56.6, 506.0], [56.7, 506.0], [56.8, 507.0], [56.9, 507.0], [57.0, 507.0], [57.1, 508.0], [57.2, 508.0], [57.3, 508.0], [57.4, 508.0], [57.5, 508.0], [57.6, 508.0], [57.7, 508.0], [57.8, 508.0], [57.9, 509.0], [58.0, 510.0], [58.1, 510.0], [58.2, 510.0], [58.3, 512.0], [58.4, 512.0], [58.5, 512.0], [58.6, 513.0], [58.7, 513.0], [58.8, 514.0], [58.9, 514.0], [59.0, 515.0], [59.1, 516.0], [59.2, 516.0], [59.3, 516.0], [59.4, 516.0], [59.5, 516.0], [59.6, 518.0], [59.7, 518.0], [59.8, 519.0], [59.9, 519.0], [60.0, 519.0], [60.1, 519.0], [60.2, 520.0], [60.3, 520.0], [60.4, 520.0], [60.5, 520.0], [60.6, 522.0], [60.7, 522.0], [60.8, 522.0], [60.9, 523.0], [61.0, 523.0], [61.1, 524.0], [61.2, 524.0], [61.3, 524.0], [61.4, 525.0], [61.5, 525.0], [61.6, 525.0], [61.7, 526.0], [61.8, 526.0], [61.9, 526.0], [62.0, 527.0], [62.1, 527.0], [62.2, 528.0], [62.3, 528.0], [62.4, 532.0], [62.5, 532.0], [62.6, 533.0], [62.7, 533.0], [62.8, 537.0], [62.9, 538.0], [63.0, 538.0], [63.1, 538.0], [63.2, 539.0], [63.3, 540.0], [63.4, 540.0], [63.5, 541.0], [63.6, 543.0], [63.7, 543.0], [63.8, 543.0], [63.9, 543.0], [64.0, 545.0], [64.1, 546.0], [64.2, 546.0], [64.3, 547.0], [64.4, 547.0], [64.5, 548.0], [64.6, 548.0], [64.7, 548.0], [64.8, 549.0], [64.9, 549.0], [65.0, 549.0], [65.1, 550.0], [65.2, 551.0], [65.3, 551.0], [65.4, 553.0], [65.5, 556.0], [65.6, 556.0], [65.7, 556.0], [65.8, 556.0], [65.9, 558.0], [66.0, 558.0], [66.1, 558.0], [66.2, 558.0], [66.3, 559.0], [66.4, 559.0], [66.5, 559.0], [66.6, 559.0], [66.7, 560.0], [66.8, 560.0], [66.9, 561.0], [67.0, 561.0], [67.1, 562.0], [67.2, 562.0], [67.3, 564.0], [67.4, 566.0], [67.5, 566.0], [67.6, 566.0], [67.7, 566.0], [67.8, 567.0], [67.9, 569.0], [68.0, 569.0], [68.1, 569.0], [68.2, 569.0], [68.3, 570.0], [68.4, 570.0], [68.5, 571.0], [68.6, 572.0], [68.7, 572.0], [68.8, 572.0], [68.9, 573.0], [69.0, 574.0], [69.1, 574.0], [69.2, 574.0], [69.3, 575.0], [69.4, 577.0], [69.5, 577.0], [69.6, 577.0], [69.7, 578.0], [69.8, 578.0], [69.9, 578.0], [70.0, 578.0], [70.1, 579.0], [70.2, 579.0], [70.3, 581.0], [70.4, 581.0], [70.5, 582.0], [70.6, 582.0], [70.7, 583.0], [70.8, 583.0], [70.9, 584.0], [71.0, 584.0], [71.1, 586.0], [71.2, 587.0], [71.3, 588.0], [71.4, 588.0], [71.5, 590.0], [71.6, 591.0], [71.7, 591.0], [71.8, 591.0], [71.9, 591.0], [72.0, 592.0], [72.1, 592.0], [72.2, 594.0], [72.3, 594.0], [72.4, 595.0], [72.5, 595.0], [72.6, 596.0], [72.7, 598.0], [72.8, 599.0], [72.9, 599.0], [73.0, 600.0], [73.1, 600.0], [73.2, 601.0], [73.3, 601.0], [73.4, 602.0], [73.5, 602.0], [73.6, 602.0], [73.7, 602.0], [73.8, 603.0], [73.9, 603.0], [74.0, 603.0], [74.1, 603.0], [74.2, 603.0], [74.3, 604.0], [74.4, 604.0], [74.5, 604.0], [74.6, 605.0], [74.7, 605.0], [74.8, 605.0], [74.9, 605.0], [75.0, 606.0], [75.1, 606.0], [75.2, 606.0], [75.3, 607.0], [75.4, 608.0], [75.5, 608.0], [75.6, 609.0], [75.7, 609.0], [75.8, 609.0], [75.9, 609.0], [76.0, 610.0], [76.1, 612.0], [76.2, 612.0], [76.3, 612.0], [76.4, 612.0], [76.5, 614.0], [76.6, 616.0], [76.7, 616.0], [76.8, 616.0], [76.9, 616.0], [77.0, 616.0], [77.1, 617.0], [77.2, 618.0], [77.3, 625.0], [77.4, 625.0], [77.5, 625.0], [77.6, 626.0], [77.7, 628.0], [77.8, 628.0], [77.9, 629.0], [78.0, 630.0], [78.1, 634.0], [78.2, 634.0], [78.3, 634.0], [78.4, 634.0], [78.5, 634.0], [78.6, 634.0], [78.7, 636.0], [78.8, 638.0], [78.9, 638.0], [79.0, 638.0], [79.1, 638.0], [79.2, 638.0], [79.3, 638.0], [79.4, 639.0], [79.5, 640.0], [79.6, 640.0], [79.7, 640.0], [79.8, 641.0], [79.9, 642.0], [80.0, 643.0], [80.1, 643.0], [80.2, 643.0], [80.3, 645.0], [80.4, 645.0], [80.5, 645.0], [80.6, 646.0], [80.7, 647.0], [80.8, 647.0], [80.9, 648.0], [81.0, 649.0], [81.1, 653.0], [81.2, 653.0], [81.3, 654.0], [81.4, 656.0], [81.5, 657.0], [81.6, 657.0], [81.7, 657.0], [81.8, 659.0], [81.9, 659.0], [82.0, 659.0], [82.1, 659.0], [82.2, 660.0], [82.3, 660.0], [82.4, 660.0], [82.5, 663.0], [82.6, 665.0], [82.7, 665.0], [82.8, 665.0], [82.9, 667.0], [83.0, 668.0], [83.1, 668.0], [83.2, 668.0], [83.3, 669.0], [83.4, 669.0], [83.5, 669.0], [83.6, 672.0], [83.7, 673.0], [83.8, 673.0], [83.9, 676.0], [84.0, 678.0], [84.1, 679.0], [84.2, 679.0], [84.3, 685.0], [84.4, 686.0], [84.5, 686.0], [84.6, 686.0], [84.7, 688.0], [84.8, 689.0], [84.9, 691.0], [85.0, 691.0], [85.1, 696.0], [85.2, 700.0], [85.3, 700.0], [85.4, 702.0], [85.5, 704.0], [85.6, 705.0], [85.7, 705.0], [85.8, 705.0], [85.9, 706.0], [86.0, 706.0], [86.1, 706.0], [86.2, 709.0], [86.3, 709.0], [86.4, 712.0], [86.5, 712.0], [86.6, 713.0], [86.7, 714.0], [86.8, 714.0], [86.9, 714.0], [87.0, 715.0], [87.1, 718.0], [87.2, 718.0], [87.3, 723.0], [87.4, 728.0], [87.5, 729.0], [87.6, 729.0], [87.7, 735.0], [87.8, 735.0], [87.9, 740.0], [88.0, 740.0], [88.1, 741.0], [88.2, 749.0], [88.3, 750.0], [88.4, 750.0], [88.5, 758.0], [88.6, 759.0], [88.7, 759.0], [88.8, 759.0], [88.9, 761.0], [89.0, 767.0], [89.1, 767.0], [89.2, 767.0], [89.3, 769.0], [89.4, 769.0], [89.5, 769.0], [89.6, 774.0], [89.7, 774.0], [89.8, 776.0], [89.9, 776.0], [90.0, 777.0], [90.1, 779.0], [90.2, 779.0], [90.3, 780.0], [90.4, 781.0], [90.5, 786.0], [90.6, 786.0], [90.7, 790.0], [90.8, 791.0], [90.9, 796.0], [91.0, 796.0], [91.1, 798.0], [91.2, 798.0], [91.3, 803.0], [91.4, 803.0], [91.5, 809.0], [91.6, 809.0], [91.7, 809.0], [91.8, 813.0], [91.9, 814.0], [92.0, 818.0], [92.1, 818.0], [92.2, 818.0], [92.3, 822.0], [92.4, 824.0], [92.5, 824.0], [92.6, 829.0], [92.7, 830.0], [92.8, 835.0], [92.9, 835.0], [93.0, 840.0], [93.1, 844.0], [93.2, 845.0], [93.3, 845.0], [93.4, 845.0], [93.5, 845.0], [93.6, 845.0], [93.7, 850.0], [93.8, 860.0], [93.9, 873.0], [94.0, 873.0], [94.1, 888.0], [94.2, 896.0], [94.3, 900.0], [94.4, 900.0], [94.5, 905.0], [94.6, 905.0], [94.7, 909.0], [94.8, 909.0], [94.9, 913.0], [95.0, 920.0], [95.1, 920.0], [95.2, 924.0], [95.3, 938.0], [95.4, 939.0], [95.5, 939.0], [95.6, 943.0], [95.7, 955.0], [95.8, 958.0], [95.9, 958.0], [96.0, 979.0], [96.1, 994.0], [96.2, 1002.0], [96.3, 1002.0], [96.4, 1006.0], [96.5, 1063.0], [96.6, 1067.0], [96.7, 1067.0], [96.8, 1111.0], [96.9, 1116.0], [97.0, 1116.0], [97.1, 1137.0], [97.2, 1140.0], [97.3, 1144.0], [97.4, 1144.0], [97.5, 1154.0], [97.6, 1155.0], [97.7, 1157.0], [97.8, 1157.0], [97.9, 1173.0], [98.0, 1223.0], [98.1, 1243.0], [98.2, 1243.0], [98.3, 1260.0], [98.4, 1274.0], [98.5, 1274.0], [98.6, 1302.0], [98.7, 1304.0], [98.8, 1355.0], [98.9, 1355.0], [99.0, 1524.0], [99.1, 1579.0], [99.2, 1583.0], [99.3, 1583.0], [99.4, 1934.0], [99.5, 2311.0], [99.6, 2957.0], [99.7, 2957.0], [99.8, 3058.0], [99.9, 3187.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 217.0, "series": [{"data": [[2300.0, 1.0], [600.0, 90.0], [700.0, 45.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 53.0], [800.0, 22.0], [900.0, 14.0], [1000.0, 4.0], [1100.0, 9.0], [300.0, 127.0], [1200.0, 4.0], [1300.0, 3.0], [1500.0, 3.0], [400.0, 217.0], [100.0, 5.0], [1900.0, 1.0], [500.0, 134.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 404.0, "series": [{"data": [[0.0, 404.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 323.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.898876404494382, "minX": 1.60438866E12, "maxY": 9.972413793103449, "series": [{"data": [[1.60438866E12, 9.972413793103449], [1.60438872E12, 9.898876404494382]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438872E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 296.0, "minX": 1.0, "maxY": 769.0, "series": [{"data": [[8.0, 321.0], [4.0, 360.0], [2.0, 402.0], [1.0, 769.0], [9.0, 540.0], [5.0, 296.0], [10.0, 538.482710926695], [6.0, 360.0], [3.0, 348.0], [7.0, 328.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.927891156462577, 536.3319727891152]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2250.616666666667, "minX": 1.60438866E12, "maxY": 1167108.7333333334, "series": [{"data": [[1.60438866E12, 866937.5833333334], [1.60438872E12, 1167108.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438866E12, 2250.616666666667], [1.60438872E12, 3419.4166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438872E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 524.3528089887635, "minX": 1.60438866E12, "maxY": 554.7137931034488, "series": [{"data": [[1.60438866E12, 554.7137931034488], [1.60438872E12, 524.3528089887635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438872E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 523.0224719101119, "minX": 1.60438866E12, "maxY": 553.5034482758623, "series": [{"data": [[1.60438866E12, 553.5034482758623], [1.60438872E12, 523.0224719101119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438872E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60438866E12, "maxY": 0.37241379310344824, "series": [{"data": [[1.60438866E12, 0.37241379310344824], [1.60438872E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438872E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60438866E12, "maxY": 3187.0, "series": [{"data": [[1.60438866E12, 3187.0], [1.60438872E12, 1934.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438866E12, 207.57099937558175], [1.60438872E12, 198.02799978733063]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438866E12, 209.9281002497673], [1.60438872E12, 198.83080008506775]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438866E12, 208.88049968779086], [1.60438872E12, 198.4739998936653]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438866E12, 179.0], [1.60438872E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438866E12, 485.0], [1.60438872E12, 486.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438872E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 289.0, "minX": 3.0, "maxY": 584.0, "series": [{"data": [[8.0, 360.0], [10.0, 466.5], [3.0, 289.0], [12.0, 483.5], [15.0, 584.0], [16.0, 508.0], [17.0, 527.0], [18.0, 497.5], [19.0, 509.0], [20.0, 495.5], [21.0, 459.0], [22.0, 401.0], [24.0, 399.0], [25.0, 414.0], [27.0, 387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 285.0, "minX": 3.0, "maxY": 583.0, "series": [{"data": [[8.0, 360.0], [10.0, 466.0], [3.0, 285.0], [12.0, 482.5], [15.0, 583.0], [16.0, 504.5], [17.0, 527.0], [18.0, 497.5], [19.0, 509.0], [20.0, 494.5], [21.0, 459.0], [22.0, 401.0], [24.0, 399.0], [25.0, 413.0], [27.0, 387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.60438866E12, "maxY": 7.25, "series": [{"data": [[1.60438866E12, 5.0], [1.60438872E12, 7.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438872E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60438866E12, "maxY": 7.416666666666667, "series": [{"data": [[1.60438866E12, 4.833333333333333], [1.60438872E12, 7.416666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438872E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60438866E12, "maxY": 7.416666666666667, "series": [{"data": [[1.60438866E12, 4.833333333333333], [1.60438872E12, 7.416666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438872E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.833333333333333, "minX": 1.60438866E12, "maxY": 7.416666666666667, "series": [{"data": [[1.60438866E12, 4.833333333333333], [1.60438872E12, 7.416666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438872E12, "title": "Total Transactions Per Second"}},
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

