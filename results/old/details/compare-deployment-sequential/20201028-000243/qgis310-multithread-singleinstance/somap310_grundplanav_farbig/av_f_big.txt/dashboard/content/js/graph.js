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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 2915.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 189.0], [0.3, 190.0], [0.4, 190.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 193.0], [0.9, 197.0], [1.0, 197.0], [1.1, 198.0], [1.2, 198.0], [1.3, 199.0], [1.4, 200.0], [1.5, 200.0], [1.6, 200.0], [1.7, 201.0], [1.8, 202.0], [1.9, 202.0], [2.0, 203.0], [2.1, 204.0], [2.2, 207.0], [2.3, 207.0], [2.4, 209.0], [2.5, 209.0], [2.6, 209.0], [2.7, 209.0], [2.8, 210.0], [2.9, 210.0], [3.0, 210.0], [3.1, 210.0], [3.2, 210.0], [3.3, 212.0], [3.4, 212.0], [3.5, 212.0], [3.6, 213.0], [3.7, 213.0], [3.8, 213.0], [3.9, 214.0], [4.0, 214.0], [4.1, 214.0], [4.2, 214.0], [4.3, 215.0], [4.4, 215.0], [4.5, 216.0], [4.6, 216.0], [4.7, 216.0], [4.8, 216.0], [4.9, 218.0], [5.0, 218.0], [5.1, 218.0], [5.2, 221.0], [5.3, 221.0], [5.4, 222.0], [5.5, 227.0], [5.6, 227.0], [5.7, 227.0], [5.8, 227.0], [5.9, 229.0], [6.0, 230.0], [6.1, 230.0], [6.2, 230.0], [6.3, 231.0], [6.4, 232.0], [6.5, 232.0], [6.6, 232.0], [6.7, 233.0], [6.8, 233.0], [6.9, 235.0], [7.0, 239.0], [7.1, 241.0], [7.2, 241.0], [7.3, 241.0], [7.4, 242.0], [7.5, 244.0], [7.6, 244.0], [7.7, 245.0], [7.8, 246.0], [7.9, 246.0], [8.0, 246.0], [8.1, 247.0], [8.2, 248.0], [8.3, 250.0], [8.4, 250.0], [8.5, 251.0], [8.6, 251.0], [8.7, 251.0], [8.8, 251.0], [8.9, 255.0], [9.0, 255.0], [9.1, 255.0], [9.2, 257.0], [9.3, 259.0], [9.4, 260.0], [9.5, 260.0], [9.6, 260.0], [9.7, 260.0], [9.8, 261.0], [9.9, 261.0], [10.0, 261.0], [10.1, 261.0], [10.2, 261.0], [10.3, 261.0], [10.4, 262.0], [10.5, 262.0], [10.6, 262.0], [10.7, 262.0], [10.8, 264.0], [10.9, 265.0], [11.0, 265.0], [11.1, 265.0], [11.2, 265.0], [11.3, 265.0], [11.4, 265.0], [11.5, 265.0], [11.6, 267.0], [11.7, 267.0], [11.8, 267.0], [11.9, 267.0], [12.0, 268.0], [12.1, 268.0], [12.2, 268.0], [12.3, 269.0], [12.4, 269.0], [12.5, 269.0], [12.6, 270.0], [12.7, 271.0], [12.8, 271.0], [12.9, 271.0], [13.0, 271.0], [13.1, 271.0], [13.2, 271.0], [13.3, 271.0], [13.4, 271.0], [13.5, 272.0], [13.6, 272.0], [13.7, 272.0], [13.8, 273.0], [13.9, 275.0], [14.0, 275.0], [14.1, 275.0], [14.2, 276.0], [14.3, 276.0], [14.4, 276.0], [14.5, 276.0], [14.6, 277.0], [14.7, 277.0], [14.8, 277.0], [14.9, 278.0], [15.0, 278.0], [15.1, 278.0], [15.2, 279.0], [15.3, 279.0], [15.4, 280.0], [15.5, 280.0], [15.6, 280.0], [15.7, 281.0], [15.8, 281.0], [15.9, 281.0], [16.0, 281.0], [16.1, 281.0], [16.2, 282.0], [16.3, 282.0], [16.4, 282.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 283.0], [16.9, 283.0], [17.0, 283.0], [17.1, 283.0], [17.2, 283.0], [17.3, 283.0], [17.4, 283.0], [17.5, 284.0], [17.6, 284.0], [17.7, 285.0], [17.8, 285.0], [17.9, 285.0], [18.0, 286.0], [18.1, 286.0], [18.2, 286.0], [18.3, 286.0], [18.4, 287.0], [18.5, 287.0], [18.6, 287.0], [18.7, 287.0], [18.8, 288.0], [18.9, 288.0], [19.0, 288.0], [19.1, 288.0], [19.2, 288.0], [19.3, 288.0], [19.4, 289.0], [19.5, 289.0], [19.6, 290.0], [19.7, 290.0], [19.8, 290.0], [19.9, 290.0], [20.0, 291.0], [20.1, 291.0], [20.2, 291.0], [20.3, 291.0], [20.4, 291.0], [20.5, 292.0], [20.6, 293.0], [20.7, 293.0], [20.8, 293.0], [20.9, 293.0], [21.0, 293.0], [21.1, 293.0], [21.2, 293.0], [21.3, 294.0], [21.4, 295.0], [21.5, 295.0], [21.6, 295.0], [21.7, 295.0], [21.8, 296.0], [21.9, 296.0], [22.0, 296.0], [22.1, 297.0], [22.2, 297.0], [22.3, 297.0], [22.4, 297.0], [22.5, 297.0], [22.6, 298.0], [22.7, 298.0], [22.8, 298.0], [22.9, 301.0], [23.0, 301.0], [23.1, 301.0], [23.2, 301.0], [23.3, 303.0], [23.4, 303.0], [23.5, 304.0], [23.6, 304.0], [23.7, 304.0], [23.8, 304.0], [23.9, 305.0], [24.0, 306.0], [24.1, 306.0], [24.2, 306.0], [24.3, 306.0], [24.4, 306.0], [24.5, 307.0], [24.6, 307.0], [24.7, 307.0], [24.8, 307.0], [24.9, 308.0], [25.0, 308.0], [25.1, 308.0], [25.2, 308.0], [25.3, 308.0], [25.4, 309.0], [25.5, 309.0], [25.6, 309.0], [25.7, 309.0], [25.8, 309.0], [25.9, 310.0], [26.0, 310.0], [26.1, 310.0], [26.2, 310.0], [26.3, 310.0], [26.4, 311.0], [26.5, 311.0], [26.6, 312.0], [26.7, 312.0], [26.8, 312.0], [26.9, 313.0], [27.0, 316.0], [27.1, 319.0], [27.2, 319.0], [27.3, 320.0], [27.4, 321.0], [27.5, 321.0], [27.6, 321.0], [27.7, 324.0], [27.8, 325.0], [27.9, 325.0], [28.0, 325.0], [28.1, 329.0], [28.2, 330.0], [28.3, 331.0], [28.4, 331.0], [28.5, 332.0], [28.6, 333.0], [28.7, 333.0], [28.8, 335.0], [28.9, 341.0], [29.0, 343.0], [29.1, 343.0], [29.2, 344.0], [29.3, 344.0], [29.4, 345.0], [29.5, 345.0], [29.6, 346.0], [29.7, 348.0], [29.8, 350.0], [29.9, 350.0], [30.0, 351.0], [30.1, 354.0], [30.2, 354.0], [30.3, 356.0], [30.4, 356.0], [30.5, 357.0], [30.6, 357.0], [30.7, 358.0], [30.8, 358.0], [30.9, 360.0], [31.0, 360.0], [31.1, 362.0], [31.2, 363.0], [31.3, 364.0], [31.4, 364.0], [31.5, 364.0], [31.6, 365.0], [31.7, 365.0], [31.8, 366.0], [31.9, 366.0], [32.0, 367.0], [32.1, 367.0], [32.2, 369.0], [32.3, 369.0], [32.4, 369.0], [32.5, 369.0], [32.6, 370.0], [32.7, 370.0], [32.8, 372.0], [32.9, 372.0], [33.0, 372.0], [33.1, 373.0], [33.2, 374.0], [33.3, 374.0], [33.4, 376.0], [33.5, 378.0], [33.6, 378.0], [33.7, 378.0], [33.8, 379.0], [33.9, 379.0], [34.0, 379.0], [34.1, 379.0], [34.2, 380.0], [34.3, 380.0], [34.4, 380.0], [34.5, 380.0], [34.6, 381.0], [34.7, 381.0], [34.8, 381.0], [34.9, 382.0], [35.0, 383.0], [35.1, 383.0], [35.2, 383.0], [35.3, 383.0], [35.4, 384.0], [35.5, 384.0], [35.6, 385.0], [35.7, 385.0], [35.8, 385.0], [35.9, 385.0], [36.0, 385.0], [36.1, 386.0], [36.2, 386.0], [36.3, 386.0], [36.4, 386.0], [36.5, 387.0], [36.6, 387.0], [36.7, 387.0], [36.8, 387.0], [36.9, 387.0], [37.0, 387.0], [37.1, 387.0], [37.2, 387.0], [37.3, 388.0], [37.4, 388.0], [37.5, 388.0], [37.6, 388.0], [37.7, 388.0], [37.8, 388.0], [37.9, 389.0], [38.0, 389.0], [38.1, 389.0], [38.2, 389.0], [38.3, 389.0], [38.4, 389.0], [38.5, 389.0], [38.6, 390.0], [38.7, 390.0], [38.8, 390.0], [38.9, 390.0], [39.0, 390.0], [39.1, 392.0], [39.2, 392.0], [39.3, 392.0], [39.4, 392.0], [39.5, 392.0], [39.6, 392.0], [39.7, 392.0], [39.8, 392.0], [39.9, 392.0], [40.0, 393.0], [40.1, 393.0], [40.2, 393.0], [40.3, 393.0], [40.4, 393.0], [40.5, 393.0], [40.6, 394.0], [40.7, 394.0], [40.8, 394.0], [40.9, 395.0], [41.0, 395.0], [41.1, 395.0], [41.2, 395.0], [41.3, 395.0], [41.4, 396.0], [41.5, 396.0], [41.6, 396.0], [41.7, 397.0], [41.8, 397.0], [41.9, 397.0], [42.0, 397.0], [42.1, 397.0], [42.2, 397.0], [42.3, 397.0], [42.4, 398.0], [42.5, 398.0], [42.6, 398.0], [42.7, 398.0], [42.8, 398.0], [42.9, 399.0], [43.0, 399.0], [43.1, 399.0], [43.2, 399.0], [43.3, 399.0], [43.4, 399.0], [43.5, 399.0], [43.6, 400.0], [43.7, 400.0], [43.8, 400.0], [43.9, 400.0], [44.0, 401.0], [44.1, 401.0], [44.2, 401.0], [44.3, 401.0], [44.4, 401.0], [44.5, 401.0], [44.6, 401.0], [44.7, 402.0], [44.8, 403.0], [44.9, 404.0], [45.0, 404.0], [45.1, 405.0], [45.2, 405.0], [45.3, 405.0], [45.4, 405.0], [45.5, 406.0], [45.6, 406.0], [45.7, 406.0], [45.8, 406.0], [45.9, 407.0], [46.0, 407.0], [46.1, 407.0], [46.2, 407.0], [46.3, 407.0], [46.4, 407.0], [46.5, 407.0], [46.6, 407.0], [46.7, 408.0], [46.8, 408.0], [46.9, 408.0], [47.0, 409.0], [47.1, 409.0], [47.2, 409.0], [47.3, 409.0], [47.4, 410.0], [47.5, 410.0], [47.6, 410.0], [47.7, 410.0], [47.8, 411.0], [47.9, 411.0], [48.0, 411.0], [48.1, 412.0], [48.2, 412.0], [48.3, 412.0], [48.4, 412.0], [48.5, 413.0], [48.6, 414.0], [48.7, 414.0], [48.8, 415.0], [48.9, 415.0], [49.0, 415.0], [49.1, 415.0], [49.2, 415.0], [49.3, 416.0], [49.4, 416.0], [49.5, 416.0], [49.6, 417.0], [49.7, 417.0], [49.8, 418.0], [49.9, 418.0], [50.0, 418.0], [50.1, 418.0], [50.2, 418.0], [50.3, 419.0], [50.4, 419.0], [50.5, 419.0], [50.6, 419.0], [50.7, 419.0], [50.8, 420.0], [50.9, 421.0], [51.0, 421.0], [51.1, 421.0], [51.2, 422.0], [51.3, 422.0], [51.4, 422.0], [51.5, 423.0], [51.6, 424.0], [51.7, 424.0], [51.8, 426.0], [51.9, 426.0], [52.0, 427.0], [52.1, 427.0], [52.2, 428.0], [52.3, 430.0], [52.4, 432.0], [52.5, 432.0], [52.6, 432.0], [52.7, 433.0], [52.8, 433.0], [52.9, 433.0], [53.0, 433.0], [53.1, 435.0], [53.2, 437.0], [53.3, 437.0], [53.4, 437.0], [53.5, 437.0], [53.6, 437.0], [53.7, 439.0], [53.8, 439.0], [53.9, 440.0], [54.0, 440.0], [54.1, 441.0], [54.2, 444.0], [54.3, 445.0], [54.4, 445.0], [54.5, 448.0], [54.6, 448.0], [54.7, 450.0], [54.8, 450.0], [54.9, 451.0], [55.0, 451.0], [55.1, 451.0], [55.2, 452.0], [55.3, 452.0], [55.4, 453.0], [55.5, 453.0], [55.6, 454.0], [55.7, 454.0], [55.8, 454.0], [55.9, 454.0], [56.0, 455.0], [56.1, 456.0], [56.2, 456.0], [56.3, 456.0], [56.4, 457.0], [56.5, 458.0], [56.6, 460.0], [56.7, 460.0], [56.8, 460.0], [56.9, 460.0], [57.0, 460.0], [57.1, 460.0], [57.2, 461.0], [57.3, 461.0], [57.4, 461.0], [57.5, 461.0], [57.6, 462.0], [57.7, 462.0], [57.8, 462.0], [57.9, 462.0], [58.0, 466.0], [58.1, 466.0], [58.2, 466.0], [58.3, 466.0], [58.4, 466.0], [58.5, 466.0], [58.6, 467.0], [58.7, 468.0], [58.8, 468.0], [58.9, 468.0], [59.0, 469.0], [59.1, 470.0], [59.2, 470.0], [59.3, 470.0], [59.4, 472.0], [59.5, 473.0], [59.6, 473.0], [59.7, 473.0], [59.8, 473.0], [59.9, 474.0], [60.0, 474.0], [60.1, 474.0], [60.2, 474.0], [60.3, 475.0], [60.4, 475.0], [60.5, 476.0], [60.6, 476.0], [60.7, 477.0], [60.8, 477.0], [60.9, 479.0], [61.0, 480.0], [61.1, 481.0], [61.2, 481.0], [61.3, 482.0], [61.4, 482.0], [61.5, 483.0], [61.6, 483.0], [61.7, 485.0], [61.8, 486.0], [61.9, 486.0], [62.0, 486.0], [62.1, 487.0], [62.2, 487.0], [62.3, 487.0], [62.4, 488.0], [62.5, 489.0], [62.6, 489.0], [62.7, 489.0], [62.8, 489.0], [62.9, 489.0], [63.0, 490.0], [63.1, 490.0], [63.2, 490.0], [63.3, 490.0], [63.4, 490.0], [63.5, 491.0], [63.6, 494.0], [63.7, 495.0], [63.8, 495.0], [63.9, 500.0], [64.0, 501.0], [64.1, 501.0], [64.2, 501.0], [64.3, 502.0], [64.4, 503.0], [64.5, 506.0], [64.6, 506.0], [64.7, 507.0], [64.8, 510.0], [64.9, 511.0], [65.0, 511.0], [65.1, 513.0], [65.2, 514.0], [65.3, 514.0], [65.4, 517.0], [65.5, 518.0], [65.6, 518.0], [65.7, 518.0], [65.8, 518.0], [65.9, 522.0], [66.0, 522.0], [66.1, 522.0], [66.2, 522.0], [66.3, 523.0], [66.4, 524.0], [66.5, 524.0], [66.6, 524.0], [66.7, 524.0], [66.8, 524.0], [66.9, 525.0], [67.0, 526.0], [67.1, 527.0], [67.2, 527.0], [67.3, 527.0], [67.4, 528.0], [67.5, 529.0], [67.6, 529.0], [67.7, 530.0], [67.8, 531.0], [67.9, 531.0], [68.0, 531.0], [68.1, 532.0], [68.2, 533.0], [68.3, 533.0], [68.4, 533.0], [68.5, 534.0], [68.6, 534.0], [68.7, 534.0], [68.8, 535.0], [68.9, 535.0], [69.0, 535.0], [69.1, 535.0], [69.2, 535.0], [69.3, 535.0], [69.4, 536.0], [69.5, 536.0], [69.6, 536.0], [69.7, 536.0], [69.8, 536.0], [69.9, 536.0], [70.0, 536.0], [70.1, 537.0], [70.2, 537.0], [70.3, 538.0], [70.4, 538.0], [70.5, 538.0], [70.6, 538.0], [70.7, 542.0], [70.8, 542.0], [70.9, 542.0], [71.0, 542.0], [71.1, 542.0], [71.2, 542.0], [71.3, 543.0], [71.4, 543.0], [71.5, 543.0], [71.6, 544.0], [71.7, 544.0], [71.8, 545.0], [71.9, 545.0], [72.0, 546.0], [72.1, 546.0], [72.2, 546.0], [72.3, 546.0], [72.4, 546.0], [72.5, 546.0], [72.6, 547.0], [72.7, 547.0], [72.8, 548.0], [72.9, 548.0], [73.0, 548.0], [73.1, 549.0], [73.2, 550.0], [73.3, 550.0], [73.4, 550.0], [73.5, 551.0], [73.6, 551.0], [73.7, 551.0], [73.8, 552.0], [73.9, 553.0], [74.0, 553.0], [74.1, 553.0], [74.2, 554.0], [74.3, 554.0], [74.4, 554.0], [74.5, 554.0], [74.6, 557.0], [74.7, 558.0], [74.8, 558.0], [74.9, 561.0], [75.0, 562.0], [75.1, 562.0], [75.2, 562.0], [75.3, 564.0], [75.4, 564.0], [75.5, 564.0], [75.6, 566.0], [75.7, 566.0], [75.8, 567.0], [75.9, 567.0], [76.0, 567.0], [76.1, 567.0], [76.2, 567.0], [76.3, 567.0], [76.4, 569.0], [76.5, 570.0], [76.6, 572.0], [76.7, 572.0], [76.8, 572.0], [76.9, 573.0], [77.0, 573.0], [77.1, 574.0], [77.2, 575.0], [77.3, 576.0], [77.4, 576.0], [77.5, 579.0], [77.6, 579.0], [77.7, 580.0], [77.8, 580.0], [77.9, 580.0], [78.0, 581.0], [78.1, 582.0], [78.2, 582.0], [78.3, 584.0], [78.4, 586.0], [78.5, 586.0], [78.6, 588.0], [78.7, 589.0], [78.8, 590.0], [78.9, 590.0], [79.0, 594.0], [79.1, 595.0], [79.2, 597.0], [79.3, 597.0], [79.4, 599.0], [79.5, 599.0], [79.6, 601.0], [79.7, 601.0], [79.8, 603.0], [79.9, 604.0], [80.0, 604.0], [80.1, 604.0], [80.2, 606.0], [80.3, 607.0], [80.4, 607.0], [80.5, 608.0], [80.6, 610.0], [80.7, 610.0], [80.8, 610.0], [80.9, 611.0], [81.0, 619.0], [81.1, 620.0], [81.2, 620.0], [81.3, 623.0], [81.4, 625.0], [81.5, 626.0], [81.6, 626.0], [81.7, 628.0], [81.8, 629.0], [81.9, 629.0], [82.0, 629.0], [82.1, 629.0], [82.2, 633.0], [82.3, 633.0], [82.4, 633.0], [82.5, 635.0], [82.6, 636.0], [82.7, 636.0], [82.8, 637.0], [82.9, 637.0], [83.0, 639.0], [83.1, 639.0], [83.2, 640.0], [83.3, 641.0], [83.4, 641.0], [83.5, 644.0], [83.6, 644.0], [83.7, 644.0], [83.8, 644.0], [83.9, 644.0], [84.0, 645.0], [84.1, 646.0], [84.2, 646.0], [84.3, 648.0], [84.4, 649.0], [84.5, 649.0], [84.6, 649.0], [84.7, 650.0], [84.8, 651.0], [84.9, 653.0], [85.0, 653.0], [85.1, 654.0], [85.2, 655.0], [85.3, 655.0], [85.4, 655.0], [85.5, 656.0], [85.6, 658.0], [85.7, 658.0], [85.8, 660.0], [85.9, 660.0], [86.0, 660.0], [86.1, 660.0], [86.2, 665.0], [86.3, 666.0], [86.4, 667.0], [86.5, 667.0], [86.6, 667.0], [86.7, 667.0], [86.8, 667.0], [86.9, 670.0], [87.0, 675.0], [87.1, 676.0], [87.2, 676.0], [87.3, 677.0], [87.4, 677.0], [87.5, 677.0], [87.6, 677.0], [87.7, 678.0], [87.8, 679.0], [87.9, 680.0], [88.0, 680.0], [88.1, 682.0], [88.2, 683.0], [88.3, 684.0], [88.4, 684.0], [88.5, 692.0], [88.6, 693.0], [88.7, 693.0], [88.8, 693.0], [88.9, 694.0], [89.0, 694.0], [89.1, 694.0], [89.2, 694.0], [89.3, 697.0], [89.4, 698.0], [89.5, 698.0], [89.6, 699.0], [89.7, 703.0], [89.8, 703.0], [89.9, 703.0], [90.0, 706.0], [90.1, 708.0], [90.2, 708.0], [90.3, 710.0], [90.4, 714.0], [90.5, 715.0], [90.6, 715.0], [90.7, 716.0], [90.8, 719.0], [90.9, 720.0], [91.0, 720.0], [91.1, 722.0], [91.2, 723.0], [91.3, 725.0], [91.4, 725.0], [91.5, 726.0], [91.6, 726.0], [91.7, 726.0], [91.8, 727.0], [91.9, 729.0], [92.0, 731.0], [92.1, 731.0], [92.2, 731.0], [92.3, 736.0], [92.4, 737.0], [92.5, 737.0], [92.6, 739.0], [92.7, 739.0], [92.8, 742.0], [92.9, 742.0], [93.0, 745.0], [93.1, 748.0], [93.2, 750.0], [93.3, 750.0], [93.4, 752.0], [93.5, 758.0], [93.6, 758.0], [93.7, 762.0], [93.8, 769.0], [93.9, 770.0], [94.0, 770.0], [94.1, 816.0], [94.2, 818.0], [94.3, 821.0], [94.4, 821.0], [94.5, 823.0], [94.6, 837.0], [94.7, 838.0], [94.8, 838.0], [94.9, 843.0], [95.0, 845.0], [95.1, 845.0], [95.2, 852.0], [95.3, 863.0], [95.4, 879.0], [95.5, 879.0], [95.6, 883.0], [95.7, 883.0], [95.8, 885.0], [95.9, 885.0], [96.0, 893.0], [96.1, 900.0], [96.2, 928.0], [96.3, 928.0], [96.4, 934.0], [96.5, 952.0], [96.6, 957.0], [96.7, 957.0], [96.8, 964.0], [96.9, 981.0], [97.0, 981.0], [97.1, 988.0], [97.2, 989.0], [97.3, 1002.0], [97.4, 1002.0], [97.5, 1008.0], [97.6, 1013.0], [97.7, 1016.0], [97.8, 1016.0], [97.9, 1081.0], [98.0, 1106.0], [98.1, 1114.0], [98.2, 1114.0], [98.3, 1192.0], [98.4, 1193.0], [98.5, 1193.0], [98.6, 1216.0], [98.7, 1250.0], [98.8, 1289.0], [98.9, 1289.0], [99.0, 1302.0], [99.1, 1351.0], [99.2, 1607.0], [99.3, 1607.0], [99.4, 1625.0], [99.5, 1639.0], [99.6, 2549.0], [99.7, 2549.0], [99.8, 2792.0], [99.9, 2915.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 158.0, "series": [{"data": [[600.0, 74.0], [2500.0, 1.0], [2700.0, 1.0], [700.0, 32.0], [2900.0, 1.0], [200.0, 158.0], [800.0, 15.0], [900.0, 9.0], [1000.0, 5.0], [1100.0, 4.0], [300.0, 152.0], [1200.0, 3.0], [1300.0, 2.0], [400.0, 149.0], [100.0, 10.0], [1600.0, 3.0], [500.0, 116.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 470.0, "series": [{"data": [[0.0, 470.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 259.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60384398E12, "maxY": 1.0, "series": [{"data": [[1.60384398E12, 1.0], [1.60384428E12, 1.0], [1.6038441E12, 1.0], [1.60384422E12, 1.0], [1.60384404E12, 1.0], [1.60384416E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384428E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 475.15918367346933, "minX": 1.0, "maxY": 475.15918367346933, "series": [{"data": [[1.0, 475.15918367346933]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 475.15918367346933]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 802.9333333333333, "minX": 1.60384398E12, "maxY": 398354.3, "series": [{"data": [[1.60384398E12, 398354.3], [1.60384428E12, 267793.88333333336], [1.6038441E12, 317036.61666666664], [1.60384422E12, 273577.15], [1.60384404E12, 275354.48333333334], [1.60384416E12, 303655.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60384398E12, 802.9333333333333], [1.60384428E12, 960.0], [1.6038441E12, 1074.25], [1.60384422E12, 869.85], [1.60384404E12, 892.1166666666667], [1.60384416E12, 923.8833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384428E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 410.3541666666665, "minX": 1.60384398E12, "maxY": 532.1509433962266, "series": [{"data": [[1.60384398E12, 532.1509433962266], [1.60384428E12, 411.59689922480624], [1.6038441E12, 410.3541666666665], [1.60384422E12, 523.6608695652175], [1.60384404E12, 508.80508474576277], [1.60384416E12, 490.9512195121952]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384428E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 409.3194444444444, "minX": 1.60384398E12, "maxY": 530.8113207547173, "series": [{"data": [[1.60384398E12, 530.8113207547173], [1.60384428E12, 410.6279069767441], [1.6038441E12, 409.3194444444444], [1.60384422E12, 522.4695652173916], [1.60384404E12, 507.6016949152542], [1.60384416E12, 489.83739837398366]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384428E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0069444444444444475, "minX": 1.60384398E12, "maxY": 0.47169811320754734, "series": [{"data": [[1.60384398E12, 0.47169811320754734], [1.60384428E12, 0.015503875968992248], [1.6038441E12, 0.0069444444444444475], [1.60384422E12, 0.034782608695652195], [1.60384404E12, 0.016949152542372878], [1.60384416E12, 0.00813008130081301]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384428E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60384398E12, "maxY": 2915.0, "series": [{"data": [[1.60384398E12, 2792.0], [1.60384428E12, 1639.0], [1.6038441E12, 1607.0], [1.60384422E12, 838.0], [1.60384404E12, 816.0], [1.60384416E12, 2915.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60384398E12, 189.0], [1.60384428E12, 180.2099995970726], [1.6038441E12, 205.52499982714653], [1.60384422E12, 265.791999502182], [1.60384404E12, 346.05899917721746], [1.60384416E12, 193.46399988174437]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60384398E12, 189.0593000102043], [1.60384428E12, 181.73100016117095], [1.6038441E12, 206.1775000691414], [1.60384422E12, 267.6712001991272], [1.60384404E12, 349.164900329113], [1.60384416E12, 193.91040004730223]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60384398E12, 189.0164999872446], [1.60384428E12, 181.0549997985363], [1.6038441E12, 205.88749991357327], [1.60384422E12, 266.835999751091], [1.60384404E12, 347.78449958860875], [1.60384416E12, 193.7119999408722]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60384398E12, 189.0], [1.60384428E12, 178.0], [1.6038441E12, 204.0], [1.60384422E12, 265.0], [1.60384404E12, 344.0], [1.60384416E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60384398E12, 418.0], [1.60384428E12, 303.0], [1.6038441E12, 310.0], [1.60384422E12, 524.0], [1.60384404E12, 484.0], [1.60384416E12, 411.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 267.5, "minX": 1.0, "maxY": 667.0, "series": [{"data": [[1.0, 667.0], [2.0, 494.5], [4.0, 267.5], [3.0, 353.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 267.5, "minX": 1.0, "maxY": 666.0, "series": [{"data": [[1.0, 666.0], [2.0, 493.5], [4.0, 267.5], [3.0, 353.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.60384398E12, "maxY": 2.4, "series": [{"data": [[1.60384398E12, 1.7833333333333334], [1.60384428E12, 2.1333333333333333], [1.6038441E12, 2.4], [1.60384422E12, 1.9166666666666667], [1.60384404E12, 1.9666666666666666], [1.60384416E12, 2.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60384398E12, "maxY": 2.4, "series": [{"data": [[1.60384398E12, 1.7666666666666666], [1.60384428E12, 2.15], [1.6038441E12, 2.4], [1.60384422E12, 1.9166666666666667], [1.60384404E12, 1.9666666666666666], [1.60384416E12, 2.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384428E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60384398E12, "maxY": 2.4, "series": [{"data": [[1.60384398E12, 1.7666666666666666], [1.60384428E12, 2.15], [1.6038441E12, 2.4], [1.60384422E12, 1.9166666666666667], [1.60384404E12, 1.9666666666666666], [1.60384416E12, 2.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384428E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.60384398E12, "maxY": 2.4, "series": [{"data": [[1.60384398E12, 1.7666666666666666], [1.60384428E12, 2.15], [1.6038441E12, 2.4], [1.60384422E12, 1.9166666666666667], [1.60384404E12, 1.9666666666666666], [1.60384416E12, 2.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384428E12, "title": "Total Transactions Per Second"}},
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

