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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 2807.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 186.0], [0.3, 192.0], [0.4, 192.0], [0.5, 192.0], [0.6, 193.0], [0.7, 193.0], [0.8, 193.0], [0.9, 194.0], [1.0, 195.0], [1.1, 198.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 201.0], [1.6, 201.0], [1.7, 202.0], [1.8, 205.0], [1.9, 205.0], [2.0, 205.0], [2.1, 205.0], [2.2, 205.0], [2.3, 205.0], [2.4, 205.0], [2.5, 208.0], [2.6, 208.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 209.0], [3.1, 209.0], [3.2, 209.0], [3.3, 211.0], [3.4, 211.0], [3.5, 211.0], [3.6, 214.0], [3.7, 214.0], [3.8, 214.0], [3.9, 216.0], [4.0, 216.0], [4.1, 217.0], [4.2, 217.0], [4.3, 217.0], [4.4, 217.0], [4.5, 217.0], [4.6, 217.0], [4.7, 218.0], [4.8, 219.0], [4.9, 219.0], [5.0, 219.0], [5.1, 219.0], [5.2, 220.0], [5.3, 220.0], [5.4, 221.0], [5.5, 221.0], [5.6, 224.0], [5.7, 224.0], [5.8, 227.0], [5.9, 227.0], [6.0, 230.0], [6.1, 230.0], [6.2, 230.0], [6.3, 232.0], [6.4, 232.0], [6.5, 232.0], [6.6, 233.0], [6.7, 235.0], [6.8, 235.0], [6.9, 236.0], [7.0, 241.0], [7.1, 241.0], [7.2, 241.0], [7.3, 241.0], [7.4, 244.0], [7.5, 245.0], [7.6, 245.0], [7.7, 245.0], [7.8, 246.0], [7.9, 246.0], [8.0, 246.0], [8.1, 247.0], [8.2, 249.0], [8.3, 251.0], [8.4, 251.0], [8.5, 252.0], [8.6, 252.0], [8.7, 252.0], [8.8, 253.0], [8.9, 255.0], [9.0, 256.0], [9.1, 256.0], [9.2, 257.0], [9.3, 258.0], [9.4, 259.0], [9.5, 259.0], [9.6, 259.0], [9.7, 259.0], [9.8, 262.0], [9.9, 262.0], [10.0, 264.0], [10.1, 265.0], [10.2, 265.0], [10.3, 265.0], [10.4, 265.0], [10.5, 266.0], [10.6, 266.0], [10.7, 266.0], [10.8, 266.0], [10.9, 267.0], [11.0, 267.0], [11.1, 267.0], [11.2, 267.0], [11.3, 267.0], [11.4, 267.0], [11.5, 268.0], [11.6, 269.0], [11.7, 269.0], [11.8, 269.0], [11.9, 269.0], [12.0, 270.0], [12.1, 270.0], [12.2, 270.0], [12.3, 270.0], [12.4, 270.0], [12.5, 270.0], [12.6, 270.0], [12.7, 271.0], [12.8, 271.0], [12.9, 271.0], [13.0, 272.0], [13.1, 273.0], [13.2, 273.0], [13.3, 273.0], [13.4, 273.0], [13.5, 274.0], [13.6, 274.0], [13.7, 274.0], [13.8, 274.0], [13.9, 275.0], [14.0, 275.0], [14.1, 275.0], [14.2, 275.0], [14.3, 276.0], [14.4, 276.0], [14.5, 276.0], [14.6, 277.0], [14.7, 277.0], [14.8, 277.0], [14.9, 277.0], [15.0, 278.0], [15.1, 278.0], [15.2, 278.0], [15.3, 279.0], [15.4, 279.0], [15.5, 279.0], [15.6, 279.0], [15.7, 279.0], [15.8, 279.0], [15.9, 279.0], [16.0, 279.0], [16.1, 280.0], [16.2, 280.0], [16.3, 280.0], [16.4, 280.0], [16.5, 281.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 282.0], [17.0, 282.0], [17.1, 282.0], [17.2, 282.0], [17.3, 282.0], [17.4, 282.0], [17.5, 283.0], [17.6, 283.0], [17.7, 283.0], [17.8, 283.0], [17.9, 284.0], [18.0, 284.0], [18.1, 284.0], [18.2, 284.0], [18.3, 284.0], [18.4, 285.0], [18.5, 285.0], [18.6, 285.0], [18.7, 286.0], [18.8, 286.0], [18.9, 286.0], [19.0, 287.0], [19.1, 287.0], [19.2, 287.0], [19.3, 287.0], [19.4, 287.0], [19.5, 287.0], [19.6, 287.0], [19.7, 287.0], [19.8, 287.0], [19.9, 288.0], [20.0, 288.0], [20.1, 288.0], [20.2, 288.0], [20.3, 289.0], [20.4, 289.0], [20.5, 289.0], [20.6, 289.0], [20.7, 289.0], [20.8, 289.0], [20.9, 290.0], [21.0, 290.0], [21.1, 290.0], [21.2, 290.0], [21.3, 291.0], [21.4, 291.0], [21.5, 291.0], [21.6, 291.0], [21.7, 292.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 294.0], [22.2, 294.0], [22.3, 294.0], [22.4, 294.0], [22.5, 295.0], [22.6, 295.0], [22.7, 295.0], [22.8, 295.0], [22.9, 295.0], [23.0, 296.0], [23.1, 296.0], [23.2, 296.0], [23.3, 296.0], [23.4, 296.0], [23.5, 297.0], [23.6, 297.0], [23.7, 297.0], [23.8, 297.0], [23.9, 298.0], [24.0, 299.0], [24.1, 299.0], [24.2, 299.0], [24.3, 299.0], [24.4, 299.0], [24.5, 299.0], [24.6, 299.0], [24.7, 300.0], [24.8, 301.0], [24.9, 302.0], [25.0, 302.0], [25.1, 303.0], [25.2, 303.0], [25.3, 303.0], [25.4, 303.0], [25.5, 303.0], [25.6, 303.0], [25.7, 303.0], [25.8, 304.0], [25.9, 305.0], [26.0, 305.0], [26.1, 305.0], [26.2, 306.0], [26.3, 306.0], [26.4, 307.0], [26.5, 307.0], [26.6, 307.0], [26.7, 307.0], [26.8, 307.0], [26.9, 308.0], [27.0, 313.0], [27.1, 315.0], [27.2, 315.0], [27.3, 315.0], [27.4, 316.0], [27.5, 317.0], [27.6, 317.0], [27.7, 320.0], [27.8, 320.0], [27.9, 324.0], [28.0, 324.0], [28.1, 325.0], [28.2, 325.0], [28.3, 328.0], [28.4, 328.0], [28.5, 331.0], [28.6, 332.0], [28.7, 332.0], [28.8, 333.0], [28.9, 336.0], [29.0, 336.0], [29.1, 336.0], [29.2, 337.0], [29.3, 340.0], [29.4, 340.0], [29.5, 340.0], [29.6, 343.0], [29.7, 344.0], [29.8, 345.0], [29.9, 345.0], [30.0, 346.0], [30.1, 346.0], [30.2, 346.0], [30.3, 351.0], [30.4, 351.0], [30.5, 353.0], [30.6, 353.0], [30.7, 354.0], [30.8, 354.0], [30.9, 355.0], [31.0, 355.0], [31.1, 356.0], [31.2, 356.0], [31.3, 357.0], [31.4, 357.0], [31.5, 358.0], [31.6, 361.0], [31.7, 361.0], [31.8, 361.0], [31.9, 361.0], [32.0, 362.0], [32.1, 362.0], [32.2, 363.0], [32.3, 363.0], [32.4, 363.0], [32.5, 363.0], [32.6, 364.0], [32.7, 365.0], [32.8, 366.0], [32.9, 366.0], [33.0, 366.0], [33.1, 366.0], [33.2, 369.0], [33.3, 369.0], [33.4, 369.0], [33.5, 373.0], [33.6, 373.0], [33.7, 373.0], [33.8, 373.0], [33.9, 374.0], [34.0, 374.0], [34.1, 375.0], [34.2, 375.0], [34.3, 376.0], [34.4, 376.0], [34.5, 377.0], [34.6, 378.0], [34.7, 378.0], [34.8, 378.0], [34.9, 379.0], [35.0, 379.0], [35.1, 379.0], [35.2, 379.0], [35.3, 380.0], [35.4, 380.0], [35.5, 380.0], [35.6, 380.0], [35.7, 381.0], [35.8, 381.0], [35.9, 381.0], [36.0, 382.0], [36.1, 382.0], [36.2, 382.0], [36.3, 382.0], [36.4, 383.0], [36.5, 383.0], [36.6, 383.0], [36.7, 383.0], [36.8, 384.0], [36.9, 384.0], [37.0, 384.0], [37.1, 384.0], [37.2, 385.0], [37.3, 385.0], [37.4, 385.0], [37.5, 386.0], [37.6, 387.0], [37.7, 387.0], [37.8, 387.0], [37.9, 388.0], [38.0, 388.0], [38.1, 388.0], [38.2, 388.0], [38.3, 388.0], [38.4, 389.0], [38.5, 389.0], [38.6, 389.0], [38.7, 389.0], [38.8, 389.0], [38.9, 389.0], [39.0, 390.0], [39.1, 390.0], [39.2, 390.0], [39.3, 390.0], [39.4, 391.0], [39.5, 391.0], [39.6, 391.0], [39.7, 391.0], [39.8, 392.0], [39.9, 392.0], [40.0, 392.0], [40.1, 392.0], [40.2, 393.0], [40.3, 393.0], [40.4, 393.0], [40.5, 393.0], [40.6, 394.0], [40.7, 394.0], [40.8, 394.0], [40.9, 394.0], [41.0, 394.0], [41.1, 394.0], [41.2, 394.0], [41.3, 394.0], [41.4, 395.0], [41.5, 395.0], [41.6, 395.0], [41.7, 396.0], [41.8, 396.0], [41.9, 396.0], [42.0, 396.0], [42.1, 396.0], [42.2, 396.0], [42.3, 396.0], [42.4, 397.0], [42.5, 397.0], [42.6, 397.0], [42.7, 397.0], [42.8, 397.0], [42.9, 397.0], [43.0, 397.0], [43.1, 397.0], [43.2, 398.0], [43.3, 398.0], [43.4, 398.0], [43.5, 399.0], [43.6, 399.0], [43.7, 399.0], [43.8, 399.0], [43.9, 400.0], [44.0, 400.0], [44.1, 400.0], [44.2, 400.0], [44.3, 401.0], [44.4, 401.0], [44.5, 402.0], [44.6, 402.0], [44.7, 402.0], [44.8, 402.0], [44.9, 402.0], [45.0, 402.0], [45.1, 402.0], [45.2, 403.0], [45.3, 403.0], [45.4, 403.0], [45.5, 403.0], [45.6, 403.0], [45.7, 403.0], [45.8, 404.0], [45.9, 404.0], [46.0, 404.0], [46.1, 404.0], [46.2, 405.0], [46.3, 405.0], [46.4, 405.0], [46.5, 405.0], [46.6, 405.0], [46.7, 405.0], [46.8, 405.0], [46.9, 405.0], [47.0, 405.0], [47.1, 406.0], [47.2, 406.0], [47.3, 406.0], [47.4, 407.0], [47.5, 407.0], [47.6, 407.0], [47.7, 407.0], [47.8, 408.0], [47.9, 408.0], [48.0, 408.0], [48.1, 409.0], [48.2, 409.0], [48.3, 410.0], [48.4, 410.0], [48.5, 411.0], [48.6, 412.0], [48.7, 412.0], [48.8, 412.0], [48.9, 412.0], [49.0, 412.0], [49.1, 412.0], [49.2, 412.0], [49.3, 413.0], [49.4, 413.0], [49.5, 413.0], [49.6, 413.0], [49.7, 413.0], [49.8, 413.0], [49.9, 413.0], [50.0, 414.0], [50.1, 414.0], [50.2, 414.0], [50.3, 414.0], [50.4, 416.0], [50.5, 416.0], [50.6, 416.0], [50.7, 416.0], [50.8, 416.0], [50.9, 417.0], [51.0, 417.0], [51.1, 417.0], [51.2, 417.0], [51.3, 418.0], [51.4, 418.0], [51.5, 419.0], [51.6, 419.0], [51.7, 419.0], [51.8, 419.0], [51.9, 420.0], [52.0, 421.0], [52.1, 421.0], [52.2, 422.0], [52.3, 423.0], [52.4, 423.0], [52.5, 423.0], [52.6, 423.0], [52.7, 424.0], [52.8, 425.0], [52.9, 425.0], [53.0, 425.0], [53.1, 425.0], [53.2, 426.0], [53.3, 426.0], [53.4, 426.0], [53.5, 428.0], [53.6, 428.0], [53.7, 428.0], [53.8, 429.0], [53.9, 430.0], [54.0, 430.0], [54.1, 431.0], [54.2, 431.0], [54.3, 438.0], [54.4, 438.0], [54.5, 439.0], [54.6, 441.0], [54.7, 442.0], [54.8, 442.0], [54.9, 443.0], [55.0, 443.0], [55.1, 443.0], [55.2, 443.0], [55.3, 446.0], [55.4, 447.0], [55.5, 447.0], [55.6, 447.0], [55.7, 448.0], [55.8, 448.0], [55.9, 448.0], [56.0, 450.0], [56.1, 450.0], [56.2, 451.0], [56.3, 451.0], [56.4, 452.0], [56.5, 453.0], [56.6, 454.0], [56.7, 454.0], [56.8, 456.0], [56.9, 457.0], [57.0, 457.0], [57.1, 458.0], [57.2, 459.0], [57.3, 461.0], [57.4, 461.0], [57.5, 461.0], [57.6, 461.0], [57.7, 461.0], [57.8, 461.0], [57.9, 463.0], [58.0, 463.0], [58.1, 464.0], [58.2, 464.0], [58.3, 464.0], [58.4, 464.0], [58.5, 464.0], [58.6, 465.0], [58.7, 466.0], [58.8, 466.0], [58.9, 466.0], [59.0, 467.0], [59.1, 467.0], [59.2, 467.0], [59.3, 467.0], [59.4, 468.0], [59.5, 468.0], [59.6, 470.0], [59.7, 470.0], [59.8, 471.0], [59.9, 472.0], [60.0, 472.0], [60.1, 472.0], [60.2, 472.0], [60.3, 472.0], [60.4, 472.0], [60.5, 472.0], [60.6, 472.0], [60.7, 472.0], [60.8, 472.0], [60.9, 475.0], [61.0, 476.0], [61.1, 477.0], [61.2, 477.0], [61.3, 477.0], [61.4, 480.0], [61.5, 481.0], [61.6, 481.0], [61.7, 484.0], [61.8, 485.0], [61.9, 485.0], [62.0, 485.0], [62.1, 487.0], [62.2, 488.0], [62.3, 488.0], [62.4, 488.0], [62.5, 489.0], [62.6, 493.0], [62.7, 493.0], [62.8, 494.0], [62.9, 495.0], [63.0, 496.0], [63.1, 496.0], [63.2, 500.0], [63.3, 501.0], [63.4, 501.0], [63.5, 501.0], [63.6, 502.0], [63.7, 502.0], [63.8, 502.0], [63.9, 503.0], [64.0, 503.0], [64.1, 503.0], [64.2, 503.0], [64.3, 504.0], [64.4, 506.0], [64.5, 507.0], [64.6, 507.0], [64.7, 512.0], [64.8, 515.0], [64.9, 520.0], [65.0, 520.0], [65.1, 521.0], [65.2, 521.0], [65.3, 521.0], [65.4, 521.0], [65.5, 523.0], [65.6, 524.0], [65.7, 524.0], [65.8, 525.0], [65.9, 525.0], [66.0, 526.0], [66.1, 526.0], [66.2, 527.0], [66.3, 529.0], [66.4, 529.0], [66.5, 529.0], [66.6, 529.0], [66.7, 530.0], [66.8, 530.0], [66.9, 531.0], [67.0, 532.0], [67.1, 533.0], [67.2, 533.0], [67.3, 533.0], [67.4, 535.0], [67.5, 535.0], [67.6, 535.0], [67.7, 536.0], [67.8, 536.0], [67.9, 536.0], [68.0, 536.0], [68.1, 537.0], [68.2, 537.0], [68.3, 537.0], [68.4, 537.0], [68.5, 538.0], [68.6, 538.0], [68.7, 538.0], [68.8, 538.0], [68.9, 539.0], [69.0, 540.0], [69.1, 540.0], [69.2, 541.0], [69.3, 541.0], [69.4, 542.0], [69.5, 542.0], [69.6, 544.0], [69.7, 544.0], [69.8, 544.0], [69.9, 544.0], [70.0, 545.0], [70.1, 545.0], [70.2, 545.0], [70.3, 546.0], [70.4, 546.0], [70.5, 547.0], [70.6, 547.0], [70.7, 547.0], [70.8, 547.0], [70.9, 548.0], [71.0, 548.0], [71.1, 548.0], [71.2, 548.0], [71.3, 549.0], [71.4, 549.0], [71.5, 549.0], [71.6, 551.0], [71.7, 551.0], [71.8, 551.0], [71.9, 551.0], [72.0, 552.0], [72.1, 552.0], [72.2, 553.0], [72.3, 553.0], [72.4, 553.0], [72.5, 553.0], [72.6, 554.0], [72.7, 555.0], [72.8, 555.0], [72.9, 555.0], [73.0, 556.0], [73.1, 556.0], [73.2, 556.0], [73.3, 556.0], [73.4, 556.0], [73.5, 559.0], [73.6, 559.0], [73.7, 559.0], [73.8, 561.0], [73.9, 561.0], [74.0, 561.0], [74.1, 562.0], [74.2, 562.0], [74.3, 562.0], [74.4, 562.0], [74.5, 567.0], [74.6, 567.0], [74.7, 569.0], [74.8, 569.0], [74.9, 570.0], [75.0, 574.0], [75.1, 574.0], [75.2, 575.0], [75.3, 576.0], [75.4, 580.0], [75.5, 580.0], [75.6, 580.0], [75.7, 581.0], [75.8, 582.0], [75.9, 582.0], [76.0, 585.0], [76.1, 587.0], [76.2, 588.0], [76.3, 588.0], [76.4, 588.0], [76.5, 588.0], [76.6, 589.0], [76.7, 589.0], [76.8, 589.0], [76.9, 590.0], [77.0, 590.0], [77.1, 593.0], [77.2, 594.0], [77.3, 594.0], [77.4, 594.0], [77.5, 595.0], [77.6, 595.0], [77.7, 597.0], [77.8, 597.0], [77.9, 599.0], [78.0, 601.0], [78.1, 601.0], [78.2, 601.0], [78.3, 602.0], [78.4, 604.0], [78.5, 604.0], [78.6, 605.0], [78.7, 605.0], [78.8, 611.0], [78.9, 611.0], [79.0, 612.0], [79.1, 613.0], [79.2, 613.0], [79.3, 613.0], [79.4, 614.0], [79.5, 616.0], [79.6, 616.0], [79.7, 616.0], [79.8, 616.0], [79.9, 618.0], [80.0, 620.0], [80.1, 620.0], [80.2, 622.0], [80.3, 623.0], [80.4, 623.0], [80.5, 624.0], [80.6, 627.0], [80.7, 627.0], [80.8, 627.0], [80.9, 628.0], [81.0, 632.0], [81.1, 635.0], [81.2, 635.0], [81.3, 636.0], [81.4, 637.0], [81.5, 642.0], [81.6, 642.0], [81.7, 642.0], [81.8, 643.0], [81.9, 643.0], [82.0, 644.0], [82.1, 645.0], [82.2, 645.0], [82.3, 645.0], [82.4, 646.0], [82.5, 647.0], [82.6, 648.0], [82.7, 648.0], [82.8, 650.0], [82.9, 650.0], [83.0, 652.0], [83.1, 652.0], [83.2, 652.0], [83.3, 654.0], [83.4, 654.0], [83.5, 654.0], [83.6, 654.0], [83.7, 655.0], [83.8, 655.0], [83.9, 656.0], [84.0, 657.0], [84.1, 657.0], [84.2, 657.0], [84.3, 662.0], [84.4, 663.0], [84.5, 664.0], [84.6, 664.0], [84.7, 665.0], [84.8, 666.0], [84.9, 668.0], [85.0, 668.0], [85.1, 668.0], [85.2, 671.0], [85.3, 671.0], [85.4, 671.0], [85.5, 672.0], [85.6, 673.0], [85.7, 673.0], [85.8, 677.0], [85.9, 677.0], [86.0, 678.0], [86.1, 678.0], [86.2, 678.0], [86.3, 680.0], [86.4, 681.0], [86.5, 681.0], [86.6, 682.0], [86.7, 682.0], [86.8, 682.0], [86.9, 684.0], [87.0, 684.0], [87.1, 685.0], [87.2, 685.0], [87.3, 685.0], [87.4, 686.0], [87.5, 687.0], [87.6, 687.0], [87.7, 688.0], [87.8, 688.0], [87.9, 689.0], [88.0, 689.0], [88.1, 692.0], [88.2, 695.0], [88.3, 700.0], [88.4, 700.0], [88.5, 701.0], [88.6, 705.0], [88.7, 705.0], [88.8, 705.0], [88.9, 707.0], [89.0, 707.0], [89.1, 707.0], [89.2, 708.0], [89.3, 713.0], [89.4, 714.0], [89.5, 714.0], [89.6, 715.0], [89.7, 722.0], [89.8, 724.0], [89.9, 724.0], [90.0, 726.0], [90.1, 728.0], [90.2, 728.0], [90.3, 731.0], [90.4, 732.0], [90.5, 733.0], [90.6, 733.0], [90.7, 735.0], [90.8, 741.0], [90.9, 741.0], [91.0, 741.0], [91.1, 742.0], [91.2, 745.0], [91.3, 747.0], [91.4, 747.0], [91.5, 747.0], [91.6, 748.0], [91.7, 748.0], [91.8, 748.0], [91.9, 748.0], [92.0, 749.0], [92.1, 749.0], [92.2, 754.0], [92.3, 754.0], [92.4, 758.0], [92.5, 758.0], [92.6, 759.0], [92.7, 766.0], [92.8, 768.0], [92.9, 768.0], [93.0, 769.0], [93.1, 770.0], [93.2, 772.0], [93.3, 772.0], [93.4, 785.0], [93.5, 792.0], [93.6, 792.0], [93.7, 799.0], [93.8, 804.0], [93.9, 817.0], [94.0, 817.0], [94.1, 836.0], [94.2, 839.0], [94.3, 840.0], [94.4, 840.0], [94.5, 848.0], [94.6, 856.0], [94.7, 858.0], [94.8, 858.0], [94.9, 859.0], [95.0, 861.0], [95.1, 861.0], [95.2, 870.0], [95.3, 872.0], [95.4, 874.0], [95.5, 874.0], [95.6, 883.0], [95.7, 890.0], [95.8, 900.0], [95.9, 900.0], [96.0, 914.0], [96.1, 928.0], [96.2, 933.0], [96.3, 933.0], [96.4, 951.0], [96.5, 980.0], [96.6, 990.0], [96.7, 990.0], [96.8, 990.0], [96.9, 992.0], [97.0, 992.0], [97.1, 1003.0], [97.2, 1026.0], [97.3, 1035.0], [97.4, 1035.0], [97.5, 1038.0], [97.6, 1043.0], [97.7, 1062.0], [97.8, 1062.0], [97.9, 1077.0], [98.0, 1109.0], [98.1, 1119.0], [98.2, 1119.0], [98.3, 1219.0], [98.4, 1226.0], [98.5, 1226.0], [98.6, 1246.0], [98.7, 1253.0], [98.8, 1260.0], [98.9, 1260.0], [99.0, 1308.0], [99.1, 1630.0], [99.2, 1647.0], [99.3, 1647.0], [99.4, 1696.0], [99.5, 2604.0], [99.6, 2748.0], [99.7, 2748.0], [99.8, 2803.0], [99.9, 2807.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 171.0, "series": [{"data": [[600.0, 76.0], [2600.0, 1.0], [700.0, 40.0], [2800.0, 2.0], [2700.0, 1.0], [200.0, 171.0], [800.0, 15.0], [900.0, 9.0], [1000.0, 7.0], [1100.0, 2.0], [300.0, 141.0], [1200.0, 5.0], [1300.0, 1.0], [400.0, 142.0], [100.0, 10.0], [1600.0, 3.0], [500.0, 109.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 465.0, "series": [{"data": [[0.0, 465.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 263.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6043958E12, "maxY": 1.0, "series": [{"data": [[1.60439586E12, 1.0], [1.60439604E12, 1.0], [1.60439592E12, 1.0], [1.6043961E12, 1.0], [1.6043958E12, 1.0], [1.60439598E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043961E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 480.405442176871, "minX": 1.0, "maxY": 480.405442176871, "series": [{"data": [[1.0, 480.405442176871]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 480.405442176871]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 825.8833333333333, "minX": 1.6043958E12, "maxY": 404077.35, "series": [{"data": [[1.60439586E12, 257909.13333333333], [1.60439604E12, 272708.86666666664], [1.60439592E12, 304600.38333333336], [1.6043961E12, 277997.88333333336], [1.6043958E12, 404077.35], [1.60439598E12, 318490.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439586E12, 831.3833333333333], [1.60439604E12, 854.8166666666667], [1.60439592E12, 1088.7333333333333], [1.6043961E12, 1005.2666666666667], [1.6043958E12, 825.8833333333333], [1.60439598E12, 916.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043961E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 408.9383561643834, "minX": 1.6043958E12, "maxY": 540.7545454545456, "series": [{"data": [[1.60439586E12, 540.7545454545456], [1.60439604E12, 530.5929203539824], [1.60439592E12, 408.9383561643834], [1.6043961E12, 412.11851851851856], [1.6043958E12, 534.3302752293577], [1.60439598E12, 492.41803278688536]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043961E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 407.8630136986303, "minX": 1.6043958E12, "maxY": 539.4, "series": [{"data": [[1.60439586E12, 539.4], [1.60439604E12, 529.4247787610622], [1.60439592E12, 407.8630136986303], [1.6043961E12, 411.14074074074074], [1.6043958E12, 533.045871559633], [1.60439598E12, 491.31147540983625]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043961E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008196721311475412, "minX": 1.6043958E12, "maxY": 0.35779816513761487, "series": [{"data": [[1.60439586E12, 0.009090909090909089], [1.60439604E12, 0.0265486725663717], [1.60439592E12, 0.013698630136986308], [1.6043961E12, 0.029629629629629648], [1.6043958E12, 0.35779816513761487], [1.60439598E12, 0.008196721311475412]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043961E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.6043958E12, "maxY": 2807.0, "series": [{"data": [[1.60439586E12, 2604.0], [1.60439604E12, 872.0], [1.60439592E12, 1696.0], [1.6043961E12, 1647.0], [1.6043958E12, 2807.0], [1.60439598E12, 2803.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439586E12, 380.0], [1.60439604E12, 278.71599820613864], [1.60439592E12, 205.0], [1.6043961E12, 194.56799977302552], [1.6043958E12, 184.0], [1.60439598E12, 192.1069999706745]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439586E12, 380.8901000952721], [1.60439604E12, 285.4876007175446], [1.60439592E12, 205.0], [1.6043961E12, 195.4248000907898], [1.6043958E12, 184.17800002098085], [1.60439598E12, 192.2177000117302]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439586E12, 380.4904998809099], [1.60439604E12, 282.4779991030693], [1.60439592E12, 205.0], [1.6043961E12, 195.04399988651275], [1.6043958E12, 184.08999997377396], [1.60439598E12, 192.16849998533726]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439586E12, 380.0], [1.60439604E12, 277.0], [1.60439592E12, 205.0], [1.6043961E12, 193.0], [1.6043958E12, 184.0], [1.60439598E12, 192.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439586E12, 486.5], [1.60439604E12, 526.0], [1.60439592E12, 307.0], [1.6043961E12, 302.0], [1.6043958E12, 412.0], [1.60439598E12, 408.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043961E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 207.0, "minX": 1.0, "maxY": 674.5, "series": [{"data": [[2.0, 491.5], [4.0, 282.0], [1.0, 674.5], [5.0, 207.0], [3.0, 356.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 207.0, "minX": 1.0, "maxY": 671.5, "series": [{"data": [[2.0, 491.0], [4.0, 281.5], [1.0, 671.5], [5.0, 207.0], [3.0, 355.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.6043958E12, "maxY": 2.433333333333333, "series": [{"data": [[1.60439586E12, 1.8333333333333333], [1.60439604E12, 1.8833333333333333], [1.60439592E12, 2.433333333333333], [1.6043961E12, 2.2333333333333334], [1.6043958E12, 1.8333333333333333], [1.60439598E12, 2.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043961E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.6043958E12, "maxY": 2.433333333333333, "series": [{"data": [[1.60439586E12, 1.8333333333333333], [1.60439604E12, 1.8833333333333333], [1.60439592E12, 2.433333333333333], [1.6043961E12, 2.25], [1.6043958E12, 1.8166666666666667], [1.60439598E12, 2.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043961E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.6043958E12, "maxY": 2.433333333333333, "series": [{"data": [[1.60439586E12, 1.8333333333333333], [1.60439604E12, 1.8833333333333333], [1.60439592E12, 2.433333333333333], [1.6043961E12, 2.25], [1.6043958E12, 1.8166666666666667], [1.60439598E12, 2.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043961E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.6043958E12, "maxY": 2.433333333333333, "series": [{"data": [[1.60439586E12, 1.8333333333333333], [1.60439604E12, 1.8833333333333333], [1.60439592E12, 2.433333333333333], [1.6043961E12, 2.25], [1.6043958E12, 1.8166666666666667], [1.60439598E12, 2.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6043961E12, "title": "Total Transactions Per Second"}},
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

