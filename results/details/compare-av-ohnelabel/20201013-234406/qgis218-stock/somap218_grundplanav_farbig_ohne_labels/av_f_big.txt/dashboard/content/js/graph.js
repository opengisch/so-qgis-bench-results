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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 2911.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 181.0], [0.3, 182.0], [0.4, 182.0], [0.5, 184.0], [0.6, 188.0], [0.7, 188.0], [0.8, 188.0], [0.9, 190.0], [1.0, 190.0], [1.1, 190.0], [1.2, 190.0], [1.3, 191.0], [1.4, 194.0], [1.5, 195.0], [1.6, 195.0], [1.7, 195.0], [1.8, 200.0], [1.9, 200.0], [2.0, 200.0], [2.1, 201.0], [2.2, 202.0], [2.3, 202.0], [2.4, 204.0], [2.5, 206.0], [2.6, 208.0], [2.7, 208.0], [2.8, 209.0], [2.9, 210.0], [3.0, 211.0], [3.1, 211.0], [3.2, 213.0], [3.3, 213.0], [3.4, 213.0], [3.5, 213.0], [3.6, 216.0], [3.7, 220.0], [3.8, 220.0], [3.9, 220.0], [4.0, 221.0], [4.1, 222.0], [4.2, 222.0], [4.3, 224.0], [4.4, 225.0], [4.5, 225.0], [4.6, 225.0], [4.7, 226.0], [4.8, 226.0], [4.9, 230.0], [5.0, 230.0], [5.1, 237.0], [5.2, 241.0], [5.3, 241.0], [5.4, 244.0], [5.5, 246.0], [5.6, 248.0], [5.7, 248.0], [5.8, 251.0], [5.9, 254.0], [6.0, 256.0], [6.1, 256.0], [6.2, 259.0], [6.3, 259.0], [6.4, 262.0], [6.5, 262.0], [6.6, 262.0], [6.7, 264.0], [6.8, 264.0], [6.9, 264.0], [7.0, 265.0], [7.1, 266.0], [7.2, 266.0], [7.3, 267.0], [7.4, 271.0], [7.5, 272.0], [7.6, 272.0], [7.7, 277.0], [7.8, 277.0], [7.9, 278.0], [8.0, 278.0], [8.1, 282.0], [8.2, 282.0], [8.3, 283.0], [8.4, 283.0], [8.5, 283.0], [8.6, 284.0], [8.7, 284.0], [8.8, 284.0], [8.9, 286.0], [9.0, 288.0], [9.1, 288.0], [9.2, 289.0], [9.3, 289.0], [9.4, 289.0], [9.5, 289.0], [9.6, 292.0], [9.7, 293.0], [9.8, 293.0], [9.9, 293.0], [10.0, 296.0], [10.1, 296.0], [10.2, 296.0], [10.3, 297.0], [10.4, 298.0], [10.5, 299.0], [10.6, 299.0], [10.7, 300.0], [10.8, 303.0], [10.9, 305.0], [11.0, 305.0], [11.1, 309.0], [11.2, 309.0], [11.3, 313.0], [11.4, 313.0], [11.5, 314.0], [11.6, 314.0], [11.7, 314.0], [11.8, 316.0], [11.9, 316.0], [12.0, 316.0], [12.1, 316.0], [12.2, 316.0], [12.3, 317.0], [12.4, 317.0], [12.5, 317.0], [12.6, 317.0], [12.7, 319.0], [12.8, 322.0], [12.9, 322.0], [13.0, 324.0], [13.1, 327.0], [13.2, 328.0], [13.3, 328.0], [13.4, 328.0], [13.5, 328.0], [13.6, 328.0], [13.7, 330.0], [13.8, 331.0], [13.9, 331.0], [14.0, 331.0], [14.1, 332.0], [14.2, 333.0], [14.3, 336.0], [14.4, 336.0], [14.5, 336.0], [14.6, 336.0], [14.7, 336.0], [14.8, 336.0], [14.9, 338.0], [15.0, 340.0], [15.1, 340.0], [15.2, 342.0], [15.3, 342.0], [15.4, 342.0], [15.5, 342.0], [15.6, 343.0], [15.7, 343.0], [15.8, 344.0], [15.9, 344.0], [16.0, 344.0], [16.1, 344.0], [16.2, 346.0], [16.3, 346.0], [16.4, 349.0], [16.5, 349.0], [16.6, 349.0], [16.7, 349.0], [16.8, 350.0], [16.9, 351.0], [17.0, 351.0], [17.1, 351.0], [17.2, 351.0], [17.3, 351.0], [17.4, 351.0], [17.5, 353.0], [17.6, 354.0], [17.7, 354.0], [17.8, 354.0], [17.9, 355.0], [18.0, 358.0], [18.1, 359.0], [18.2, 359.0], [18.3, 359.0], [18.4, 359.0], [18.5, 359.0], [18.6, 359.0], [18.7, 360.0], [18.8, 360.0], [18.9, 360.0], [19.0, 361.0], [19.1, 361.0], [19.2, 362.0], [19.3, 362.0], [19.4, 362.0], [19.5, 362.0], [19.6, 362.0], [19.7, 362.0], [19.8, 363.0], [19.9, 364.0], [20.0, 365.0], [20.1, 365.0], [20.2, 366.0], [20.3, 366.0], [20.4, 366.0], [20.5, 366.0], [20.6, 366.0], [20.7, 367.0], [20.8, 367.0], [20.9, 367.0], [21.0, 367.0], [21.1, 368.0], [21.2, 368.0], [21.3, 368.0], [21.4, 368.0], [21.5, 369.0], [21.6, 369.0], [21.7, 370.0], [21.8, 370.0], [21.9, 370.0], [22.0, 371.0], [22.1, 372.0], [22.2, 372.0], [22.3, 372.0], [22.4, 374.0], [22.5, 374.0], [22.6, 375.0], [22.7, 375.0], [22.8, 375.0], [22.9, 377.0], [23.0, 378.0], [23.1, 378.0], [23.2, 378.0], [23.3, 378.0], [23.4, 378.0], [23.5, 378.0], [23.6, 378.0], [23.7, 379.0], [23.8, 379.0], [23.9, 379.0], [24.0, 380.0], [24.1, 380.0], [24.2, 380.0], [24.3, 380.0], [24.4, 381.0], [24.5, 381.0], [24.6, 381.0], [24.7, 381.0], [24.8, 381.0], [24.9, 382.0], [25.0, 382.0], [25.1, 382.0], [25.2, 383.0], [25.3, 383.0], [25.4, 384.0], [25.5, 384.0], [25.6, 384.0], [25.7, 384.0], [25.8, 384.0], [25.9, 384.0], [26.0, 385.0], [26.1, 385.0], [26.2, 385.0], [26.3, 385.0], [26.4, 385.0], [26.5, 385.0], [26.6, 387.0], [26.7, 387.0], [26.8, 387.0], [26.9, 387.0], [27.0, 387.0], [27.1, 388.0], [27.2, 388.0], [27.3, 389.0], [27.4, 389.0], [27.5, 389.0], [27.6, 389.0], [27.7, 390.0], [27.8, 391.0], [27.9, 391.0], [28.0, 391.0], [28.1, 391.0], [28.2, 392.0], [28.3, 392.0], [28.4, 392.0], [28.5, 392.0], [28.6, 394.0], [28.7, 394.0], [28.8, 394.0], [28.9, 394.0], [29.0, 394.0], [29.1, 394.0], [29.2, 394.0], [29.3, 395.0], [29.4, 397.0], [29.5, 397.0], [29.6, 398.0], [29.7, 399.0], [29.8, 400.0], [29.9, 400.0], [30.0, 401.0], [30.1, 401.0], [30.2, 401.0], [30.3, 402.0], [30.4, 402.0], [30.5, 403.0], [30.6, 403.0], [30.7, 404.0], [30.8, 404.0], [30.9, 404.0], [31.0, 404.0], [31.1, 405.0], [31.2, 405.0], [31.3, 405.0], [31.4, 405.0], [31.5, 406.0], [31.6, 406.0], [31.7, 406.0], [31.8, 406.0], [31.9, 406.0], [32.0, 407.0], [32.1, 407.0], [32.2, 407.0], [32.3, 408.0], [32.4, 408.0], [32.5, 408.0], [32.6, 409.0], [32.7, 409.0], [32.8, 409.0], [32.9, 409.0], [33.0, 410.0], [33.1, 410.0], [33.2, 411.0], [33.3, 411.0], [33.4, 411.0], [33.5, 412.0], [33.6, 412.0], [33.7, 412.0], [33.8, 413.0], [33.9, 413.0], [34.0, 413.0], [34.1, 413.0], [34.2, 414.0], [34.3, 414.0], [34.4, 414.0], [34.5, 414.0], [34.6, 414.0], [34.7, 415.0], [34.8, 415.0], [34.9, 416.0], [35.0, 417.0], [35.1, 417.0], [35.2, 417.0], [35.3, 418.0], [35.4, 418.0], [35.5, 418.0], [35.6, 419.0], [35.7, 419.0], [35.8, 420.0], [35.9, 420.0], [36.0, 420.0], [36.1, 421.0], [36.2, 421.0], [36.3, 421.0], [36.4, 421.0], [36.5, 421.0], [36.6, 422.0], [36.7, 422.0], [36.8, 422.0], [36.9, 423.0], [37.0, 423.0], [37.1, 424.0], [37.2, 424.0], [37.3, 424.0], [37.4, 424.0], [37.5, 424.0], [37.6, 425.0], [37.7, 425.0], [37.8, 425.0], [37.9, 426.0], [38.0, 426.0], [38.1, 427.0], [38.2, 427.0], [38.3, 427.0], [38.4, 428.0], [38.5, 428.0], [38.6, 428.0], [38.7, 428.0], [38.8, 428.0], [38.9, 428.0], [39.0, 429.0], [39.1, 430.0], [39.2, 431.0], [39.3, 431.0], [39.4, 431.0], [39.5, 431.0], [39.6, 432.0], [39.7, 432.0], [39.8, 432.0], [39.9, 432.0], [40.0, 433.0], [40.1, 433.0], [40.2, 435.0], [40.3, 435.0], [40.4, 435.0], [40.5, 435.0], [40.6, 436.0], [40.7, 436.0], [40.8, 436.0], [40.9, 437.0], [41.0, 438.0], [41.1, 438.0], [41.2, 438.0], [41.3, 438.0], [41.4, 438.0], [41.5, 438.0], [41.6, 438.0], [41.7, 438.0], [41.8, 438.0], [41.9, 438.0], [42.0, 439.0], [42.1, 439.0], [42.2, 439.0], [42.3, 439.0], [42.4, 439.0], [42.5, 440.0], [42.6, 440.0], [42.7, 440.0], [42.8, 440.0], [42.9, 440.0], [43.0, 440.0], [43.1, 440.0], [43.2, 440.0], [43.3, 440.0], [43.4, 440.0], [43.5, 440.0], [43.6, 441.0], [43.7, 441.0], [43.8, 441.0], [43.9, 441.0], [44.0, 442.0], [44.1, 442.0], [44.2, 442.0], [44.3, 443.0], [44.4, 444.0], [44.5, 444.0], [44.6, 444.0], [44.7, 444.0], [44.8, 445.0], [44.9, 445.0], [45.0, 445.0], [45.1, 446.0], [45.2, 446.0], [45.3, 446.0], [45.4, 446.0], [45.5, 447.0], [45.6, 447.0], [45.7, 447.0], [45.8, 447.0], [45.9, 448.0], [46.0, 448.0], [46.1, 448.0], [46.2, 449.0], [46.3, 449.0], [46.4, 450.0], [46.5, 450.0], [46.6, 450.0], [46.7, 451.0], [46.8, 451.0], [46.9, 451.0], [47.0, 452.0], [47.1, 453.0], [47.2, 453.0], [47.3, 453.0], [47.4, 453.0], [47.5, 455.0], [47.6, 455.0], [47.7, 456.0], [47.8, 456.0], [47.9, 457.0], [48.0, 457.0], [48.1, 457.0], [48.2, 457.0], [48.3, 458.0], [48.4, 458.0], [48.5, 458.0], [48.6, 459.0], [48.7, 459.0], [48.8, 459.0], [48.9, 459.0], [49.0, 459.0], [49.1, 459.0], [49.2, 460.0], [49.3, 460.0], [49.4, 460.0], [49.5, 460.0], [49.6, 460.0], [49.7, 460.0], [49.8, 461.0], [49.9, 461.0], [50.0, 462.0], [50.1, 463.0], [50.2, 463.0], [50.3, 463.0], [50.4, 464.0], [50.5, 464.0], [50.6, 464.0], [50.7, 465.0], [50.8, 465.0], [50.9, 465.0], [51.0, 465.0], [51.1, 465.0], [51.2, 466.0], [51.3, 466.0], [51.4, 466.0], [51.5, 466.0], [51.6, 468.0], [51.7, 468.0], [51.8, 469.0], [51.9, 469.0], [52.0, 469.0], [52.1, 469.0], [52.2, 470.0], [52.3, 470.0], [52.4, 471.0], [52.5, 471.0], [52.6, 472.0], [52.7, 474.0], [52.8, 474.0], [52.9, 474.0], [53.0, 474.0], [53.1, 475.0], [53.2, 476.0], [53.3, 476.0], [53.4, 477.0], [53.5, 479.0], [53.6, 479.0], [53.7, 479.0], [53.8, 479.0], [53.9, 480.0], [54.0, 480.0], [54.1, 480.0], [54.2, 480.0], [54.3, 481.0], [54.4, 481.0], [54.5, 481.0], [54.6, 481.0], [54.7, 481.0], [54.8, 481.0], [54.9, 482.0], [55.0, 482.0], [55.1, 482.0], [55.2, 483.0], [55.3, 484.0], [55.4, 484.0], [55.5, 484.0], [55.6, 485.0], [55.7, 485.0], [55.8, 485.0], [55.9, 485.0], [56.0, 485.0], [56.1, 485.0], [56.2, 486.0], [56.3, 486.0], [56.4, 486.0], [56.5, 487.0], [56.6, 487.0], [56.7, 487.0], [56.8, 488.0], [56.9, 488.0], [57.0, 488.0], [57.1, 488.0], [57.2, 488.0], [57.3, 489.0], [57.4, 489.0], [57.5, 489.0], [57.6, 489.0], [57.7, 490.0], [57.8, 490.0], [57.9, 492.0], [58.0, 493.0], [58.1, 493.0], [58.2, 493.0], [58.3, 494.0], [58.4, 495.0], [58.5, 495.0], [58.6, 495.0], [58.7, 495.0], [58.8, 495.0], [58.9, 495.0], [59.0, 496.0], [59.1, 497.0], [59.2, 497.0], [59.3, 497.0], [59.4, 497.0], [59.5, 498.0], [59.6, 498.0], [59.7, 498.0], [59.8, 498.0], [59.9, 499.0], [60.0, 499.0], [60.1, 499.0], [60.2, 499.0], [60.3, 499.0], [60.4, 499.0], [60.5, 500.0], [60.6, 500.0], [60.7, 500.0], [60.8, 500.0], [60.9, 500.0], [61.0, 501.0], [61.1, 501.0], [61.2, 501.0], [61.3, 502.0], [61.4, 502.0], [61.5, 503.0], [61.6, 503.0], [61.7, 503.0], [61.8, 503.0], [61.9, 503.0], [62.0, 505.0], [62.1, 506.0], [62.2, 506.0], [62.3, 506.0], [62.4, 506.0], [62.5, 507.0], [62.6, 508.0], [62.7, 508.0], [62.8, 508.0], [62.9, 509.0], [63.0, 509.0], [63.1, 509.0], [63.2, 510.0], [63.3, 510.0], [63.4, 510.0], [63.5, 511.0], [63.6, 511.0], [63.7, 512.0], [63.8, 512.0], [63.9, 514.0], [64.0, 515.0], [64.1, 515.0], [64.2, 515.0], [64.3, 515.0], [64.4, 516.0], [64.5, 517.0], [64.6, 517.0], [64.7, 518.0], [64.8, 518.0], [64.9, 519.0], [65.0, 519.0], [65.1, 519.0], [65.2, 520.0], [65.3, 520.0], [65.4, 520.0], [65.5, 521.0], [65.6, 523.0], [65.7, 523.0], [65.8, 523.0], [65.9, 524.0], [66.0, 524.0], [66.1, 524.0], [66.2, 525.0], [66.3, 526.0], [66.4, 526.0], [66.5, 526.0], [66.6, 527.0], [66.7, 528.0], [66.8, 528.0], [66.9, 528.0], [67.0, 529.0], [67.1, 530.0], [67.2, 530.0], [67.3, 530.0], [67.4, 531.0], [67.5, 531.0], [67.6, 531.0], [67.7, 532.0], [67.8, 532.0], [67.9, 533.0], [68.0, 533.0], [68.1, 534.0], [68.2, 535.0], [68.3, 535.0], [68.4, 535.0], [68.5, 535.0], [68.6, 536.0], [68.7, 536.0], [68.8, 536.0], [68.9, 537.0], [69.0, 538.0], [69.1, 538.0], [69.2, 539.0], [69.3, 539.0], [69.4, 540.0], [69.5, 540.0], [69.6, 540.0], [69.7, 542.0], [69.8, 543.0], [69.9, 543.0], [70.0, 546.0], [70.1, 547.0], [70.2, 547.0], [70.3, 548.0], [70.4, 549.0], [70.5, 549.0], [70.6, 549.0], [70.7, 551.0], [70.8, 552.0], [70.9, 553.0], [71.0, 553.0], [71.1, 554.0], [71.2, 554.0], [71.3, 555.0], [71.4, 555.0], [71.5, 557.0], [71.6, 557.0], [71.7, 557.0], [71.8, 557.0], [71.9, 558.0], [72.0, 561.0], [72.1, 561.0], [72.2, 561.0], [72.3, 562.0], [72.4, 562.0], [72.5, 562.0], [72.6, 564.0], [72.7, 571.0], [72.8, 572.0], [72.9, 572.0], [73.0, 574.0], [73.1, 575.0], [73.2, 578.0], [73.3, 578.0], [73.4, 578.0], [73.5, 579.0], [73.6, 579.0], [73.7, 579.0], [73.8, 580.0], [73.9, 580.0], [74.0, 580.0], [74.1, 580.0], [74.2, 581.0], [74.3, 582.0], [74.4, 582.0], [74.5, 584.0], [74.6, 585.0], [74.7, 587.0], [74.8, 587.0], [74.9, 587.0], [75.0, 587.0], [75.1, 587.0], [75.2, 588.0], [75.3, 589.0], [75.4, 591.0], [75.5, 591.0], [75.6, 591.0], [75.7, 592.0], [75.8, 592.0], [75.9, 592.0], [76.0, 592.0], [76.1, 592.0], [76.2, 592.0], [76.3, 592.0], [76.4, 593.0], [76.5, 593.0], [76.6, 593.0], [76.7, 593.0], [76.8, 595.0], [76.9, 595.0], [77.0, 595.0], [77.1, 597.0], [77.2, 598.0], [77.3, 599.0], [77.4, 599.0], [77.5, 599.0], [77.6, 599.0], [77.7, 600.0], [77.8, 600.0], [77.9, 600.0], [78.0, 601.0], [78.1, 603.0], [78.2, 603.0], [78.3, 603.0], [78.4, 603.0], [78.5, 603.0], [78.6, 604.0], [78.7, 604.0], [78.8, 609.0], [78.9, 609.0], [79.0, 610.0], [79.1, 610.0], [79.2, 611.0], [79.3, 611.0], [79.4, 611.0], [79.5, 612.0], [79.6, 613.0], [79.7, 613.0], [79.8, 615.0], [79.9, 616.0], [80.0, 616.0], [80.1, 616.0], [80.2, 617.0], [80.3, 618.0], [80.4, 618.0], [80.5, 620.0], [80.6, 622.0], [80.7, 624.0], [80.8, 624.0], [80.9, 625.0], [81.0, 625.0], [81.1, 626.0], [81.2, 626.0], [81.3, 626.0], [81.4, 631.0], [81.5, 631.0], [81.6, 631.0], [81.7, 632.0], [81.8, 632.0], [81.9, 632.0], [82.0, 634.0], [82.1, 634.0], [82.2, 635.0], [82.3, 635.0], [82.4, 636.0], [82.5, 636.0], [82.6, 636.0], [82.7, 636.0], [82.8, 637.0], [82.9, 638.0], [83.0, 640.0], [83.1, 640.0], [83.2, 642.0], [83.3, 645.0], [83.4, 645.0], [83.5, 649.0], [83.6, 651.0], [83.7, 653.0], [83.8, 653.0], [83.9, 653.0], [84.0, 655.0], [84.1, 659.0], [84.2, 659.0], [84.3, 659.0], [84.4, 662.0], [84.5, 662.0], [84.6, 662.0], [84.7, 665.0], [84.8, 667.0], [84.9, 668.0], [85.0, 668.0], [85.1, 669.0], [85.2, 669.0], [85.3, 669.0], [85.4, 673.0], [85.5, 673.0], [85.6, 673.0], [85.7, 673.0], [85.8, 675.0], [85.9, 675.0], [86.0, 676.0], [86.1, 676.0], [86.2, 677.0], [86.3, 678.0], [86.4, 679.0], [86.5, 679.0], [86.6, 683.0], [86.7, 684.0], [86.8, 684.0], [86.9, 687.0], [87.0, 687.0], [87.1, 688.0], [87.2, 688.0], [87.3, 689.0], [87.4, 689.0], [87.5, 691.0], [87.6, 691.0], [87.7, 693.0], [87.8, 696.0], [87.9, 700.0], [88.0, 700.0], [88.1, 705.0], [88.2, 706.0], [88.3, 707.0], [88.4, 707.0], [88.5, 709.0], [88.6, 710.0], [88.7, 710.0], [88.8, 710.0], [88.9, 711.0], [89.0, 712.0], [89.1, 712.0], [89.2, 713.0], [89.3, 714.0], [89.4, 717.0], [89.5, 717.0], [89.6, 718.0], [89.7, 719.0], [89.8, 723.0], [89.9, 723.0], [90.0, 725.0], [90.1, 735.0], [90.2, 735.0], [90.3, 735.0], [90.4, 741.0], [90.5, 742.0], [90.6, 742.0], [90.7, 745.0], [90.8, 745.0], [90.9, 757.0], [91.0, 757.0], [91.1, 762.0], [91.2, 762.0], [91.3, 763.0], [91.4, 763.0], [91.5, 767.0], [91.6, 771.0], [91.7, 771.0], [91.8, 773.0], [91.9, 776.0], [92.0, 777.0], [92.1, 777.0], [92.2, 799.0], [92.3, 800.0], [92.4, 800.0], [92.5, 800.0], [92.6, 802.0], [92.7, 805.0], [92.8, 816.0], [92.9, 816.0], [93.0, 822.0], [93.1, 822.0], [93.2, 828.0], [93.3, 828.0], [93.4, 835.0], [93.5, 865.0], [93.6, 865.0], [93.7, 885.0], [93.8, 891.0], [93.9, 892.0], [94.0, 892.0], [94.1, 902.0], [94.2, 908.0], [94.3, 916.0], [94.4, 916.0], [94.5, 927.0], [94.6, 931.0], [94.7, 933.0], [94.8, 933.0], [94.9, 946.0], [95.0, 949.0], [95.1, 949.0], [95.2, 951.0], [95.3, 971.0], [95.4, 981.0], [95.5, 981.0], [95.6, 983.0], [95.7, 998.0], [95.8, 1025.0], [95.9, 1025.0], [96.0, 1039.0], [96.1, 1059.0], [96.2, 1071.0], [96.3, 1071.0], [96.4, 1108.0], [96.5, 1131.0], [96.6, 1137.0], [96.7, 1137.0], [96.8, 1141.0], [96.9, 1169.0], [97.0, 1169.0], [97.1, 1173.0], [97.2, 1196.0], [97.3, 1205.0], [97.4, 1205.0], [97.5, 1208.0], [97.6, 1219.0], [97.7, 1265.0], [97.8, 1265.0], [97.9, 1346.0], [98.0, 1349.0], [98.1, 1401.0], [98.2, 1401.0], [98.3, 1494.0], [98.4, 1507.0], [98.5, 1507.0], [98.6, 1509.0], [98.7, 1526.0], [98.8, 1538.0], [98.9, 1538.0], [99.0, 1547.0], [99.1, 1575.0], [99.2, 1607.0], [99.3, 1607.0], [99.4, 1985.0], [99.5, 2205.0], [99.6, 2768.0], [99.7, 2768.0], [99.8, 2876.0], [99.9, 2911.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 225.0, "series": [{"data": [[2200.0, 1.0], [600.0, 75.0], [700.0, 32.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [200.0, 65.0], [800.0, 13.0], [900.0, 13.0], [1000.0, 4.0], [1100.0, 7.0], [1200.0, 4.0], [300.0, 141.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 6.0], [100.0, 13.0], [400.0, 225.0], [1600.0, 1.0], [1900.0, 1.0], [500.0, 127.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 448.0, "series": [{"data": [[0.0, 448.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 275.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.777227722772277, "minX": 1.60263264E12, "maxY": 9.998123827392124, "series": [{"data": [[1.60263264E12, 9.998123827392124], [1.6026327E12, 9.777227722772277]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026327E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 835.0, "series": [{"data": [[8.0, 414.0], [4.0, 417.0], [2.0, 378.0], [1.0, 835.0], [9.0, 498.5], [10.0, 519.5696551724138], [5.0, 284.0], [6.0, 370.0], [3.0, 309.0], [7.0, 351.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 518.4258503401361]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1552.85, "minX": 1.60263264E12, "maxY": 1553051.1166666667, "series": [{"data": [[1.60263264E12, 1553051.1166666667], [1.6026327E12, 480995.18333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263264E12, 4117.183333333333], [1.6026327E12, 1552.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026327E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 505.0990099009901, "minX": 1.60263264E12, "maxY": 523.4765478424018, "series": [{"data": [[1.60263264E12, 523.4765478424018], [1.6026327E12, 505.0990099009901]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026327E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 503.7079207920793, "minX": 1.60263264E12, "maxY": 522.0544090056289, "series": [{"data": [[1.60263264E12, 522.0544090056289], [1.6026327E12, 503.7079207920793]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026327E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263264E12, "maxY": 0.18574108818011295, "series": [{"data": [[1.60263264E12, 0.18574108818011295], [1.6026327E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026327E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60263264E12, "maxY": 2911.0, "series": [{"data": [[1.60263264E12, 2911.0], [1.6026327E12, 1538.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263264E12, 187.22399949073792], [1.6026327E12, 247.00399748325347]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263264E12, 188.0], [1.6026327E12, 256.0970001935959]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263264E12, 188.0], [1.6026327E12, 252.28199874162675]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263264E12, 179.0], [1.6026327E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263264E12, 466.0], [1.6026327E12, 457.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026327E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 225.0, "minX": 4.0, "maxY": 1133.5, "series": [{"data": [[8.0, 1133.5], [11.0, 484.0], [14.0, 353.5], [15.0, 631.0], [16.0, 505.0], [4.0, 397.5], [17.0, 488.0], [18.0, 508.0], [19.0, 485.0], [20.0, 488.0], [21.0, 498.5], [22.0, 436.5], [23.0, 420.0], [6.0, 225.0], [24.0, 445.5], [25.0, 369.0], [27.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 224.5, "minX": 4.0, "maxY": 1133.0, "series": [{"data": [[8.0, 1133.0], [11.0, 484.0], [14.0, 353.5], [15.0, 630.0], [16.0, 505.0], [4.0, 397.5], [17.0, 488.0], [18.0, 507.0], [19.0, 484.0], [20.0, 487.0], [21.0, 497.5], [22.0, 436.0], [23.0, 420.0], [6.0, 224.5], [24.0, 445.0], [25.0, 368.0], [27.0, 357.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.60263264E12, "maxY": 9.05, "series": [{"data": [[1.60263264E12, 9.05], [1.6026327E12, 3.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026327E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.60263264E12, "maxY": 8.883333333333333, "series": [{"data": [[1.60263264E12, 8.883333333333333], [1.6026327E12, 3.3666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6026327E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.60263264E12, "maxY": 8.883333333333333, "series": [{"data": [[1.60263264E12, 8.883333333333333], [1.6026327E12, 3.3666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026327E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.60263264E12, "maxY": 8.883333333333333, "series": [{"data": [[1.60263264E12, 8.883333333333333], [1.6026327E12, 3.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6026327E12, "title": "Total Transactions Per Second"}},
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

