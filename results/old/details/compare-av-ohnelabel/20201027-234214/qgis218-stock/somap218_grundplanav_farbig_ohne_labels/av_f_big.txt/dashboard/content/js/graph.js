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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 3363.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 178.0], [0.3, 182.0], [0.4, 182.0], [0.5, 185.0], [0.6, 185.0], [0.7, 186.0], [0.8, 186.0], [0.9, 187.0], [1.0, 189.0], [1.1, 189.0], [1.2, 189.0], [1.3, 190.0], [1.4, 193.0], [1.5, 193.0], [1.6, 193.0], [1.7, 193.0], [1.8, 196.0], [1.9, 196.0], [2.0, 198.0], [2.1, 200.0], [2.2, 201.0], [2.3, 201.0], [2.4, 202.0], [2.5, 211.0], [2.6, 216.0], [2.7, 216.0], [2.8, 223.0], [2.9, 223.0], [3.0, 225.0], [3.1, 225.0], [3.2, 232.0], [3.3, 234.0], [3.4, 234.0], [3.5, 237.0], [3.6, 240.0], [3.7, 244.0], [3.8, 244.0], [3.9, 249.0], [4.0, 253.0], [4.1, 254.0], [4.2, 254.0], [4.3, 255.0], [4.4, 257.0], [4.5, 257.0], [4.6, 257.0], [4.7, 260.0], [4.8, 260.0], [4.9, 260.0], [5.0, 260.0], [5.1, 261.0], [5.2, 263.0], [5.3, 263.0], [5.4, 266.0], [5.5, 271.0], [5.6, 274.0], [5.7, 274.0], [5.8, 274.0], [5.9, 274.0], [6.0, 275.0], [6.1, 275.0], [6.2, 278.0], [6.3, 279.0], [6.4, 279.0], [6.5, 279.0], [6.6, 280.0], [6.7, 283.0], [6.8, 283.0], [6.9, 284.0], [7.0, 288.0], [7.1, 289.0], [7.2, 289.0], [7.3, 290.0], [7.4, 290.0], [7.5, 294.0], [7.6, 294.0], [7.7, 296.0], [7.8, 296.0], [7.9, 298.0], [8.0, 298.0], [8.1, 299.0], [8.2, 299.0], [8.3, 300.0], [8.4, 300.0], [8.5, 301.0], [8.6, 301.0], [8.7, 301.0], [8.8, 301.0], [8.9, 302.0], [9.0, 302.0], [9.1, 302.0], [9.2, 302.0], [9.3, 303.0], [9.4, 304.0], [9.5, 304.0], [9.6, 304.0], [9.7, 306.0], [9.8, 307.0], [9.9, 307.0], [10.0, 309.0], [10.1, 309.0], [10.2, 309.0], [10.3, 309.0], [10.4, 309.0], [10.5, 310.0], [10.6, 310.0], [10.7, 313.0], [10.8, 314.0], [10.9, 314.0], [11.0, 314.0], [11.1, 317.0], [11.2, 317.0], [11.3, 317.0], [11.4, 317.0], [11.5, 317.0], [11.6, 318.0], [11.7, 318.0], [11.8, 318.0], [11.9, 318.0], [12.0, 319.0], [12.1, 319.0], [12.2, 321.0], [12.3, 321.0], [12.4, 322.0], [12.5, 322.0], [12.6, 323.0], [12.7, 324.0], [12.8, 325.0], [12.9, 325.0], [13.0, 325.0], [13.1, 327.0], [13.2, 328.0], [13.3, 328.0], [13.4, 329.0], [13.5, 329.0], [13.6, 329.0], [13.7, 330.0], [13.8, 331.0], [13.9, 332.0], [14.0, 332.0], [14.1, 332.0], [14.2, 333.0], [14.3, 333.0], [14.4, 333.0], [14.5, 334.0], [14.6, 334.0], [14.7, 335.0], [14.8, 335.0], [14.9, 336.0], [15.0, 336.0], [15.1, 336.0], [15.2, 336.0], [15.3, 337.0], [15.4, 337.0], [15.5, 337.0], [15.6, 338.0], [15.7, 338.0], [15.8, 338.0], [15.9, 338.0], [16.0, 338.0], [16.1, 339.0], [16.2, 339.0], [16.3, 339.0], [16.4, 340.0], [16.5, 340.0], [16.6, 340.0], [16.7, 340.0], [16.8, 344.0], [16.9, 344.0], [17.0, 344.0], [17.1, 344.0], [17.2, 344.0], [17.3, 345.0], [17.4, 345.0], [17.5, 346.0], [17.6, 346.0], [17.7, 346.0], [17.8, 346.0], [17.9, 348.0], [18.0, 348.0], [18.1, 348.0], [18.2, 348.0], [18.3, 349.0], [18.4, 350.0], [18.5, 350.0], [18.6, 350.0], [18.7, 350.0], [18.8, 351.0], [18.9, 351.0], [19.0, 352.0], [19.1, 352.0], [19.2, 353.0], [19.3, 353.0], [19.4, 354.0], [19.5, 354.0], [19.6, 354.0], [19.7, 354.0], [19.8, 355.0], [19.9, 356.0], [20.0, 356.0], [20.1, 356.0], [20.2, 357.0], [20.3, 358.0], [20.4, 358.0], [20.5, 358.0], [20.6, 359.0], [20.7, 361.0], [20.8, 361.0], [20.9, 361.0], [21.0, 362.0], [21.1, 363.0], [21.2, 363.0], [21.3, 363.0], [21.4, 363.0], [21.5, 364.0], [21.6, 364.0], [21.7, 364.0], [21.8, 364.0], [21.9, 364.0], [22.0, 365.0], [22.1, 366.0], [22.2, 366.0], [22.3, 366.0], [22.4, 366.0], [22.5, 366.0], [22.6, 367.0], [22.7, 367.0], [22.8, 367.0], [22.9, 367.0], [23.0, 368.0], [23.1, 368.0], [23.2, 369.0], [23.3, 370.0], [23.4, 370.0], [23.5, 370.0], [23.6, 370.0], [23.7, 371.0], [23.8, 371.0], [23.9, 372.0], [24.0, 373.0], [24.1, 373.0], [24.2, 373.0], [24.3, 375.0], [24.4, 375.0], [24.5, 376.0], [24.6, 376.0], [24.7, 376.0], [24.8, 379.0], [24.9, 379.0], [25.0, 379.0], [25.1, 379.0], [25.2, 380.0], [25.3, 380.0], [25.4, 381.0], [25.5, 381.0], [25.6, 381.0], [25.7, 381.0], [25.8, 382.0], [25.9, 382.0], [26.0, 382.0], [26.1, 382.0], [26.2, 382.0], [26.3, 383.0], [26.4, 383.0], [26.5, 383.0], [26.6, 384.0], [26.7, 384.0], [26.8, 384.0], [26.9, 385.0], [27.0, 386.0], [27.1, 386.0], [27.2, 386.0], [27.3, 386.0], [27.4, 386.0], [27.5, 388.0], [27.6, 388.0], [27.7, 389.0], [27.8, 389.0], [27.9, 389.0], [28.0, 389.0], [28.1, 390.0], [28.2, 390.0], [28.3, 390.0], [28.4, 390.0], [28.5, 391.0], [28.6, 391.0], [28.7, 391.0], [28.8, 391.0], [28.9, 392.0], [29.0, 393.0], [29.1, 393.0], [29.2, 393.0], [29.3, 393.0], [29.4, 394.0], [29.5, 394.0], [29.6, 395.0], [29.7, 395.0], [29.8, 395.0], [29.9, 395.0], [30.0, 396.0], [30.1, 396.0], [30.2, 396.0], [30.3, 397.0], [30.4, 397.0], [30.5, 398.0], [30.6, 398.0], [30.7, 399.0], [30.8, 400.0], [30.9, 400.0], [31.0, 400.0], [31.1, 401.0], [31.2, 401.0], [31.3, 402.0], [31.4, 402.0], [31.5, 402.0], [31.6, 403.0], [31.7, 403.0], [31.8, 403.0], [31.9, 404.0], [32.0, 404.0], [32.1, 404.0], [32.2, 404.0], [32.3, 405.0], [32.4, 405.0], [32.5, 405.0], [32.6, 405.0], [32.7, 406.0], [32.8, 406.0], [32.9, 406.0], [33.0, 407.0], [33.1, 407.0], [33.2, 408.0], [33.3, 408.0], [33.4, 409.0], [33.5, 409.0], [33.6, 409.0], [33.7, 409.0], [33.8, 410.0], [33.9, 410.0], [34.0, 410.0], [34.1, 410.0], [34.2, 411.0], [34.3, 411.0], [34.4, 411.0], [34.5, 412.0], [34.6, 412.0], [34.7, 413.0], [34.8, 413.0], [34.9, 413.0], [35.0, 414.0], [35.1, 414.0], [35.2, 415.0], [35.3, 415.0], [35.4, 417.0], [35.5, 417.0], [35.6, 418.0], [35.7, 419.0], [35.8, 419.0], [35.9, 419.0], [36.0, 420.0], [36.1, 420.0], [36.2, 420.0], [36.3, 420.0], [36.4, 420.0], [36.5, 420.0], [36.6, 421.0], [36.7, 421.0], [36.8, 421.0], [36.9, 422.0], [37.0, 422.0], [37.1, 422.0], [37.2, 422.0], [37.3, 422.0], [37.4, 422.0], [37.5, 422.0], [37.6, 423.0], [37.7, 424.0], [37.8, 424.0], [37.9, 424.0], [38.0, 424.0], [38.1, 424.0], [38.2, 424.0], [38.3, 425.0], [38.4, 425.0], [38.5, 425.0], [38.6, 426.0], [38.7, 426.0], [38.8, 427.0], [38.9, 427.0], [39.0, 428.0], [39.1, 428.0], [39.2, 428.0], [39.3, 428.0], [39.4, 428.0], [39.5, 429.0], [39.6, 430.0], [39.7, 430.0], [39.8, 431.0], [39.9, 432.0], [40.0, 432.0], [40.1, 432.0], [40.2, 434.0], [40.3, 434.0], [40.4, 434.0], [40.5, 434.0], [40.6, 435.0], [40.7, 436.0], [40.8, 436.0], [40.9, 436.0], [41.0, 437.0], [41.1, 439.0], [41.2, 439.0], [41.3, 439.0], [41.4, 440.0], [41.5, 440.0], [41.6, 440.0], [41.7, 440.0], [41.8, 440.0], [41.9, 440.0], [42.0, 441.0], [42.1, 441.0], [42.2, 442.0], [42.3, 442.0], [42.4, 442.0], [42.5, 442.0], [42.6, 443.0], [42.7, 443.0], [42.8, 444.0], [42.9, 444.0], [43.0, 445.0], [43.1, 445.0], [43.2, 445.0], [43.3, 446.0], [43.4, 446.0], [43.5, 448.0], [43.6, 449.0], [43.7, 449.0], [43.8, 449.0], [43.9, 449.0], [44.0, 450.0], [44.1, 450.0], [44.2, 450.0], [44.3, 451.0], [44.4, 451.0], [44.5, 452.0], [44.6, 452.0], [44.7, 453.0], [44.8, 453.0], [44.9, 454.0], [45.0, 454.0], [45.1, 454.0], [45.2, 455.0], [45.3, 455.0], [45.4, 455.0], [45.5, 456.0], [45.6, 456.0], [45.7, 456.0], [45.8, 456.0], [45.9, 457.0], [46.0, 458.0], [46.1, 458.0], [46.2, 458.0], [46.3, 458.0], [46.4, 460.0], [46.5, 460.0], [46.6, 460.0], [46.7, 460.0], [46.8, 460.0], [46.9, 461.0], [47.0, 461.0], [47.1, 461.0], [47.2, 461.0], [47.3, 463.0], [47.4, 464.0], [47.5, 465.0], [47.6, 465.0], [47.7, 466.0], [47.8, 466.0], [47.9, 466.0], [48.0, 466.0], [48.1, 466.0], [48.2, 467.0], [48.3, 467.0], [48.4, 467.0], [48.5, 467.0], [48.6, 467.0], [48.7, 467.0], [48.8, 467.0], [48.9, 468.0], [49.0, 468.0], [49.1, 468.0], [49.2, 469.0], [49.3, 470.0], [49.4, 470.0], [49.5, 470.0], [49.6, 470.0], [49.7, 470.0], [49.8, 471.0], [49.9, 471.0], [50.0, 471.0], [50.1, 471.0], [50.2, 471.0], [50.3, 473.0], [50.4, 474.0], [50.5, 474.0], [50.6, 474.0], [50.7, 475.0], [50.8, 476.0], [50.9, 477.0], [51.0, 477.0], [51.1, 477.0], [51.2, 477.0], [51.3, 477.0], [51.4, 477.0], [51.5, 478.0], [51.6, 478.0], [51.7, 478.0], [51.8, 478.0], [51.9, 479.0], [52.0, 479.0], [52.1, 479.0], [52.2, 479.0], [52.3, 479.0], [52.4, 479.0], [52.5, 479.0], [52.6, 480.0], [52.7, 480.0], [52.8, 481.0], [52.9, 481.0], [53.0, 481.0], [53.1, 481.0], [53.2, 481.0], [53.3, 481.0], [53.4, 483.0], [53.5, 485.0], [53.6, 485.0], [53.7, 486.0], [53.8, 486.0], [53.9, 486.0], [54.0, 486.0], [54.1, 487.0], [54.2, 488.0], [54.3, 488.0], [54.4, 488.0], [54.5, 489.0], [54.6, 490.0], [54.7, 490.0], [54.8, 490.0], [54.9, 490.0], [55.0, 490.0], [55.1, 490.0], [55.2, 491.0], [55.3, 491.0], [55.4, 492.0], [55.5, 492.0], [55.6, 492.0], [55.7, 493.0], [55.8, 493.0], [55.9, 493.0], [56.0, 493.0], [56.1, 493.0], [56.2, 494.0], [56.3, 494.0], [56.4, 494.0], [56.5, 494.0], [56.6, 494.0], [56.7, 494.0], [56.8, 494.0], [56.9, 495.0], [57.0, 495.0], [57.1, 495.0], [57.2, 496.0], [57.3, 497.0], [57.4, 497.0], [57.5, 497.0], [57.6, 497.0], [57.7, 499.0], [57.8, 499.0], [57.9, 501.0], [58.0, 502.0], [58.1, 504.0], [58.2, 504.0], [58.3, 504.0], [58.4, 505.0], [58.5, 505.0], [58.6, 505.0], [58.7, 505.0], [58.8, 505.0], [58.9, 505.0], [59.0, 505.0], [59.1, 506.0], [59.2, 507.0], [59.3, 507.0], [59.4, 507.0], [59.5, 507.0], [59.6, 507.0], [59.7, 507.0], [59.8, 508.0], [59.9, 509.0], [60.0, 510.0], [60.1, 510.0], [60.2, 511.0], [60.3, 511.0], [60.4, 511.0], [60.5, 511.0], [60.6, 512.0], [60.7, 512.0], [60.8, 512.0], [60.9, 512.0], [61.0, 512.0], [61.1, 513.0], [61.2, 513.0], [61.3, 514.0], [61.4, 515.0], [61.5, 516.0], [61.6, 516.0], [61.7, 518.0], [61.8, 519.0], [61.9, 519.0], [62.0, 519.0], [62.1, 520.0], [62.2, 522.0], [62.3, 522.0], [62.4, 523.0], [62.5, 524.0], [62.6, 525.0], [62.7, 525.0], [62.8, 528.0], [62.9, 528.0], [63.0, 528.0], [63.1, 528.0], [63.2, 528.0], [63.3, 529.0], [63.4, 529.0], [63.5, 529.0], [63.6, 530.0], [63.7, 531.0], [63.8, 531.0], [63.9, 531.0], [64.0, 531.0], [64.1, 532.0], [64.2, 532.0], [64.3, 532.0], [64.4, 532.0], [64.5, 534.0], [64.6, 534.0], [64.7, 534.0], [64.8, 534.0], [64.9, 534.0], [65.0, 534.0], [65.1, 535.0], [65.2, 535.0], [65.3, 535.0], [65.4, 536.0], [65.5, 536.0], [65.6, 536.0], [65.7, 536.0], [65.8, 536.0], [65.9, 537.0], [66.0, 537.0], [66.1, 537.0], [66.2, 538.0], [66.3, 540.0], [66.4, 541.0], [66.5, 541.0], [66.6, 541.0], [66.7, 542.0], [66.8, 542.0], [66.9, 543.0], [67.0, 543.0], [67.1, 543.0], [67.2, 543.0], [67.3, 544.0], [67.4, 544.0], [67.5, 545.0], [67.6, 545.0], [67.7, 546.0], [67.8, 546.0], [67.9, 548.0], [68.0, 548.0], [68.1, 550.0], [68.2, 551.0], [68.3, 552.0], [68.4, 552.0], [68.5, 553.0], [68.6, 553.0], [68.7, 553.0], [68.8, 554.0], [68.9, 554.0], [69.0, 555.0], [69.1, 555.0], [69.2, 555.0], [69.3, 558.0], [69.4, 561.0], [69.5, 561.0], [69.6, 562.0], [69.7, 562.0], [69.8, 562.0], [69.9, 562.0], [70.0, 562.0], [70.1, 562.0], [70.2, 562.0], [70.3, 566.0], [70.4, 569.0], [70.5, 571.0], [70.6, 571.0], [70.7, 571.0], [70.8, 572.0], [70.9, 572.0], [71.0, 572.0], [71.1, 576.0], [71.2, 576.0], [71.3, 576.0], [71.4, 576.0], [71.5, 578.0], [71.6, 579.0], [71.7, 579.0], [71.8, 580.0], [71.9, 580.0], [72.0, 580.0], [72.1, 580.0], [72.2, 581.0], [72.3, 582.0], [72.4, 583.0], [72.5, 583.0], [72.6, 586.0], [72.7, 586.0], [72.8, 586.0], [72.9, 586.0], [73.0, 587.0], [73.1, 587.0], [73.2, 589.0], [73.3, 589.0], [73.4, 589.0], [73.5, 590.0], [73.6, 590.0], [73.7, 591.0], [73.8, 591.0], [73.9, 592.0], [74.0, 592.0], [74.1, 593.0], [74.2, 595.0], [74.3, 596.0], [74.4, 596.0], [74.5, 596.0], [74.6, 596.0], [74.7, 597.0], [74.8, 597.0], [74.9, 597.0], [75.0, 598.0], [75.1, 598.0], [75.2, 598.0], [75.3, 599.0], [75.4, 599.0], [75.5, 599.0], [75.6, 600.0], [75.7, 601.0], [75.8, 602.0], [75.9, 602.0], [76.0, 602.0], [76.1, 603.0], [76.2, 605.0], [76.3, 605.0], [76.4, 606.0], [76.5, 609.0], [76.6, 609.0], [76.7, 609.0], [76.8, 610.0], [76.9, 610.0], [77.0, 610.0], [77.1, 610.0], [77.2, 610.0], [77.3, 612.0], [77.4, 612.0], [77.5, 613.0], [77.6, 613.0], [77.7, 613.0], [77.8, 613.0], [77.9, 615.0], [78.0, 615.0], [78.1, 616.0], [78.2, 616.0], [78.3, 616.0], [78.4, 620.0], [78.5, 620.0], [78.6, 620.0], [78.7, 620.0], [78.8, 621.0], [78.9, 621.0], [79.0, 621.0], [79.1, 622.0], [79.2, 625.0], [79.3, 625.0], [79.4, 625.0], [79.5, 625.0], [79.6, 626.0], [79.7, 626.0], [79.8, 627.0], [79.9, 628.0], [80.0, 629.0], [80.1, 629.0], [80.2, 630.0], [80.3, 631.0], [80.4, 631.0], [80.5, 631.0], [80.6, 634.0], [80.7, 635.0], [80.8, 635.0], [80.9, 635.0], [81.0, 636.0], [81.1, 638.0], [81.2, 638.0], [81.3, 641.0], [81.4, 643.0], [81.5, 647.0], [81.6, 647.0], [81.7, 647.0], [81.8, 648.0], [81.9, 648.0], [82.0, 650.0], [82.1, 658.0], [82.2, 659.0], [82.3, 659.0], [82.4, 663.0], [82.5, 666.0], [82.6, 666.0], [82.7, 666.0], [82.8, 669.0], [82.9, 669.0], [83.0, 670.0], [83.1, 670.0], [83.2, 671.0], [83.3, 674.0], [83.4, 674.0], [83.5, 677.0], [83.6, 677.0], [83.7, 677.0], [83.8, 677.0], [83.9, 678.0], [84.0, 683.0], [84.1, 687.0], [84.2, 687.0], [84.3, 689.0], [84.4, 692.0], [84.5, 692.0], [84.6, 692.0], [84.7, 695.0], [84.8, 695.0], [84.9, 696.0], [85.0, 696.0], [85.1, 696.0], [85.2, 697.0], [85.3, 697.0], [85.4, 698.0], [85.5, 698.0], [85.6, 698.0], [85.7, 698.0], [85.8, 700.0], [85.9, 704.0], [86.0, 705.0], [86.1, 705.0], [86.2, 705.0], [86.3, 709.0], [86.4, 709.0], [86.5, 709.0], [86.6, 713.0], [86.7, 714.0], [86.8, 714.0], [86.9, 715.0], [87.0, 715.0], [87.1, 717.0], [87.2, 717.0], [87.3, 718.0], [87.4, 718.0], [87.5, 720.0], [87.6, 720.0], [87.7, 722.0], [87.8, 724.0], [87.9, 725.0], [88.0, 725.0], [88.1, 727.0], [88.2, 727.0], [88.3, 728.0], [88.4, 728.0], [88.5, 729.0], [88.6, 732.0], [88.7, 732.0], [88.8, 736.0], [88.9, 738.0], [89.0, 738.0], [89.1, 738.0], [89.2, 741.0], [89.3, 743.0], [89.4, 750.0], [89.5, 750.0], [89.6, 760.0], [89.7, 760.0], [89.8, 761.0], [89.9, 761.0], [90.0, 761.0], [90.1, 762.0], [90.2, 762.0], [90.3, 763.0], [90.4, 764.0], [90.5, 765.0], [90.6, 765.0], [90.7, 769.0], [90.8, 775.0], [90.9, 783.0], [91.0, 783.0], [91.1, 783.0], [91.2, 789.0], [91.3, 791.0], [91.4, 791.0], [91.5, 797.0], [91.6, 797.0], [91.7, 797.0], [91.8, 809.0], [91.9, 810.0], [92.0, 810.0], [92.1, 810.0], [92.2, 829.0], [92.3, 834.0], [92.4, 846.0], [92.5, 846.0], [92.6, 848.0], [92.7, 852.0], [92.8, 856.0], [92.9, 856.0], [93.0, 858.0], [93.1, 868.0], [93.2, 875.0], [93.3, 875.0], [93.4, 876.0], [93.5, 880.0], [93.6, 880.0], [93.7, 887.0], [93.8, 896.0], [93.9, 903.0], [94.0, 903.0], [94.1, 906.0], [94.2, 906.0], [94.3, 911.0], [94.4, 911.0], [94.5, 922.0], [94.6, 928.0], [94.7, 935.0], [94.8, 935.0], [94.9, 940.0], [95.0, 970.0], [95.1, 970.0], [95.2, 978.0], [95.3, 1016.0], [95.4, 1026.0], [95.5, 1026.0], [95.6, 1033.0], [95.7, 1045.0], [95.8, 1055.0], [95.9, 1055.0], [96.0, 1073.0], [96.1, 1100.0], [96.2, 1128.0], [96.3, 1128.0], [96.4, 1130.0], [96.5, 1154.0], [96.6, 1167.0], [96.7, 1167.0], [96.8, 1172.0], [96.9, 1173.0], [97.0, 1173.0], [97.1, 1190.0], [97.2, 1205.0], [97.3, 1223.0], [97.4, 1223.0], [97.5, 1228.0], [97.6, 1247.0], [97.7, 1257.0], [97.8, 1257.0], [97.9, 1261.0], [98.0, 1285.0], [98.1, 1322.0], [98.2, 1322.0], [98.3, 1386.0], [98.4, 1392.0], [98.5, 1392.0], [98.6, 1426.0], [98.7, 1432.0], [98.8, 1546.0], [98.9, 1546.0], [99.0, 1558.0], [99.1, 1595.0], [99.2, 1724.0], [99.3, 1724.0], [99.4, 2053.0], [99.5, 2185.0], [99.6, 2384.0], [99.7, 2384.0], [99.8, 2699.0], [99.9, 3363.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 199.0, "series": [{"data": [[2100.0, 1.0], [2300.0, 1.0], [600.0, 75.0], [2600.0, 1.0], [700.0, 44.0], [800.0, 16.0], [200.0, 46.0], [3300.0, 1.0], [900.0, 10.0], [1000.0, 6.0], [1100.0, 8.0], [300.0, 165.0], [1200.0, 7.0], [1300.0, 3.0], [1400.0, 2.0], [1500.0, 3.0], [400.0, 199.0], [100.0, 15.0], [1700.0, 1.0], [2000.0, 1.0], [500.0, 130.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 425.0, "series": [{"data": [[0.0, 425.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 301.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.873239436619718, "minX": 1.60384212E12, "maxY": 10.0, "series": [{"data": [[1.60384212E12, 10.0], [1.60384218E12, 9.873239436619718]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 289.0, "minX": 1.0, "maxY": 876.0, "series": [{"data": [[8.0, 456.0], [4.0, 340.0], [2.0, 344.0], [1.0, 876.0], [9.0, 389.0], [10.0, 528.7892561983466], [5.0, 298.0], [6.0, 328.0], [3.0, 361.0], [7.0, 289.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 527.3224489795913]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2734.3, "minX": 1.60384212E12, "maxY": 1139238.6833333333, "series": [{"data": [[1.60384212E12, 1139238.6833333333], [1.60384218E12, 894807.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384212E12, 2935.733333333333], [1.60384218E12, 2734.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 510.5605633802818, "minX": 1.60384212E12, "maxY": 542.9815789473689, "series": [{"data": [[1.60384212E12, 542.9815789473689], [1.60384218E12, 510.5605633802818]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 509.20563380281675, "minX": 1.60384212E12, "maxY": 541.6657894736841, "series": [{"data": [[1.60384212E12, 541.6657894736841], [1.60384218E12, 509.20563380281675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60384212E12, "maxY": 0.32105263157894737, "series": [{"data": [[1.60384212E12, 0.32105263157894737], [1.60384218E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.60384212E12, "maxY": 3363.0, "series": [{"data": [[1.60384212E12, 3363.0], [1.60384218E12, 1558.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384212E12, 187.28699972748757], [1.60384218E12, 185.40799983024598]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384212E12, 188.31570010900498], [1.60384218E12, 186.04880006790162]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384212E12, 187.8584998637438], [1.60384218E12, 185.76399991512298]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384212E12, 182.0], [1.60384218E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384212E12, 474.5], [1.60384218E12, 470.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 385.5, "minX": 1.0, "maxY": 1322.0, "series": [{"data": [[2.0, 604.0], [9.0, 1322.0], [13.0, 541.0], [14.0, 569.0], [15.0, 494.0], [16.0, 633.0], [1.0, 876.0], [17.0, 533.0], [18.0, 511.0], [19.0, 468.0], [20.0, 456.0], [21.0, 460.0], [22.0, 460.5], [23.0, 466.5], [24.0, 385.5], [25.0, 390.0], [26.0, 411.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 385.5, "minX": 1.0, "maxY": 1322.0, "series": [{"data": [[2.0, 601.0], [9.0, 1322.0], [13.0, 540.0], [14.0, 568.5], [15.0, 493.0], [16.0, 633.0], [1.0, 874.0], [17.0, 532.5], [18.0, 510.0], [19.0, 467.0], [20.0, 455.0], [21.0, 459.0], [22.0, 459.5], [23.0, 466.0], [24.0, 385.5], [25.0, 390.0], [26.0, 411.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60384212E12, "maxY": 6.5, "series": [{"data": [[1.60384212E12, 6.5], [1.60384218E12, 5.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60384212E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60384212E12, 6.333333333333333], [1.60384218E12, 5.916666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60384212E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60384212E12, 6.333333333333333], [1.60384218E12, 5.916666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.916666666666667, "minX": 1.60384212E12, "maxY": 6.333333333333333, "series": [{"data": [[1.60384212E12, 6.333333333333333], [1.60384218E12, 5.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384218E12, "title": "Total Transactions Per Second"}},
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

