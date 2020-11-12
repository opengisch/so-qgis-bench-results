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
        data: {"result": {"minY": 185.0, "minX": 0.0, "maxY": 2818.0, "series": [{"data": [[0.0, 185.0], [0.1, 185.0], [0.2, 187.0], [0.3, 203.0], [0.4, 203.0], [0.5, 203.0], [0.6, 204.0], [0.7, 205.0], [0.8, 205.0], [0.9, 208.0], [1.0, 210.0], [1.1, 210.0], [1.2, 210.0], [1.3, 210.0], [1.4, 211.0], [1.5, 211.0], [1.6, 211.0], [1.7, 212.0], [1.8, 213.0], [1.9, 213.0], [2.0, 213.0], [2.1, 215.0], [2.2, 215.0], [2.3, 215.0], [2.4, 215.0], [2.5, 217.0], [2.6, 218.0], [2.7, 218.0], [2.8, 220.0], [2.9, 221.0], [3.0, 221.0], [3.1, 221.0], [3.2, 222.0], [3.3, 223.0], [3.4, 223.0], [3.5, 224.0], [3.6, 225.0], [3.7, 226.0], [3.8, 226.0], [3.9, 226.0], [4.0, 228.0], [4.1, 228.0], [4.2, 228.0], [4.3, 228.0], [4.4, 228.0], [4.5, 229.0], [4.6, 229.0], [4.7, 229.0], [4.8, 230.0], [4.9, 231.0], [5.0, 231.0], [5.1, 231.0], [5.2, 231.0], [5.3, 231.0], [5.4, 232.0], [5.5, 232.0], [5.6, 232.0], [5.7, 232.0], [5.8, 235.0], [5.9, 235.0], [6.0, 235.0], [6.1, 235.0], [6.2, 235.0], [6.3, 236.0], [6.4, 236.0], [6.5, 236.0], [6.6, 236.0], [6.7, 238.0], [6.8, 238.0], [6.9, 239.0], [7.0, 247.0], [7.1, 249.0], [7.2, 249.0], [7.3, 250.0], [7.4, 252.0], [7.5, 256.0], [7.6, 256.0], [7.7, 257.0], [7.8, 258.0], [7.9, 259.0], [8.0, 259.0], [8.1, 259.0], [8.2, 261.0], [8.3, 261.0], [8.4, 261.0], [8.5, 263.0], [8.6, 264.0], [8.7, 264.0], [8.8, 264.0], [8.9, 267.0], [9.0, 268.0], [9.1, 268.0], [9.2, 268.0], [9.3, 270.0], [9.4, 270.0], [9.5, 270.0], [9.6, 272.0], [9.7, 272.0], [9.8, 274.0], [9.9, 274.0], [10.0, 275.0], [10.1, 276.0], [10.2, 276.0], [10.3, 278.0], [10.4, 278.0], [10.5, 278.0], [10.6, 278.0], [10.7, 279.0], [10.8, 279.0], [10.9, 279.0], [11.0, 279.0], [11.1, 279.0], [11.2, 279.0], [11.3, 280.0], [11.4, 280.0], [11.5, 280.0], [11.6, 281.0], [11.7, 281.0], [11.8, 281.0], [11.9, 282.0], [12.0, 283.0], [12.1, 283.0], [12.2, 283.0], [12.3, 283.0], [12.4, 283.0], [12.5, 283.0], [12.6, 283.0], [12.7, 284.0], [12.8, 284.0], [12.9, 284.0], [13.0, 284.0], [13.1, 285.0], [13.2, 285.0], [13.3, 285.0], [13.4, 285.0], [13.5, 285.0], [13.6, 285.0], [13.7, 285.0], [13.8, 285.0], [13.9, 285.0], [14.0, 285.0], [14.1, 286.0], [14.2, 287.0], [14.3, 287.0], [14.4, 287.0], [14.5, 287.0], [14.6, 287.0], [14.7, 287.0], [14.8, 287.0], [14.9, 287.0], [15.0, 288.0], [15.1, 288.0], [15.2, 288.0], [15.3, 288.0], [15.4, 288.0], [15.5, 288.0], [15.6, 289.0], [15.7, 289.0], [15.8, 290.0], [15.9, 290.0], [16.0, 290.0], [16.1, 290.0], [16.2, 290.0], [16.3, 290.0], [16.4, 290.0], [16.5, 290.0], [16.6, 290.0], [16.7, 290.0], [16.8, 290.0], [16.9, 291.0], [17.0, 291.0], [17.1, 291.0], [17.2, 292.0], [17.3, 292.0], [17.4, 292.0], [17.5, 294.0], [17.6, 294.0], [17.7, 294.0], [17.8, 294.0], [17.9, 294.0], [18.0, 295.0], [18.1, 295.0], [18.2, 295.0], [18.3, 297.0], [18.4, 300.0], [18.5, 300.0], [18.6, 300.0], [18.7, 300.0], [18.8, 301.0], [18.9, 301.0], [19.0, 301.0], [19.1, 302.0], [19.2, 302.0], [19.3, 302.0], [19.4, 303.0], [19.5, 303.0], [19.6, 304.0], [19.7, 304.0], [19.8, 306.0], [19.9, 306.0], [20.0, 306.0], [20.1, 306.0], [20.2, 307.0], [20.3, 308.0], [20.4, 308.0], [20.5, 308.0], [20.6, 308.0], [20.7, 308.0], [20.8, 308.0], [20.9, 308.0], [21.0, 309.0], [21.1, 309.0], [21.2, 309.0], [21.3, 309.0], [21.4, 310.0], [21.5, 310.0], [21.6, 310.0], [21.7, 310.0], [21.8, 311.0], [21.9, 311.0], [22.0, 311.0], [22.1, 311.0], [22.2, 313.0], [22.3, 313.0], [22.4, 313.0], [22.5, 313.0], [22.6, 313.0], [22.7, 313.0], [22.8, 314.0], [22.9, 314.0], [23.0, 314.0], [23.1, 314.0], [23.2, 314.0], [23.3, 315.0], [23.4, 315.0], [23.5, 315.0], [23.6, 316.0], [23.7, 316.0], [23.8, 316.0], [23.9, 316.0], [24.0, 317.0], [24.1, 317.0], [24.2, 317.0], [24.3, 317.0], [24.4, 318.0], [24.5, 319.0], [24.6, 319.0], [24.7, 319.0], [24.8, 320.0], [24.9, 320.0], [25.0, 320.0], [25.1, 320.0], [25.2, 320.0], [25.3, 320.0], [25.4, 321.0], [25.5, 322.0], [25.6, 322.0], [25.7, 322.0], [25.8, 324.0], [25.9, 324.0], [26.0, 324.0], [26.1, 324.0], [26.2, 324.0], [26.3, 324.0], [26.4, 325.0], [26.5, 325.0], [26.6, 325.0], [26.7, 326.0], [26.8, 326.0], [26.9, 326.0], [27.0, 326.0], [27.1, 328.0], [27.2, 328.0], [27.3, 328.0], [27.4, 331.0], [27.5, 334.0], [27.6, 334.0], [27.7, 334.0], [27.8, 336.0], [27.9, 336.0], [28.0, 336.0], [28.1, 336.0], [28.2, 336.0], [28.3, 339.0], [28.4, 339.0], [28.5, 340.0], [28.6, 341.0], [28.7, 341.0], [28.8, 341.0], [28.9, 343.0], [29.0, 343.0], [29.1, 343.0], [29.2, 344.0], [29.3, 346.0], [29.4, 348.0], [29.5, 348.0], [29.6, 351.0], [29.7, 353.0], [29.8, 355.0], [29.9, 355.0], [30.0, 355.0], [30.1, 358.0], [30.2, 358.0], [30.3, 362.0], [30.4, 364.0], [30.5, 365.0], [30.6, 365.0], [30.7, 366.0], [30.8, 366.0], [30.9, 367.0], [31.0, 367.0], [31.1, 369.0], [31.2, 370.0], [31.3, 372.0], [31.4, 372.0], [31.5, 373.0], [31.6, 373.0], [31.7, 373.0], [31.8, 373.0], [31.9, 375.0], [32.0, 376.0], [32.1, 376.0], [32.2, 376.0], [32.3, 377.0], [32.4, 379.0], [32.5, 379.0], [32.6, 379.0], [32.7, 381.0], [32.8, 381.0], [32.9, 381.0], [33.0, 381.0], [33.1, 383.0], [33.2, 384.0], [33.3, 384.0], [33.4, 386.0], [33.5, 387.0], [33.6, 387.0], [33.7, 388.0], [33.8, 388.0], [33.9, 389.0], [34.0, 389.0], [34.1, 391.0], [34.2, 391.0], [34.3, 392.0], [34.4, 392.0], [34.5, 393.0], [34.6, 393.0], [34.7, 394.0], [34.8, 394.0], [34.9, 395.0], [35.0, 397.0], [35.1, 397.0], [35.2, 397.0], [35.3, 398.0], [35.4, 398.0], [35.5, 398.0], [35.6, 398.0], [35.7, 398.0], [35.8, 398.0], [35.9, 398.0], [36.0, 399.0], [36.1, 399.0], [36.2, 399.0], [36.3, 399.0], [36.4, 399.0], [36.5, 400.0], [36.6, 400.0], [36.7, 400.0], [36.8, 401.0], [36.9, 401.0], [37.0, 401.0], [37.1, 401.0], [37.2, 402.0], [37.3, 402.0], [37.4, 402.0], [37.5, 402.0], [37.6, 403.0], [37.7, 403.0], [37.8, 403.0], [37.9, 403.0], [38.0, 404.0], [38.1, 404.0], [38.2, 404.0], [38.3, 404.0], [38.4, 404.0], [38.5, 404.0], [38.6, 405.0], [38.7, 405.0], [38.8, 405.0], [38.9, 405.0], [39.0, 405.0], [39.1, 406.0], [39.2, 406.0], [39.3, 406.0], [39.4, 406.0], [39.5, 406.0], [39.6, 406.0], [39.7, 406.0], [39.8, 406.0], [39.9, 406.0], [40.0, 406.0], [40.1, 406.0], [40.2, 407.0], [40.3, 407.0], [40.4, 407.0], [40.5, 407.0], [40.6, 408.0], [40.7, 408.0], [40.8, 408.0], [40.9, 408.0], [41.0, 408.0], [41.1, 408.0], [41.2, 408.0], [41.3, 409.0], [41.4, 409.0], [41.5, 410.0], [41.6, 410.0], [41.7, 410.0], [41.8, 411.0], [41.9, 411.0], [42.0, 411.0], [42.1, 411.0], [42.2, 411.0], [42.3, 411.0], [42.4, 411.0], [42.5, 412.0], [42.6, 412.0], [42.7, 412.0], [42.8, 413.0], [42.9, 413.0], [43.0, 413.0], [43.1, 413.0], [43.2, 413.0], [43.3, 413.0], [43.4, 413.0], [43.5, 413.0], [43.6, 414.0], [43.7, 414.0], [43.8, 414.0], [43.9, 414.0], [44.0, 415.0], [44.1, 415.0], [44.2, 415.0], [44.3, 416.0], [44.4, 416.0], [44.5, 416.0], [44.6, 416.0], [44.7, 417.0], [44.8, 417.0], [44.9, 417.0], [45.0, 417.0], [45.1, 417.0], [45.2, 417.0], [45.3, 417.0], [45.4, 417.0], [45.5, 418.0], [45.6, 419.0], [45.7, 419.0], [45.8, 419.0], [45.9, 419.0], [46.0, 419.0], [46.1, 419.0], [46.2, 419.0], [46.3, 420.0], [46.4, 421.0], [46.5, 421.0], [46.6, 421.0], [46.7, 421.0], [46.8, 421.0], [46.9, 421.0], [47.0, 421.0], [47.1, 421.0], [47.2, 421.0], [47.3, 421.0], [47.4, 421.0], [47.5, 422.0], [47.6, 422.0], [47.7, 422.0], [47.8, 422.0], [47.9, 422.0], [48.0, 422.0], [48.1, 422.0], [48.2, 423.0], [48.3, 424.0], [48.4, 424.0], [48.5, 424.0], [48.6, 424.0], [48.7, 424.0], [48.8, 424.0], [48.9, 424.0], [49.0, 425.0], [49.1, 425.0], [49.2, 425.0], [49.3, 425.0], [49.4, 425.0], [49.5, 425.0], [49.6, 427.0], [49.7, 427.0], [49.8, 428.0], [49.9, 428.0], [50.0, 428.0], [50.1, 429.0], [50.2, 429.0], [50.3, 429.0], [50.4, 429.0], [50.5, 429.0], [50.6, 429.0], [50.7, 429.0], [50.8, 429.0], [50.9, 429.0], [51.0, 429.0], [51.1, 429.0], [51.2, 430.0], [51.3, 430.0], [51.4, 430.0], [51.5, 431.0], [51.6, 431.0], [51.7, 431.0], [51.8, 431.0], [51.9, 431.0], [52.0, 431.0], [52.1, 431.0], [52.2, 431.0], [52.3, 431.0], [52.4, 431.0], [52.5, 431.0], [52.6, 431.0], [52.7, 433.0], [52.8, 433.0], [52.9, 433.0], [53.0, 435.0], [53.1, 436.0], [53.2, 436.0], [53.3, 436.0], [53.4, 436.0], [53.5, 438.0], [53.6, 438.0], [53.7, 438.0], [53.8, 439.0], [53.9, 440.0], [54.0, 440.0], [54.1, 441.0], [54.2, 442.0], [54.3, 442.0], [54.4, 442.0], [54.5, 444.0], [54.6, 446.0], [54.7, 446.0], [54.8, 446.0], [54.9, 449.0], [55.0, 450.0], [55.1, 450.0], [55.2, 453.0], [55.3, 454.0], [55.4, 456.0], [55.5, 456.0], [55.6, 457.0], [55.7, 457.0], [55.8, 458.0], [55.9, 458.0], [56.0, 461.0], [56.1, 462.0], [56.2, 462.0], [56.3, 462.0], [56.4, 464.0], [56.5, 466.0], [56.6, 466.0], [56.7, 466.0], [56.8, 466.0], [56.9, 468.0], [57.0, 468.0], [57.1, 470.0], [57.2, 472.0], [57.3, 472.0], [57.4, 472.0], [57.5, 473.0], [57.6, 473.0], [57.7, 473.0], [57.8, 473.0], [57.9, 474.0], [58.0, 474.0], [58.1, 475.0], [58.2, 475.0], [58.3, 475.0], [58.4, 475.0], [58.5, 475.0], [58.6, 476.0], [58.7, 476.0], [58.8, 477.0], [58.9, 477.0], [59.0, 478.0], [59.1, 478.0], [59.2, 479.0], [59.3, 479.0], [59.4, 479.0], [59.5, 480.0], [59.6, 481.0], [59.7, 481.0], [59.8, 482.0], [59.9, 482.0], [60.0, 483.0], [60.1, 483.0], [60.2, 483.0], [60.3, 485.0], [60.4, 485.0], [60.5, 485.0], [60.6, 486.0], [60.7, 487.0], [60.8, 487.0], [60.9, 488.0], [61.0, 488.0], [61.1, 489.0], [61.2, 489.0], [61.3, 490.0], [61.4, 490.0], [61.5, 491.0], [61.6, 491.0], [61.7, 492.0], [61.8, 492.0], [61.9, 492.0], [62.0, 492.0], [62.1, 493.0], [62.2, 493.0], [62.3, 493.0], [62.4, 494.0], [62.5, 494.0], [62.6, 494.0], [62.7, 494.0], [62.8, 495.0], [62.9, 496.0], [63.0, 499.0], [63.1, 499.0], [63.2, 500.0], [63.3, 501.0], [63.4, 501.0], [63.5, 504.0], [63.6, 509.0], [63.7, 510.0], [63.8, 510.0], [63.9, 518.0], [64.0, 519.0], [64.1, 528.0], [64.2, 528.0], [64.3, 529.0], [64.4, 530.0], [64.5, 530.0], [64.6, 530.0], [64.7, 532.0], [64.8, 533.0], [64.9, 533.0], [65.0, 533.0], [65.1, 534.0], [65.2, 536.0], [65.3, 536.0], [65.4, 536.0], [65.5, 537.0], [65.6, 537.0], [65.7, 537.0], [65.8, 538.0], [65.9, 538.0], [66.0, 538.0], [66.1, 538.0], [66.2, 538.0], [66.3, 538.0], [66.4, 538.0], [66.5, 538.0], [66.6, 539.0], [66.7, 539.0], [66.8, 539.0], [66.9, 539.0], [67.0, 540.0], [67.1, 540.0], [67.2, 540.0], [67.3, 540.0], [67.4, 540.0], [67.5, 540.0], [67.6, 540.0], [67.7, 541.0], [67.8, 541.0], [67.9, 541.0], [68.0, 541.0], [68.1, 542.0], [68.2, 542.0], [68.3, 543.0], [68.4, 543.0], [68.5, 544.0], [68.6, 544.0], [68.7, 544.0], [68.8, 544.0], [68.9, 546.0], [69.0, 546.0], [69.1, 546.0], [69.2, 546.0], [69.3, 547.0], [69.4, 547.0], [69.5, 547.0], [69.6, 547.0], [69.7, 548.0], [69.8, 548.0], [69.9, 548.0], [70.0, 548.0], [70.1, 549.0], [70.2, 549.0], [70.3, 549.0], [70.4, 550.0], [70.5, 550.0], [70.6, 550.0], [70.7, 550.0], [70.8, 550.0], [70.9, 551.0], [71.0, 551.0], [71.1, 553.0], [71.2, 554.0], [71.3, 554.0], [71.4, 554.0], [71.5, 554.0], [71.6, 555.0], [71.7, 555.0], [71.8, 556.0], [71.9, 556.0], [72.0, 556.0], [72.1, 556.0], [72.2, 556.0], [72.3, 556.0], [72.4, 557.0], [72.5, 557.0], [72.6, 560.0], [72.7, 561.0], [72.8, 561.0], [72.9, 561.0], [73.0, 562.0], [73.1, 562.0], [73.2, 562.0], [73.3, 562.0], [73.4, 563.0], [73.5, 564.0], [73.6, 564.0], [73.7, 565.0], [73.8, 565.0], [73.9, 565.0], [74.0, 565.0], [74.1, 566.0], [74.2, 568.0], [74.3, 571.0], [74.4, 571.0], [74.5, 571.0], [74.6, 572.0], [74.7, 572.0], [74.8, 572.0], [74.9, 572.0], [75.0, 573.0], [75.1, 573.0], [75.2, 573.0], [75.3, 574.0], [75.4, 577.0], [75.5, 577.0], [75.6, 578.0], [75.7, 578.0], [75.8, 579.0], [75.9, 579.0], [76.0, 579.0], [76.1, 580.0], [76.2, 580.0], [76.3, 580.0], [76.4, 581.0], [76.5, 583.0], [76.6, 584.0], [76.7, 584.0], [76.8, 585.0], [76.9, 585.0], [77.0, 585.0], [77.1, 585.0], [77.2, 587.0], [77.3, 588.0], [77.4, 588.0], [77.5, 589.0], [77.6, 590.0], [77.7, 591.0], [77.8, 591.0], [77.9, 594.0], [78.0, 594.0], [78.1, 595.0], [78.2, 595.0], [78.3, 596.0], [78.4, 597.0], [78.5, 597.0], [78.6, 598.0], [78.7, 599.0], [78.8, 600.0], [78.9, 600.0], [79.0, 601.0], [79.1, 603.0], [79.2, 604.0], [79.3, 604.0], [79.4, 604.0], [79.5, 604.0], [79.6, 609.0], [79.7, 609.0], [79.8, 610.0], [79.9, 610.0], [80.0, 611.0], [80.1, 611.0], [80.2, 612.0], [80.3, 614.0], [80.4, 614.0], [80.5, 614.0], [80.6, 614.0], [80.7, 617.0], [80.8, 617.0], [80.9, 618.0], [81.0, 618.0], [81.1, 618.0], [81.2, 618.0], [81.3, 620.0], [81.4, 626.0], [81.5, 628.0], [81.6, 628.0], [81.7, 631.0], [81.8, 633.0], [81.9, 633.0], [82.0, 635.0], [82.1, 638.0], [82.2, 638.0], [82.3, 638.0], [82.4, 642.0], [82.5, 643.0], [82.6, 648.0], [82.7, 648.0], [82.8, 649.0], [82.9, 649.0], [83.0, 649.0], [83.1, 649.0], [83.2, 650.0], [83.3, 651.0], [83.4, 651.0], [83.5, 651.0], [83.6, 652.0], [83.7, 652.0], [83.8, 652.0], [83.9, 652.0], [84.0, 653.0], [84.1, 653.0], [84.2, 653.0], [84.3, 653.0], [84.4, 654.0], [84.5, 656.0], [84.6, 656.0], [84.7, 657.0], [84.8, 660.0], [84.9, 661.0], [85.0, 661.0], [85.1, 662.0], [85.2, 663.0], [85.3, 663.0], [85.4, 667.0], [85.5, 667.0], [85.6, 667.0], [85.7, 667.0], [85.8, 668.0], [85.9, 669.0], [86.0, 669.0], [86.1, 669.0], [86.2, 670.0], [86.3, 671.0], [86.4, 672.0], [86.5, 672.0], [86.6, 672.0], [86.7, 673.0], [86.8, 673.0], [86.9, 673.0], [87.0, 674.0], [87.1, 675.0], [87.2, 675.0], [87.3, 678.0], [87.4, 678.0], [87.5, 680.0], [87.6, 680.0], [87.7, 681.0], [87.8, 682.0], [87.9, 683.0], [88.0, 683.0], [88.1, 683.0], [88.2, 684.0], [88.3, 688.0], [88.4, 688.0], [88.5, 697.0], [88.6, 698.0], [88.7, 698.0], [88.8, 700.0], [88.9, 701.0], [89.0, 702.0], [89.1, 702.0], [89.2, 708.0], [89.3, 712.0], [89.4, 713.0], [89.5, 713.0], [89.6, 717.0], [89.7, 719.0], [89.8, 720.0], [89.9, 720.0], [90.0, 720.0], [90.1, 723.0], [90.2, 723.0], [90.3, 724.0], [90.4, 725.0], [90.5, 727.0], [90.6, 727.0], [90.7, 727.0], [90.8, 730.0], [90.9, 732.0], [91.0, 732.0], [91.1, 734.0], [91.2, 734.0], [91.3, 736.0], [91.4, 736.0], [91.5, 736.0], [91.6, 737.0], [91.7, 737.0], [91.8, 742.0], [91.9, 742.0], [92.0, 742.0], [92.1, 742.0], [92.2, 743.0], [92.3, 745.0], [92.4, 746.0], [92.5, 746.0], [92.6, 753.0], [92.7, 753.0], [92.8, 755.0], [92.9, 755.0], [93.0, 756.0], [93.1, 758.0], [93.2, 762.0], [93.3, 762.0], [93.4, 763.0], [93.5, 764.0], [93.6, 764.0], [93.7, 768.0], [93.8, 775.0], [93.9, 779.0], [94.0, 779.0], [94.1, 807.0], [94.2, 810.0], [94.3, 810.0], [94.4, 810.0], [94.5, 820.0], [94.6, 823.0], [94.7, 830.0], [94.8, 830.0], [94.9, 837.0], [95.0, 837.0], [95.1, 837.0], [95.2, 841.0], [95.3, 844.0], [95.4, 846.0], [95.5, 846.0], [95.6, 846.0], [95.7, 848.0], [95.8, 865.0], [95.9, 865.0], [96.0, 903.0], [96.1, 917.0], [96.2, 945.0], [96.3, 945.0], [96.4, 948.0], [96.5, 956.0], [96.6, 960.0], [96.7, 960.0], [96.8, 972.0], [96.9, 974.0], [97.0, 974.0], [97.1, 977.0], [97.2, 979.0], [97.3, 984.0], [97.4, 984.0], [97.5, 1024.0], [97.6, 1043.0], [97.7, 1048.0], [97.8, 1048.0], [97.9, 1065.0], [98.0, 1069.0], [98.1, 1093.0], [98.2, 1093.0], [98.3, 1150.0], [98.4, 1159.0], [98.5, 1159.0], [98.6, 1212.0], [98.7, 1225.0], [98.8, 1240.0], [98.9, 1240.0], [99.0, 1243.0], [99.1, 1256.0], [99.2, 1350.0], [99.3, 1350.0], [99.4, 1610.0], [99.5, 1634.0], [99.6, 1648.0], [99.7, 1648.0], [99.8, 2784.0], [99.9, 2818.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 196.0, "series": [{"data": [[600.0, 73.0], [2800.0, 1.0], [700.0, 39.0], [2700.0, 1.0], [200.0, 133.0], [800.0, 14.0], [900.0, 11.0], [1000.0, 6.0], [1100.0, 2.0], [300.0, 133.0], [1200.0, 5.0], [1300.0, 1.0], [400.0, 196.0], [1600.0, 3.0], [100.0, 2.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 465.0, "series": [{"data": [[0.0, 465.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 265.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6050639E12, "maxY": 1.0, "series": [{"data": [[1.60506402E12, 1.0], [1.6050639E12, 1.0], [1.6050642E12, 1.0], [1.60506426E12, 1.0], [1.60506408E12, 1.0], [1.60506414E12, 1.0], [1.60506396E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506426E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 482.6027210884354, "minX": 1.0, "maxY": 482.6027210884354, "series": [{"data": [[1.0, 482.6027210884354]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 482.6027210884354]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 190.1, "minX": 1.6050639E12, "maxY": 354507.3, "series": [{"data": [[1.60506402E12, 261045.96666666667], [1.6050639E12, 121430.9], [1.6050642E12, 253013.06666666668], [1.60506426E12, 216111.51666666666], [1.60506408E12, 329390.06666666665], [1.60506414E12, 300770.8333333333], [1.60506396E12, 354507.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60506402E12, 891.6833333333333], [1.6050639E12, 190.1], [1.6050642E12, 899.6666666666666], [1.60506426E12, 711.0166666666667], [1.60506408E12, 1108.3], [1.60506414E12, 852.2166666666667], [1.60506396E12, 870.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506426E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 397.72666666666663, "minX": 1.6050639E12, "maxY": 563.84, "series": [{"data": [[1.60506402E12, 510.30508474576305], [1.6050639E12, 563.84], [1.6050642E12, 502.30252100840323], [1.60506426E12, 431.4166666666668], [1.60506408E12, 397.72666666666663], [1.60506414E12, 535.0714285714284], [1.60506396E12, 518.4695652173914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506426E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 396.75333333333333, "minX": 1.6050639E12, "maxY": 562.0400000000001, "series": [{"data": [[1.60506402E12, 509.11016949152537], [1.6050639E12, 562.0400000000001], [1.6050642E12, 501.2352941176471], [1.60506426E12, 430.33333333333337], [1.60506408E12, 396.75333333333333], [1.60506414E12, 533.8392857142856], [1.60506396E12, 517.0347826086958]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506426E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008474576271186442, "minX": 1.6050639E12, "maxY": 1.2800000000000002, "series": [{"data": [[1.60506402E12, 0.008474576271186442], [1.6050639E12, 1.2800000000000002], [1.6050642E12, 0.01680672268907563], [1.60506426E12, 0.02083333333333334], [1.60506408E12, 0.026666666666666672], [1.60506414E12, 0.008928571428571428], [1.60506396E12, 0.026086956521739132]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506426E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 185.0, "minX": 1.6050639E12, "maxY": 2818.0, "series": [{"data": [[1.60506402E12, 820.0], [1.6050639E12, 2818.0], [1.6050642E12, 846.0], [1.60506426E12, 1648.0], [1.60506408E12, 2784.0], [1.60506414E12, 1243.0], [1.60506396E12, 1256.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60506402E12, 285.13599954605104], [1.6050639E12, 228.0], [1.6050642E12, 279.8799996852875], [1.60506426E12, 215.0], [1.60506408E12, 185.7179999279976], [1.60506414E12, 257.0679998922348], [1.60506396E12, 205.26399983406066]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60506402E12, 286.8496001815796], [1.6050639E12, 228.0], [1.6050642E12, 281.068000125885], [1.60506426E12, 215.0], [1.60506408E12, 185.98980002880097], [1.60506414E12, 257.4748000431061], [1.60506396E12, 205.89040006637572]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60506402E12, 286.0879997730255], [1.6050639E12, 228.0], [1.6050642E12, 280.53999984264374], [1.60506426E12, 215.0], [1.60506408E12, 185.8689999639988], [1.60506414E12, 257.2939999461174], [1.60506396E12, 205.61199991703035]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60506402E12, 284.0], [1.6050639E12, 228.0], [1.6050642E12, 279.0], [1.60506426E12, 215.0], [1.60506408E12, 185.0], [1.60506414E12, 257.0], [1.60506396E12, 205.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60506402E12, 502.5], [1.6050639E12, 404.0], [1.6050642E12, 492.0], [1.60506426E12, 315.5], [1.60506408E12, 310.0], [1.60506414E12, 505.0], [1.60506396E12, 436.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 670.0, "series": [{"data": [[1.0, 670.0], [2.0, 491.5], [4.0, 283.0], [5.0, 212.0], [3.0, 341.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 211.0, "minX": 1.0, "maxY": 669.0, "series": [{"data": [[1.0, 669.0], [2.0, 490.0], [4.0, 283.0], [5.0, 211.0], [3.0, 340.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.6050639E12, "maxY": 2.5, "series": [{"data": [[1.60506402E12, 1.9666666666666666], [1.6050639E12, 0.43333333333333335], [1.6050642E12, 1.9833333333333334], [1.60506426E12, 1.5833333333333333], [1.60506408E12, 2.5], [1.60506414E12, 1.8666666666666667], [1.60506396E12, 1.9166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506426E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6050639E12, "maxY": 2.5, "series": [{"data": [[1.60506402E12, 1.9666666666666666], [1.6050639E12, 0.4166666666666667], [1.6050642E12, 1.9833333333333334], [1.60506426E12, 1.6], [1.60506408E12, 2.5], [1.60506414E12, 1.8666666666666667], [1.60506396E12, 1.9166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60506426E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6050639E12, "maxY": 2.5, "series": [{"data": [[1.60506402E12, 1.9666666666666666], [1.6050639E12, 0.4166666666666667], [1.6050642E12, 1.9833333333333334], [1.60506426E12, 1.6], [1.60506408E12, 2.5], [1.60506414E12, 1.8666666666666667], [1.60506396E12, 1.9166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506426E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6050639E12, "maxY": 2.5, "series": [{"data": [[1.60506402E12, 1.9666666666666666], [1.6050639E12, 0.4166666666666667], [1.6050642E12, 1.9833333333333334], [1.60506426E12, 1.6], [1.60506408E12, 2.5], [1.60506414E12, 1.8666666666666667], [1.60506396E12, 1.9166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60506426E12, "title": "Total Transactions Per Second"}},
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

