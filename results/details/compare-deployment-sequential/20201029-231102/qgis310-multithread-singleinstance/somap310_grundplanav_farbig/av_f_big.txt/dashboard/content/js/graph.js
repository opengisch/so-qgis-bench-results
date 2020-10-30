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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 2778.0, "series": [{"data": [[0.0, 172.0], [0.1, 172.0], [0.2, 175.0], [0.3, 180.0], [0.4, 180.0], [0.5, 183.0], [0.6, 186.0], [0.7, 189.0], [0.8, 189.0], [0.9, 189.0], [1.0, 189.0], [1.1, 193.0], [1.2, 193.0], [1.3, 194.0], [1.4, 194.0], [1.5, 196.0], [1.6, 196.0], [1.7, 197.0], [1.8, 200.0], [1.9, 200.0], [2.0, 200.0], [2.1, 201.0], [2.2, 201.0], [2.3, 201.0], [2.4, 202.0], [2.5, 205.0], [2.6, 205.0], [2.7, 205.0], [2.8, 205.0], [2.9, 206.0], [3.0, 207.0], [3.1, 207.0], [3.2, 207.0], [3.3, 207.0], [3.4, 207.0], [3.5, 207.0], [3.6, 210.0], [3.7, 210.0], [3.8, 210.0], [3.9, 210.0], [4.0, 210.0], [4.1, 210.0], [4.2, 210.0], [4.3, 211.0], [4.4, 213.0], [4.5, 214.0], [4.6, 214.0], [4.7, 214.0], [4.8, 214.0], [4.9, 216.0], [5.0, 216.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 219.0], [5.5, 219.0], [5.6, 219.0], [5.7, 219.0], [5.8, 220.0], [5.9, 222.0], [6.0, 223.0], [6.1, 223.0], [6.2, 224.0], [6.3, 224.0], [6.4, 226.0], [6.5, 226.0], [6.6, 226.0], [6.7, 226.0], [6.8, 226.0], [6.9, 226.0], [7.0, 227.0], [7.1, 227.0], [7.2, 227.0], [7.3, 230.0], [7.4, 230.0], [7.5, 234.0], [7.6, 234.0], [7.7, 234.0], [7.8, 236.0], [7.9, 237.0], [8.0, 237.0], [8.1, 238.0], [8.2, 238.0], [8.3, 240.0], [8.4, 240.0], [8.5, 242.0], [8.6, 243.0], [8.7, 243.0], [8.8, 244.0], [8.9, 244.0], [9.0, 246.0], [9.1, 246.0], [9.2, 247.0], [9.3, 249.0], [9.4, 251.0], [9.5, 251.0], [9.6, 251.0], [9.7, 252.0], [9.8, 252.0], [9.9, 252.0], [10.0, 252.0], [10.1, 253.0], [10.2, 253.0], [10.3, 254.0], [10.4, 254.0], [10.5, 254.0], [10.6, 254.0], [10.7, 256.0], [10.8, 257.0], [10.9, 257.0], [11.0, 257.0], [11.1, 257.0], [11.2, 258.0], [11.3, 259.0], [11.4, 259.0], [11.5, 259.0], [11.6, 261.0], [11.7, 261.0], [11.8, 262.0], [11.9, 262.0], [12.0, 262.0], [12.1, 262.0], [12.2, 263.0], [12.3, 263.0], [12.4, 263.0], [12.5, 263.0], [12.6, 264.0], [12.7, 264.0], [12.8, 264.0], [12.9, 264.0], [13.0, 265.0], [13.1, 265.0], [13.2, 265.0], [13.3, 265.0], [13.4, 266.0], [13.5, 267.0], [13.6, 267.0], [13.7, 267.0], [13.8, 267.0], [13.9, 267.0], [14.0, 267.0], [14.1, 268.0], [14.2, 268.0], [14.3, 269.0], [14.4, 269.0], [14.5, 269.0], [14.6, 269.0], [14.7, 270.0], [14.8, 270.0], [14.9, 271.0], [15.0, 271.0], [15.1, 271.0], [15.2, 271.0], [15.3, 271.0], [15.4, 272.0], [15.5, 272.0], [15.6, 272.0], [15.7, 272.0], [15.8, 273.0], [15.9, 273.0], [16.0, 273.0], [16.1, 273.0], [16.2, 273.0], [16.3, 273.0], [16.4, 274.0], [16.5, 274.0], [16.6, 274.0], [16.7, 274.0], [16.8, 275.0], [16.9, 276.0], [17.0, 276.0], [17.1, 277.0], [17.2, 277.0], [17.3, 278.0], [17.4, 278.0], [17.5, 279.0], [17.6, 279.0], [17.7, 279.0], [17.8, 279.0], [17.9, 279.0], [18.0, 280.0], [18.1, 280.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 280.0], [18.6, 280.0], [18.7, 281.0], [18.8, 282.0], [18.9, 282.0], [19.0, 282.0], [19.1, 283.0], [19.2, 283.0], [19.3, 283.0], [19.4, 283.0], [19.5, 283.0], [19.6, 284.0], [19.7, 284.0], [19.8, 284.0], [19.9, 285.0], [20.0, 286.0], [20.1, 286.0], [20.2, 286.0], [20.3, 286.0], [20.4, 286.0], [20.5, 286.0], [20.6, 286.0], [20.7, 286.0], [20.8, 286.0], [20.9, 287.0], [21.0, 288.0], [21.1, 288.0], [21.2, 288.0], [21.3, 289.0], [21.4, 289.0], [21.5, 289.0], [21.6, 289.0], [21.7, 289.0], [21.8, 290.0], [21.9, 290.0], [22.0, 290.0], [22.1, 290.0], [22.2, 290.0], [22.3, 290.0], [22.4, 291.0], [22.5, 291.0], [22.6, 291.0], [22.7, 291.0], [22.8, 291.0], [22.9, 291.0], [23.0, 292.0], [23.1, 292.0], [23.2, 292.0], [23.3, 292.0], [23.4, 292.0], [23.5, 293.0], [23.6, 293.0], [23.7, 294.0], [23.8, 294.0], [23.9, 294.0], [24.0, 295.0], [24.1, 296.0], [24.2, 296.0], [24.3, 296.0], [24.4, 296.0], [24.5, 296.0], [24.6, 296.0], [24.7, 297.0], [24.8, 297.0], [24.9, 297.0], [25.0, 297.0], [25.1, 299.0], [25.2, 299.0], [25.3, 299.0], [25.4, 299.0], [25.5, 299.0], [25.6, 300.0], [25.7, 300.0], [25.8, 301.0], [25.9, 301.0], [26.0, 303.0], [26.1, 303.0], [26.2, 306.0], [26.3, 306.0], [26.4, 307.0], [26.5, 307.0], [26.6, 307.0], [26.7, 308.0], [26.8, 308.0], [26.9, 308.0], [27.0, 308.0], [27.1, 308.0], [27.2, 308.0], [27.3, 310.0], [27.4, 311.0], [27.5, 312.0], [27.6, 312.0], [27.7, 312.0], [27.8, 314.0], [27.9, 316.0], [28.0, 316.0], [28.1, 316.0], [28.2, 316.0], [28.3, 318.0], [28.4, 318.0], [28.5, 318.0], [28.6, 319.0], [28.7, 319.0], [28.8, 322.0], [28.9, 324.0], [29.0, 327.0], [29.1, 327.0], [29.2, 329.0], [29.3, 330.0], [29.4, 330.0], [29.5, 330.0], [29.6, 333.0], [29.7, 333.0], [29.8, 333.0], [29.9, 333.0], [30.0, 334.0], [30.1, 335.0], [30.2, 335.0], [30.3, 335.0], [30.4, 338.0], [30.5, 341.0], [30.6, 341.0], [30.7, 343.0], [30.8, 344.0], [30.9, 347.0], [31.0, 347.0], [31.1, 348.0], [31.2, 349.0], [31.3, 353.0], [31.4, 353.0], [31.5, 359.0], [31.6, 361.0], [31.7, 361.0], [31.8, 361.0], [31.9, 362.0], [32.0, 364.0], [32.1, 364.0], [32.2, 364.0], [32.3, 365.0], [32.4, 366.0], [32.5, 366.0], [32.6, 366.0], [32.7, 366.0], [32.8, 367.0], [32.9, 367.0], [33.0, 369.0], [33.1, 372.0], [33.2, 372.0], [33.3, 372.0], [33.4, 372.0], [33.5, 373.0], [33.6, 373.0], [33.7, 374.0], [33.8, 375.0], [33.9, 377.0], [34.0, 377.0], [34.1, 377.0], [34.2, 378.0], [34.3, 378.0], [34.4, 378.0], [34.5, 381.0], [34.6, 383.0], [34.7, 383.0], [34.8, 383.0], [34.9, 385.0], [35.0, 385.0], [35.1, 385.0], [35.2, 386.0], [35.3, 386.0], [35.4, 386.0], [35.5, 386.0], [35.6, 386.0], [35.7, 388.0], [35.8, 388.0], [35.9, 388.0], [36.0, 388.0], [36.1, 389.0], [36.2, 389.0], [36.3, 389.0], [36.4, 389.0], [36.5, 390.0], [36.6, 390.0], [36.7, 390.0], [36.8, 390.0], [36.9, 390.0], [37.0, 390.0], [37.1, 390.0], [37.2, 390.0], [37.3, 391.0], [37.4, 391.0], [37.5, 391.0], [37.6, 391.0], [37.7, 392.0], [37.8, 392.0], [37.9, 393.0], [38.0, 393.0], [38.1, 393.0], [38.2, 393.0], [38.3, 393.0], [38.4, 393.0], [38.5, 393.0], [38.6, 394.0], [38.7, 394.0], [38.8, 394.0], [38.9, 394.0], [39.0, 395.0], [39.1, 395.0], [39.2, 395.0], [39.3, 395.0], [39.4, 395.0], [39.5, 395.0], [39.6, 395.0], [39.7, 395.0], [39.8, 395.0], [39.9, 396.0], [40.0, 396.0], [40.1, 396.0], [40.2, 396.0], [40.3, 396.0], [40.4, 396.0], [40.5, 396.0], [40.6, 396.0], [40.7, 397.0], [40.8, 397.0], [40.9, 397.0], [41.0, 397.0], [41.1, 397.0], [41.2, 397.0], [41.3, 398.0], [41.4, 398.0], [41.5, 398.0], [41.6, 398.0], [41.7, 399.0], [41.8, 399.0], [41.9, 399.0], [42.0, 399.0], [42.1, 399.0], [42.2, 400.0], [42.3, 400.0], [42.4, 400.0], [42.5, 400.0], [42.6, 400.0], [42.7, 400.0], [42.8, 400.0], [42.9, 400.0], [43.0, 400.0], [43.1, 400.0], [43.2, 400.0], [43.3, 400.0], [43.4, 400.0], [43.5, 401.0], [43.6, 401.0], [43.7, 401.0], [43.8, 401.0], [43.9, 401.0], [44.0, 402.0], [44.1, 402.0], [44.2, 402.0], [44.3, 402.0], [44.4, 402.0], [44.5, 402.0], [44.6, 402.0], [44.7, 402.0], [44.8, 402.0], [44.9, 403.0], [45.0, 403.0], [45.1, 403.0], [45.2, 403.0], [45.3, 403.0], [45.4, 403.0], [45.5, 403.0], [45.6, 403.0], [45.7, 403.0], [45.8, 404.0], [45.9, 404.0], [46.0, 404.0], [46.1, 404.0], [46.2, 404.0], [46.3, 404.0], [46.4, 404.0], [46.5, 404.0], [46.6, 405.0], [46.7, 405.0], [46.8, 405.0], [46.9, 405.0], [47.0, 405.0], [47.1, 406.0], [47.2, 406.0], [47.3, 406.0], [47.4, 406.0], [47.5, 407.0], [47.6, 407.0], [47.7, 407.0], [47.8, 407.0], [47.9, 407.0], [48.0, 407.0], [48.1, 407.0], [48.2, 408.0], [48.3, 408.0], [48.4, 408.0], [48.5, 408.0], [48.6, 408.0], [48.7, 408.0], [48.8, 408.0], [48.9, 408.0], [49.0, 409.0], [49.1, 409.0], [49.2, 409.0], [49.3, 409.0], [49.4, 409.0], [49.5, 409.0], [49.6, 410.0], [49.7, 410.0], [49.8, 411.0], [49.9, 411.0], [50.0, 412.0], [50.1, 413.0], [50.2, 413.0], [50.3, 413.0], [50.4, 413.0], [50.5, 413.0], [50.6, 413.0], [50.7, 414.0], [50.8, 415.0], [50.9, 416.0], [51.0, 416.0], [51.1, 417.0], [51.2, 417.0], [51.3, 417.0], [51.4, 417.0], [51.5, 417.0], [51.6, 418.0], [51.7, 418.0], [51.8, 418.0], [51.9, 418.0], [52.0, 419.0], [52.1, 419.0], [52.2, 419.0], [52.3, 419.0], [52.4, 420.0], [52.5, 420.0], [52.6, 421.0], [52.7, 423.0], [52.8, 424.0], [52.9, 424.0], [53.0, 424.0], [53.1, 424.0], [53.2, 425.0], [53.3, 425.0], [53.4, 426.0], [53.5, 428.0], [53.6, 428.0], [53.7, 428.0], [53.8, 428.0], [53.9, 429.0], [54.0, 429.0], [54.1, 430.0], [54.2, 430.0], [54.3, 436.0], [54.4, 436.0], [54.5, 438.0], [54.6, 439.0], [54.7, 440.0], [54.8, 440.0], [54.9, 440.0], [55.0, 441.0], [55.1, 441.0], [55.2, 441.0], [55.3, 442.0], [55.4, 442.0], [55.5, 442.0], [55.6, 442.0], [55.7, 442.0], [55.8, 442.0], [55.9, 442.0], [56.0, 442.0], [56.1, 444.0], [56.2, 444.0], [56.3, 444.0], [56.4, 445.0], [56.5, 448.0], [56.6, 449.0], [56.7, 449.0], [56.8, 450.0], [56.9, 450.0], [57.0, 450.0], [57.1, 450.0], [57.2, 450.0], [57.3, 451.0], [57.4, 451.0], [57.5, 452.0], [57.6, 453.0], [57.7, 453.0], [57.8, 453.0], [57.9, 454.0], [58.0, 454.0], [58.1, 454.0], [58.2, 454.0], [58.3, 456.0], [58.4, 457.0], [58.5, 457.0], [58.6, 458.0], [58.7, 459.0], [58.8, 460.0], [58.9, 460.0], [59.0, 460.0], [59.1, 461.0], [59.2, 461.0], [59.3, 461.0], [59.4, 462.0], [59.5, 463.0], [59.6, 463.0], [59.7, 463.0], [59.8, 463.0], [59.9, 464.0], [60.0, 464.0], [60.1, 464.0], [60.2, 465.0], [60.3, 465.0], [60.4, 465.0], [60.5, 466.0], [60.6, 466.0], [60.7, 466.0], [60.8, 466.0], [60.9, 467.0], [61.0, 467.0], [61.1, 468.0], [61.2, 468.0], [61.3, 468.0], [61.4, 468.0], [61.5, 471.0], [61.6, 471.0], [61.7, 472.0], [61.8, 472.0], [61.9, 472.0], [62.0, 472.0], [62.1, 474.0], [62.2, 474.0], [62.3, 474.0], [62.4, 474.0], [62.5, 475.0], [62.6, 476.0], [62.7, 476.0], [62.8, 477.0], [62.9, 477.0], [63.0, 479.0], [63.1, 479.0], [63.2, 480.0], [63.3, 481.0], [63.4, 481.0], [63.5, 494.0], [63.6, 497.0], [63.7, 498.0], [63.8, 498.0], [63.9, 499.0], [64.0, 499.0], [64.1, 500.0], [64.2, 500.0], [64.3, 501.0], [64.4, 503.0], [64.5, 505.0], [64.6, 505.0], [64.7, 510.0], [64.8, 513.0], [64.9, 514.0], [65.0, 514.0], [65.1, 516.0], [65.2, 518.0], [65.3, 518.0], [65.4, 519.0], [65.5, 520.0], [65.6, 522.0], [65.7, 522.0], [65.8, 522.0], [65.9, 523.0], [66.0, 523.0], [66.1, 523.0], [66.2, 524.0], [66.3, 524.0], [66.4, 524.0], [66.5, 524.0], [66.6, 524.0], [66.7, 524.0], [66.8, 524.0], [66.9, 525.0], [67.0, 525.0], [67.1, 526.0], [67.2, 526.0], [67.3, 526.0], [67.4, 526.0], [67.5, 527.0], [67.6, 527.0], [67.7, 528.0], [67.8, 529.0], [67.9, 530.0], [68.0, 530.0], [68.1, 530.0], [68.2, 530.0], [68.3, 530.0], [68.4, 530.0], [68.5, 530.0], [68.6, 531.0], [68.7, 531.0], [68.8, 531.0], [68.9, 531.0], [69.0, 531.0], [69.1, 531.0], [69.2, 532.0], [69.3, 532.0], [69.4, 532.0], [69.5, 532.0], [69.6, 532.0], [69.7, 532.0], [69.8, 533.0], [69.9, 533.0], [70.0, 533.0], [70.1, 533.0], [70.2, 533.0], [70.3, 533.0], [70.4, 534.0], [70.5, 534.0], [70.6, 534.0], [70.7, 535.0], [70.8, 536.0], [70.9, 536.0], [71.0, 536.0], [71.1, 537.0], [71.2, 539.0], [71.3, 539.0], [71.4, 539.0], [71.5, 539.0], [71.6, 540.0], [71.7, 540.0], [71.8, 540.0], [71.9, 541.0], [72.0, 541.0], [72.1, 541.0], [72.2, 541.0], [72.3, 542.0], [72.4, 542.0], [72.5, 542.0], [72.6, 542.0], [72.7, 543.0], [72.8, 543.0], [72.9, 543.0], [73.0, 543.0], [73.1, 544.0], [73.2, 545.0], [73.3, 545.0], [73.4, 546.0], [73.5, 546.0], [73.6, 546.0], [73.7, 549.0], [73.8, 550.0], [73.9, 552.0], [74.0, 552.0], [74.1, 553.0], [74.2, 554.0], [74.3, 559.0], [74.4, 559.0], [74.5, 560.0], [74.6, 560.0], [74.7, 560.0], [74.8, 560.0], [74.9, 562.0], [75.0, 562.0], [75.1, 562.0], [75.2, 563.0], [75.3, 563.0], [75.4, 564.0], [75.5, 564.0], [75.6, 566.0], [75.7, 567.0], [75.8, 569.0], [75.9, 569.0], [76.0, 571.0], [76.1, 571.0], [76.2, 572.0], [76.3, 572.0], [76.4, 572.0], [76.5, 573.0], [76.6, 573.0], [76.7, 573.0], [76.8, 574.0], [76.9, 575.0], [77.0, 575.0], [77.1, 575.0], [77.2, 575.0], [77.3, 576.0], [77.4, 576.0], [77.5, 576.0], [77.6, 580.0], [77.7, 581.0], [77.8, 581.0], [77.9, 581.0], [78.0, 582.0], [78.1, 583.0], [78.2, 583.0], [78.3, 584.0], [78.4, 584.0], [78.5, 584.0], [78.6, 584.0], [78.7, 584.0], [78.8, 586.0], [78.9, 586.0], [79.0, 587.0], [79.1, 590.0], [79.2, 590.0], [79.3, 590.0], [79.4, 591.0], [79.5, 591.0], [79.6, 594.0], [79.7, 594.0], [79.8, 595.0], [79.9, 595.0], [80.0, 598.0], [80.1, 598.0], [80.2, 598.0], [80.3, 598.0], [80.4, 598.0], [80.5, 600.0], [80.6, 601.0], [80.7, 601.0], [80.8, 601.0], [80.9, 602.0], [81.0, 604.0], [81.1, 604.0], [81.2, 604.0], [81.3, 606.0], [81.4, 606.0], [81.5, 617.0], [81.6, 617.0], [81.7, 619.0], [81.8, 622.0], [81.9, 622.0], [82.0, 623.0], [82.1, 624.0], [82.2, 625.0], [82.3, 625.0], [82.4, 628.0], [82.5, 630.0], [82.6, 630.0], [82.7, 630.0], [82.8, 635.0], [82.9, 636.0], [83.0, 637.0], [83.1, 637.0], [83.2, 638.0], [83.3, 638.0], [83.4, 638.0], [83.5, 639.0], [83.6, 640.0], [83.7, 640.0], [83.8, 640.0], [83.9, 640.0], [84.0, 640.0], [84.1, 641.0], [84.2, 641.0], [84.3, 642.0], [84.4, 643.0], [84.5, 644.0], [84.6, 644.0], [84.7, 645.0], [84.8, 645.0], [84.9, 647.0], [85.0, 647.0], [85.1, 648.0], [85.2, 648.0], [85.3, 648.0], [85.4, 649.0], [85.5, 649.0], [85.6, 650.0], [85.7, 650.0], [85.8, 652.0], [85.9, 652.0], [86.0, 652.0], [86.1, 652.0], [86.2, 653.0], [86.3, 653.0], [86.4, 661.0], [86.5, 661.0], [86.6, 661.0], [86.7, 661.0], [86.8, 661.0], [86.9, 662.0], [87.0, 662.0], [87.1, 665.0], [87.2, 665.0], [87.3, 665.0], [87.4, 667.0], [87.5, 668.0], [87.6, 668.0], [87.7, 670.0], [87.8, 673.0], [87.9, 674.0], [88.0, 674.0], [88.1, 674.0], [88.2, 678.0], [88.3, 679.0], [88.4, 679.0], [88.5, 680.0], [88.6, 682.0], [88.7, 682.0], [88.8, 689.0], [88.9, 690.0], [89.0, 691.0], [89.1, 691.0], [89.2, 692.0], [89.3, 693.0], [89.4, 698.0], [89.5, 698.0], [89.6, 701.0], [89.7, 703.0], [89.8, 704.0], [89.9, 704.0], [90.0, 704.0], [90.1, 707.0], [90.2, 707.0], [90.3, 709.0], [90.4, 710.0], [90.5, 710.0], [90.6, 710.0], [90.7, 713.0], [90.8, 713.0], [90.9, 716.0], [91.0, 716.0], [91.1, 721.0], [91.2, 722.0], [91.3, 722.0], [91.4, 722.0], [91.5, 722.0], [91.6, 723.0], [91.7, 723.0], [91.8, 724.0], [91.9, 724.0], [92.0, 726.0], [92.1, 726.0], [92.2, 730.0], [92.3, 731.0], [92.4, 732.0], [92.5, 732.0], [92.6, 733.0], [92.7, 734.0], [92.8, 735.0], [92.9, 735.0], [93.0, 736.0], [93.1, 736.0], [93.2, 739.0], [93.3, 739.0], [93.4, 743.0], [93.5, 756.0], [93.6, 756.0], [93.7, 756.0], [93.8, 767.0], [93.9, 768.0], [94.0, 768.0], [94.1, 778.0], [94.2, 784.0], [94.3, 797.0], [94.4, 797.0], [94.5, 810.0], [94.6, 824.0], [94.7, 838.0], [94.8, 838.0], [94.9, 841.0], [95.0, 842.0], [95.1, 842.0], [95.2, 844.0], [95.3, 848.0], [95.4, 867.0], [95.5, 867.0], [95.6, 869.0], [95.7, 874.0], [95.8, 887.0], [95.9, 887.0], [96.0, 903.0], [96.1, 915.0], [96.2, 916.0], [96.3, 916.0], [96.4, 920.0], [96.5, 929.0], [96.6, 941.0], [96.7, 941.0], [96.8, 945.0], [96.9, 958.0], [97.0, 958.0], [97.1, 963.0], [97.2, 966.0], [97.3, 981.0], [97.4, 981.0], [97.5, 994.0], [97.6, 1005.0], [97.7, 1020.0], [97.8, 1020.0], [97.9, 1039.0], [98.0, 1044.0], [98.1, 1091.0], [98.2, 1091.0], [98.3, 1131.0], [98.4, 1150.0], [98.5, 1150.0], [98.6, 1166.0], [98.7, 1201.0], [98.8, 1220.0], [98.9, 1220.0], [99.0, 1294.0], [99.1, 1294.0], [99.2, 1629.0], [99.3, 1629.0], [99.4, 1680.0], [99.5, 1699.0], [99.6, 2471.0], [99.7, 2471.0], [99.8, 2722.0], [99.9, 2778.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 175.0, "series": [{"data": [[2400.0, 1.0], [600.0, 67.0], [2700.0, 2.0], [700.0, 36.0], [200.0, 175.0], [800.0, 11.0], [900.0, 12.0], [1000.0, 5.0], [1100.0, 3.0], [1200.0, 4.0], [300.0, 122.0], [400.0, 161.0], [100.0, 13.0], [1600.0, 3.0], [500.0, 120.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 472.0, "series": [{"data": [[0.0, 472.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 257.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60401366E12, "maxY": 1.0, "series": [{"data": [[1.60401372E12, 1.0], [1.6040139E12, 1.0], [1.60401384E12, 1.0], [1.60401402E12, 1.0], [1.60401396E12, 1.0], [1.60401366E12, 1.0], [1.60401378E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401402E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 468.87755102040853, "minX": 1.0, "maxY": 468.87755102040853, "series": [{"data": [[1.0, 468.87755102040853]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 468.87755102040853]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 110.96666666666667, "minX": 1.60401366E12, "maxY": 361669.43333333335, "series": [{"data": [[1.60401372E12, 277077.15], [1.6040139E12, 271355.2833333333], [1.60401384E12, 361669.43333333335], [1.60401402E12, 12636.033333333333], [1.60401396E12, 308969.98333333334], [1.60401366E12, 318235.05], [1.60401378E12, 285826.88333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401372E12, 847.4666666666667], [1.6040139E12, 892.55], [1.60401384E12, 980.2], [1.60401402E12, 110.96666666666667], [1.60401396E12, 1022.75], [1.60401366E12, 613.1166666666667], [1.60401378E12, 1055.9833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401402E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 329.25000000000006, "minX": 1.60401366E12, "maxY": 537.0714285714288, "series": [{"data": [[1.60401372E12, 537.0714285714288], [1.6040139E12, 507.43220338983053], [1.60401384E12, 457.39694656488547], [1.60401402E12, 329.25000000000006], [1.60401396E12, 439.30147058823525], [1.60401366E12, 492.67901234567915], [1.60401378E12, 423.8085106382979]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401402E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 329.0625, "minX": 1.60401366E12, "maxY": 535.7946428571429, "series": [{"data": [[1.60401372E12, 535.7946428571429], [1.6040139E12, 506.32203389830516], [1.60401384E12, 456.25954198473283], [1.60401402E12, 329.0625], [1.60401396E12, 438.17647058823536], [1.60401366E12, 491.2592592592591], [1.60401378E12, 422.88652482269504]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401402E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60401366E12, "maxY": 0.38271604938271586, "series": [{"data": [[1.60401372E12, 0.017857142857142863], [1.6040139E12, 0.016949152542372885], [1.60401384E12, 0.01526717557251909], [1.60401402E12, 0.0], [1.60401396E12, 0.03676470588235295], [1.60401366E12, 0.38271604938271586], [1.60401378E12, 0.028368794326241144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401402E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.60401366E12, "maxY": 2778.0, "series": [{"data": [[1.60401372E12, 981.0], [1.6040139E12, 848.0], [1.60401384E12, 2722.0], [1.60401402E12, 707.0], [1.60401396E12, 1699.0], [1.60401366E12, 2778.0], [1.60401378E12, 1629.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401372E12, 308.50999919176104], [1.6040139E12, 268.0], [1.60401384E12, 189.0], [1.60401402E12, 263.0], [1.60401396E12, 172.69899990200997], [1.60401366E12, 183.0], [1.60401378E12, 181.66799979686738]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401372E12, 311.5610003232956], [1.6040139E12, 268.0], [1.60401384E12, 189.0], [1.60401402E12, 263.0], [1.60401396E12, 173.06890003919602], [1.60401366E12, 183.0], [1.60401378E12, 182.43480008125306]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401372E12, 310.2049995958805], [1.6040139E12, 268.0], [1.60401384E12, 189.0], [1.60401402E12, 263.0], [1.60401396E12, 172.904499951005], [1.60401366E12, 183.0], [1.60401378E12, 182.09399989843368]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401372E12, 308.0], [1.6040139E12, 268.0], [1.60401384E12, 189.0], [1.60401402E12, 263.0], [1.60401396E12, 172.0], [1.60401366E12, 183.0], [1.60401378E12, 180.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401372E12, 502.0], [1.6040139E12, 470.0], [1.60401384E12, 394.0], [1.60401402E12, 274.5], [1.60401396E12, 387.0], [1.60401366E12, 378.0], [1.60401378E12, 391.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401402E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 678.0, "series": [{"data": [[1.0, 678.0], [2.0, 498.5], [4.0, 273.0], [5.0, 212.0], [3.0, 365.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 676.0, "series": [{"data": [[1.0, 676.0], [2.0, 497.0], [4.0, 272.0], [5.0, 212.0], [3.0, 364.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60401366E12, "maxY": 2.35, "series": [{"data": [[1.60401372E12, 1.8666666666666667], [1.6040139E12, 1.9666666666666666], [1.60401384E12, 2.183333333333333], [1.60401402E12, 0.25], [1.60401396E12, 2.2666666666666666], [1.60401366E12, 1.3666666666666667], [1.60401378E12, 2.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401402E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401366E12, "maxY": 2.35, "series": [{"data": [[1.60401372E12, 1.8666666666666667], [1.6040139E12, 1.9666666666666666], [1.60401384E12, 2.183333333333333], [1.60401402E12, 0.26666666666666666], [1.60401396E12, 2.2666666666666666], [1.60401366E12, 1.35], [1.60401378E12, 2.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401402E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401366E12, "maxY": 2.35, "series": [{"data": [[1.60401372E12, 1.8666666666666667], [1.6040139E12, 1.9666666666666666], [1.60401384E12, 2.183333333333333], [1.60401402E12, 0.26666666666666666], [1.60401396E12, 2.2666666666666666], [1.60401366E12, 1.35], [1.60401378E12, 2.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401402E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60401366E12, "maxY": 2.35, "series": [{"data": [[1.60401372E12, 1.8666666666666667], [1.6040139E12, 1.9666666666666666], [1.60401384E12, 2.183333333333333], [1.60401402E12, 0.26666666666666666], [1.60401396E12, 2.2666666666666666], [1.60401366E12, 1.35], [1.60401378E12, 2.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401402E12, "title": "Total Transactions Per Second"}},
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

