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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 7622.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 5.0], [0.3, 14.0], [0.4, 15.0], [0.5, 16.0], [0.6, 16.0], [0.7, 19.0], [0.8, 20.0], [0.9, 21.0], [1.0, 22.0], [1.1, 22.0], [1.2, 23.0], [1.3, 25.0], [1.4, 26.0], [1.5, 27.0], [1.6, 29.0], [1.7, 30.0], [1.8, 32.0], [1.9, 32.0], [2.0, 35.0], [2.1, 36.0], [2.2, 39.0], [2.3, 43.0], [2.4, 45.0], [2.5, 47.0], [2.6, 50.0], [2.7, 56.0], [2.8, 60.0], [2.9, 65.0], [3.0, 69.0], [3.1, 71.0], [3.2, 73.0], [3.3, 81.0], [3.4, 86.0], [3.5, 91.0], [3.6, 98.0], [3.7, 111.0], [3.8, 115.0], [3.9, 119.0], [4.0, 121.0], [4.1, 124.0], [4.2, 126.0], [4.3, 128.0], [4.4, 128.0], [4.5, 129.0], [4.6, 131.0], [4.7, 131.0], [4.8, 133.0], [4.9, 133.0], [5.0, 134.0], [5.1, 134.0], [5.2, 135.0], [5.3, 136.0], [5.4, 138.0], [5.5, 139.0], [5.6, 140.0], [5.7, 140.0], [5.8, 141.0], [5.9, 142.0], [6.0, 143.0], [6.1, 143.0], [6.2, 144.0], [6.3, 144.0], [6.4, 145.0], [6.5, 146.0], [6.6, 146.0], [6.7, 147.0], [6.8, 148.0], [6.9, 149.0], [7.0, 149.0], [7.1, 149.0], [7.2, 151.0], [7.3, 151.0], [7.4, 152.0], [7.5, 153.0], [7.6, 153.0], [7.7, 154.0], [7.8, 154.0], [7.9, 156.0], [8.0, 156.0], [8.1, 157.0], [8.2, 157.0], [8.3, 158.0], [8.4, 158.0], [8.5, 159.0], [8.6, 159.0], [8.7, 160.0], [8.8, 161.0], [8.9, 161.0], [9.0, 162.0], [9.1, 163.0], [9.2, 163.0], [9.3, 164.0], [9.4, 165.0], [9.5, 165.0], [9.6, 166.0], [9.7, 167.0], [9.8, 167.0], [9.9, 168.0], [10.0, 168.0], [10.1, 169.0], [10.2, 169.0], [10.3, 170.0], [10.4, 170.0], [10.5, 171.0], [10.6, 171.0], [10.7, 172.0], [10.8, 172.0], [10.9, 173.0], [11.0, 173.0], [11.1, 174.0], [11.2, 174.0], [11.3, 175.0], [11.4, 175.0], [11.5, 176.0], [11.6, 176.0], [11.7, 176.0], [11.8, 177.0], [11.9, 177.0], [12.0, 178.0], [12.1, 179.0], [12.2, 179.0], [12.3, 180.0], [12.4, 181.0], [12.5, 181.0], [12.6, 182.0], [12.7, 182.0], [12.8, 183.0], [12.9, 183.0], [13.0, 184.0], [13.1, 185.0], [13.2, 185.0], [13.3, 186.0], [13.4, 186.0], [13.5, 186.0], [13.6, 187.0], [13.7, 188.0], [13.8, 189.0], [13.9, 190.0], [14.0, 190.0], [14.1, 191.0], [14.2, 191.0], [14.3, 192.0], [14.4, 192.0], [14.5, 193.0], [14.6, 193.0], [14.7, 194.0], [14.8, 195.0], [14.9, 195.0], [15.0, 197.0], [15.1, 197.0], [15.2, 197.0], [15.3, 198.0], [15.4, 199.0], [15.5, 199.0], [15.6, 199.0], [15.7, 199.0], [15.8, 200.0], [15.9, 201.0], [16.0, 201.0], [16.1, 202.0], [16.2, 203.0], [16.3, 204.0], [16.4, 204.0], [16.5, 205.0], [16.6, 205.0], [16.7, 205.0], [16.8, 206.0], [16.9, 207.0], [17.0, 207.0], [17.1, 208.0], [17.2, 208.0], [17.3, 208.0], [17.4, 209.0], [17.5, 209.0], [17.6, 209.0], [17.7, 210.0], [17.8, 210.0], [17.9, 211.0], [18.0, 211.0], [18.1, 212.0], [18.2, 213.0], [18.3, 213.0], [18.4, 214.0], [18.5, 215.0], [18.6, 216.0], [18.7, 216.0], [18.8, 217.0], [18.9, 217.0], [19.0, 217.0], [19.1, 218.0], [19.2, 218.0], [19.3, 219.0], [19.4, 220.0], [19.5, 220.0], [19.6, 220.0], [19.7, 221.0], [19.8, 221.0], [19.9, 222.0], [20.0, 222.0], [20.1, 223.0], [20.2, 223.0], [20.3, 224.0], [20.4, 224.0], [20.5, 224.0], [20.6, 225.0], [20.7, 225.0], [20.8, 225.0], [20.9, 226.0], [21.0, 226.0], [21.1, 226.0], [21.2, 227.0], [21.3, 227.0], [21.4, 228.0], [21.5, 229.0], [21.6, 229.0], [21.7, 230.0], [21.8, 230.0], [21.9, 231.0], [22.0, 231.0], [22.1, 232.0], [22.2, 232.0], [22.3, 233.0], [22.4, 233.0], [22.5, 233.0], [22.6, 234.0], [22.7, 235.0], [22.8, 235.0], [22.9, 236.0], [23.0, 236.0], [23.1, 236.0], [23.2, 237.0], [23.3, 237.0], [23.4, 238.0], [23.5, 238.0], [23.6, 239.0], [23.7, 239.0], [23.8, 240.0], [23.9, 241.0], [24.0, 241.0], [24.1, 242.0], [24.2, 242.0], [24.3, 243.0], [24.4, 243.0], [24.5, 244.0], [24.6, 244.0], [24.7, 245.0], [24.8, 246.0], [24.9, 246.0], [25.0, 246.0], [25.1, 247.0], [25.2, 248.0], [25.3, 248.0], [25.4, 249.0], [25.5, 249.0], [25.6, 250.0], [25.7, 250.0], [25.8, 251.0], [25.9, 252.0], [26.0, 252.0], [26.1, 253.0], [26.2, 254.0], [26.3, 254.0], [26.4, 255.0], [26.5, 255.0], [26.6, 255.0], [26.7, 256.0], [26.8, 256.0], [26.9, 256.0], [27.0, 257.0], [27.1, 258.0], [27.2, 259.0], [27.3, 259.0], [27.4, 260.0], [27.5, 260.0], [27.6, 261.0], [27.7, 262.0], [27.8, 262.0], [27.9, 263.0], [28.0, 263.0], [28.1, 263.0], [28.2, 264.0], [28.3, 264.0], [28.4, 264.0], [28.5, 265.0], [28.6, 265.0], [28.7, 266.0], [28.8, 266.0], [28.9, 267.0], [29.0, 267.0], [29.1, 267.0], [29.2, 268.0], [29.3, 269.0], [29.4, 269.0], [29.5, 269.0], [29.6, 269.0], [29.7, 270.0], [29.8, 270.0], [29.9, 271.0], [30.0, 271.0], [30.1, 271.0], [30.2, 272.0], [30.3, 272.0], [30.4, 272.0], [30.5, 272.0], [30.6, 273.0], [30.7, 273.0], [30.8, 273.0], [30.9, 274.0], [31.0, 274.0], [31.1, 275.0], [31.2, 275.0], [31.3, 276.0], [31.4, 276.0], [31.5, 277.0], [31.6, 277.0], [31.7, 278.0], [31.8, 278.0], [31.9, 278.0], [32.0, 278.0], [32.1, 279.0], [32.2, 279.0], [32.3, 280.0], [32.4, 280.0], [32.5, 280.0], [32.6, 281.0], [32.7, 281.0], [32.8, 282.0], [32.9, 282.0], [33.0, 282.0], [33.1, 282.0], [33.2, 283.0], [33.3, 283.0], [33.4, 283.0], [33.5, 283.0], [33.6, 284.0], [33.7, 284.0], [33.8, 284.0], [33.9, 285.0], [34.0, 285.0], [34.1, 285.0], [34.2, 286.0], [34.3, 286.0], [34.4, 286.0], [34.5, 287.0], [34.6, 287.0], [34.7, 287.0], [34.8, 288.0], [34.9, 288.0], [35.0, 289.0], [35.1, 290.0], [35.2, 291.0], [35.3, 291.0], [35.4, 291.0], [35.5, 292.0], [35.6, 292.0], [35.7, 293.0], [35.8, 293.0], [35.9, 294.0], [36.0, 294.0], [36.1, 294.0], [36.2, 295.0], [36.3, 295.0], [36.4, 296.0], [36.5, 296.0], [36.6, 296.0], [36.7, 297.0], [36.8, 297.0], [36.9, 297.0], [37.0, 298.0], [37.1, 298.0], [37.2, 298.0], [37.3, 299.0], [37.4, 299.0], [37.5, 300.0], [37.6, 300.0], [37.7, 300.0], [37.8, 300.0], [37.9, 301.0], [38.0, 301.0], [38.1, 302.0], [38.2, 302.0], [38.3, 302.0], [38.4, 303.0], [38.5, 304.0], [38.6, 304.0], [38.7, 305.0], [38.8, 305.0], [38.9, 306.0], [39.0, 307.0], [39.1, 307.0], [39.2, 307.0], [39.3, 307.0], [39.4, 308.0], [39.5, 309.0], [39.6, 309.0], [39.7, 309.0], [39.8, 310.0], [39.9, 310.0], [40.0, 310.0], [40.1, 311.0], [40.2, 311.0], [40.3, 311.0], [40.4, 312.0], [40.5, 312.0], [40.6, 313.0], [40.7, 313.0], [40.8, 314.0], [40.9, 314.0], [41.0, 314.0], [41.1, 315.0], [41.2, 316.0], [41.3, 316.0], [41.4, 316.0], [41.5, 316.0], [41.6, 317.0], [41.7, 317.0], [41.8, 317.0], [41.9, 318.0], [42.0, 318.0], [42.1, 319.0], [42.2, 319.0], [42.3, 319.0], [42.4, 319.0], [42.5, 319.0], [42.6, 320.0], [42.7, 321.0], [42.8, 321.0], [42.9, 321.0], [43.0, 322.0], [43.1, 322.0], [43.2, 322.0], [43.3, 322.0], [43.4, 323.0], [43.5, 324.0], [43.6, 324.0], [43.7, 324.0], [43.8, 325.0], [43.9, 325.0], [44.0, 326.0], [44.1, 326.0], [44.2, 327.0], [44.3, 328.0], [44.4, 329.0], [44.5, 329.0], [44.6, 329.0], [44.7, 329.0], [44.8, 330.0], [44.9, 330.0], [45.0, 331.0], [45.1, 331.0], [45.2, 331.0], [45.3, 332.0], [45.4, 333.0], [45.5, 333.0], [45.6, 334.0], [45.7, 334.0], [45.8, 335.0], [45.9, 335.0], [46.0, 335.0], [46.1, 336.0], [46.2, 336.0], [46.3, 336.0], [46.4, 337.0], [46.5, 337.0], [46.6, 337.0], [46.7, 338.0], [46.8, 338.0], [46.9, 338.0], [47.0, 339.0], [47.1, 339.0], [47.2, 340.0], [47.3, 340.0], [47.4, 340.0], [47.5, 341.0], [47.6, 342.0], [47.7, 342.0], [47.8, 342.0], [47.9, 343.0], [48.0, 343.0], [48.1, 344.0], [48.2, 344.0], [48.3, 345.0], [48.4, 345.0], [48.5, 345.0], [48.6, 345.0], [48.7, 346.0], [48.8, 346.0], [48.9, 347.0], [49.0, 347.0], [49.1, 347.0], [49.2, 348.0], [49.3, 348.0], [49.4, 348.0], [49.5, 349.0], [49.6, 349.0], [49.7, 349.0], [49.8, 350.0], [49.9, 350.0], [50.0, 351.0], [50.1, 352.0], [50.2, 352.0], [50.3, 353.0], [50.4, 353.0], [50.5, 354.0], [50.6, 354.0], [50.7, 354.0], [50.8, 354.0], [50.9, 355.0], [51.0, 355.0], [51.1, 355.0], [51.2, 356.0], [51.3, 356.0], [51.4, 357.0], [51.5, 357.0], [51.6, 358.0], [51.7, 358.0], [51.8, 359.0], [51.9, 360.0], [52.0, 360.0], [52.1, 360.0], [52.2, 361.0], [52.3, 361.0], [52.4, 362.0], [52.5, 362.0], [52.6, 363.0], [52.7, 363.0], [52.8, 364.0], [52.9, 364.0], [53.0, 365.0], [53.1, 365.0], [53.2, 365.0], [53.3, 366.0], [53.4, 366.0], [53.5, 367.0], [53.6, 367.0], [53.7, 368.0], [53.8, 368.0], [53.9, 368.0], [54.0, 368.0], [54.1, 369.0], [54.2, 369.0], [54.3, 369.0], [54.4, 370.0], [54.5, 370.0], [54.6, 370.0], [54.7, 371.0], [54.8, 372.0], [54.9, 372.0], [55.0, 372.0], [55.1, 373.0], [55.2, 374.0], [55.3, 374.0], [55.4, 374.0], [55.5, 375.0], [55.6, 375.0], [55.7, 375.0], [55.8, 376.0], [55.9, 376.0], [56.0, 377.0], [56.1, 378.0], [56.2, 378.0], [56.3, 379.0], [56.4, 379.0], [56.5, 380.0], [56.6, 380.0], [56.7, 381.0], [56.8, 381.0], [56.9, 382.0], [57.0, 383.0], [57.1, 383.0], [57.2, 383.0], [57.3, 384.0], [57.4, 385.0], [57.5, 385.0], [57.6, 386.0], [57.7, 386.0], [57.8, 386.0], [57.9, 387.0], [58.0, 387.0], [58.1, 388.0], [58.2, 388.0], [58.3, 388.0], [58.4, 389.0], [58.5, 390.0], [58.6, 390.0], [58.7, 391.0], [58.8, 391.0], [58.9, 392.0], [59.0, 392.0], [59.1, 393.0], [59.2, 393.0], [59.3, 393.0], [59.4, 394.0], [59.5, 395.0], [59.6, 395.0], [59.7, 396.0], [59.8, 396.0], [59.9, 397.0], [60.0, 397.0], [60.1, 398.0], [60.2, 398.0], [60.3, 398.0], [60.4, 399.0], [60.5, 400.0], [60.6, 400.0], [60.7, 401.0], [60.8, 401.0], [60.9, 402.0], [61.0, 403.0], [61.1, 403.0], [61.2, 404.0], [61.3, 404.0], [61.4, 405.0], [61.5, 405.0], [61.6, 406.0], [61.7, 406.0], [61.8, 407.0], [61.9, 408.0], [62.0, 408.0], [62.1, 410.0], [62.2, 410.0], [62.3, 411.0], [62.4, 411.0], [62.5, 412.0], [62.6, 413.0], [62.7, 414.0], [62.8, 414.0], [62.9, 414.0], [63.0, 415.0], [63.1, 415.0], [63.2, 416.0], [63.3, 416.0], [63.4, 417.0], [63.5, 417.0], [63.6, 417.0], [63.7, 418.0], [63.8, 418.0], [63.9, 419.0], [64.0, 420.0], [64.1, 420.0], [64.2, 421.0], [64.3, 422.0], [64.4, 423.0], [64.5, 424.0], [64.6, 424.0], [64.7, 425.0], [64.8, 426.0], [64.9, 426.0], [65.0, 427.0], [65.1, 428.0], [65.2, 428.0], [65.3, 428.0], [65.4, 429.0], [65.5, 430.0], [65.6, 430.0], [65.7, 431.0], [65.8, 431.0], [65.9, 432.0], [66.0, 433.0], [66.1, 434.0], [66.2, 434.0], [66.3, 435.0], [66.4, 436.0], [66.5, 436.0], [66.6, 437.0], [66.7, 437.0], [66.8, 438.0], [66.9, 439.0], [67.0, 439.0], [67.1, 441.0], [67.2, 441.0], [67.3, 441.0], [67.4, 442.0], [67.5, 443.0], [67.6, 443.0], [67.7, 444.0], [67.8, 445.0], [67.9, 446.0], [68.0, 447.0], [68.1, 447.0], [68.2, 447.0], [68.3, 448.0], [68.4, 448.0], [68.5, 448.0], [68.6, 449.0], [68.7, 449.0], [68.8, 450.0], [68.9, 451.0], [69.0, 451.0], [69.1, 451.0], [69.2, 453.0], [69.3, 453.0], [69.4, 454.0], [69.5, 455.0], [69.6, 456.0], [69.7, 456.0], [69.8, 457.0], [69.9, 457.0], [70.0, 458.0], [70.1, 458.0], [70.2, 459.0], [70.3, 459.0], [70.4, 460.0], [70.5, 461.0], [70.6, 462.0], [70.7, 462.0], [70.8, 462.0], [70.9, 463.0], [71.0, 464.0], [71.1, 464.0], [71.2, 465.0], [71.3, 466.0], [71.4, 466.0], [71.5, 467.0], [71.6, 467.0], [71.7, 468.0], [71.8, 468.0], [71.9, 470.0], [72.0, 471.0], [72.1, 472.0], [72.2, 472.0], [72.3, 473.0], [72.4, 473.0], [72.5, 474.0], [72.6, 474.0], [72.7, 474.0], [72.8, 475.0], [72.9, 476.0], [73.0, 476.0], [73.1, 477.0], [73.2, 479.0], [73.3, 479.0], [73.4, 480.0], [73.5, 481.0], [73.6, 481.0], [73.7, 482.0], [73.8, 483.0], [73.9, 484.0], [74.0, 484.0], [74.1, 485.0], [74.2, 486.0], [74.3, 487.0], [74.4, 488.0], [74.5, 488.0], [74.6, 489.0], [74.7, 489.0], [74.8, 490.0], [74.9, 491.0], [75.0, 491.0], [75.1, 492.0], [75.2, 493.0], [75.3, 494.0], [75.4, 495.0], [75.5, 496.0], [75.6, 496.0], [75.7, 497.0], [75.8, 499.0], [75.9, 499.0], [76.0, 500.0], [76.1, 502.0], [76.2, 503.0], [76.3, 504.0], [76.4, 505.0], [76.5, 505.0], [76.6, 506.0], [76.7, 506.0], [76.8, 507.0], [76.9, 508.0], [77.0, 508.0], [77.1, 509.0], [77.2, 510.0], [77.3, 511.0], [77.4, 512.0], [77.5, 513.0], [77.6, 514.0], [77.7, 515.0], [77.8, 516.0], [77.9, 517.0], [78.0, 519.0], [78.1, 520.0], [78.2, 520.0], [78.3, 521.0], [78.4, 523.0], [78.5, 524.0], [78.6, 525.0], [78.7, 526.0], [78.8, 527.0], [78.9, 527.0], [79.0, 528.0], [79.1, 529.0], [79.2, 529.0], [79.3, 530.0], [79.4, 531.0], [79.5, 531.0], [79.6, 531.0], [79.7, 532.0], [79.8, 533.0], [79.9, 535.0], [80.0, 536.0], [80.1, 537.0], [80.2, 538.0], [80.3, 539.0], [80.4, 539.0], [80.5, 540.0], [80.6, 541.0], [80.7, 542.0], [80.8, 544.0], [80.9, 545.0], [81.0, 546.0], [81.1, 548.0], [81.2, 550.0], [81.3, 551.0], [81.4, 552.0], [81.5, 553.0], [81.6, 554.0], [81.7, 555.0], [81.8, 557.0], [81.9, 557.0], [82.0, 558.0], [82.1, 559.0], [82.2, 560.0], [82.3, 561.0], [82.4, 562.0], [82.5, 563.0], [82.6, 564.0], [82.7, 565.0], [82.8, 566.0], [82.9, 567.0], [83.0, 568.0], [83.1, 569.0], [83.2, 570.0], [83.3, 570.0], [83.4, 572.0], [83.5, 574.0], [83.6, 575.0], [83.7, 577.0], [83.8, 578.0], [83.9, 579.0], [84.0, 580.0], [84.1, 581.0], [84.2, 583.0], [84.3, 584.0], [84.4, 585.0], [84.5, 586.0], [84.6, 587.0], [84.7, 589.0], [84.8, 590.0], [84.9, 591.0], [85.0, 593.0], [85.1, 593.0], [85.2, 594.0], [85.3, 596.0], [85.4, 599.0], [85.5, 600.0], [85.6, 601.0], [85.7, 603.0], [85.8, 605.0], [85.9, 606.0], [86.0, 608.0], [86.1, 610.0], [86.2, 613.0], [86.3, 614.0], [86.4, 616.0], [86.5, 617.0], [86.6, 618.0], [86.7, 619.0], [86.8, 620.0], [86.9, 622.0], [87.0, 624.0], [87.1, 626.0], [87.2, 628.0], [87.3, 629.0], [87.4, 631.0], [87.5, 635.0], [87.6, 637.0], [87.7, 637.0], [87.8, 639.0], [87.9, 642.0], [88.0, 644.0], [88.1, 646.0], [88.2, 647.0], [88.3, 648.0], [88.4, 651.0], [88.5, 652.0], [88.6, 655.0], [88.7, 656.0], [88.8, 659.0], [88.9, 661.0], [89.0, 664.0], [89.1, 667.0], [89.2, 671.0], [89.3, 673.0], [89.4, 677.0], [89.5, 679.0], [89.6, 680.0], [89.7, 681.0], [89.8, 685.0], [89.9, 687.0], [90.0, 691.0], [90.1, 696.0], [90.2, 698.0], [90.3, 701.0], [90.4, 704.0], [90.5, 707.0], [90.6, 712.0], [90.7, 717.0], [90.8, 720.0], [90.9, 723.0], [91.0, 727.0], [91.1, 730.0], [91.2, 732.0], [91.3, 734.0], [91.4, 736.0], [91.5, 738.0], [91.6, 741.0], [91.7, 744.0], [91.8, 750.0], [91.9, 755.0], [92.0, 761.0], [92.1, 763.0], [92.2, 767.0], [92.3, 770.0], [92.4, 773.0], [92.5, 777.0], [92.6, 787.0], [92.7, 793.0], [92.8, 797.0], [92.9, 801.0], [93.0, 808.0], [93.1, 813.0], [93.2, 818.0], [93.3, 821.0], [93.4, 825.0], [93.5, 829.0], [93.6, 833.0], [93.7, 838.0], [93.8, 845.0], [93.9, 858.0], [94.0, 868.0], [94.1, 872.0], [94.2, 879.0], [94.3, 893.0], [94.4, 905.0], [94.5, 907.0], [94.6, 915.0], [94.7, 919.0], [94.8, 925.0], [94.9, 937.0], [95.0, 945.0], [95.1, 952.0], [95.2, 960.0], [95.3, 974.0], [95.4, 987.0], [95.5, 992.0], [95.6, 1013.0], [95.7, 1024.0], [95.8, 1044.0], [95.9, 1078.0], [96.0, 1089.0], [96.1, 1096.0], [96.2, 1125.0], [96.3, 1133.0], [96.4, 1165.0], [96.5, 1173.0], [96.6, 1198.0], [96.7, 1215.0], [96.8, 1226.0], [96.9, 1246.0], [97.0, 1280.0], [97.1, 1292.0], [97.2, 1311.0], [97.3, 1325.0], [97.4, 1343.0], [97.5, 1381.0], [97.6, 1396.0], [97.7, 1415.0], [97.8, 1440.0], [97.9, 1472.0], [98.0, 1527.0], [98.1, 1567.0], [98.2, 1648.0], [98.3, 1686.0], [98.4, 1715.0], [98.5, 1747.0], [98.6, 1804.0], [98.7, 1862.0], [98.8, 1927.0], [98.9, 2042.0], [99.0, 2218.0], [99.1, 2267.0], [99.2, 2352.0], [99.3, 2522.0], [99.4, 2913.0], [99.5, 3246.0], [99.6, 3844.0], [99.7, 4226.0], [99.8, 4649.0], [99.9, 5789.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1193.0, "series": [{"data": [[0.0, 188.0], [600.0, 248.0], [700.0, 137.0], [800.0, 74.0], [900.0, 64.0], [1000.0, 30.0], [1100.0, 25.0], [1200.0, 28.0], [1300.0, 25.0], [1400.0, 17.0], [1500.0, 10.0], [100.0, 628.0], [1600.0, 9.0], [1700.0, 14.0], [1800.0, 9.0], [1900.0, 6.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 9.0], [2300.0, 4.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 4.0], [200.0, 1130.0], [3300.0, 1.0], [3200.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 2.0], [4200.0, 3.0], [4300.0, 2.0], [4600.0, 2.0], [300.0, 1193.0], [4900.0, 2.0], [5300.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [400.0, 803.0], [6700.0, 1.0], [7500.0, 2.0], [7600.0, 1.0], [500.0, 494.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 106.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3945.0, "series": [{"data": [[0.0, 3945.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1139.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 106.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.95992876224399, "minX": 1.60284948E12, "maxY": 10.0, "series": [{"data": [[1.6028496E12, 10.0], [1.60284966E12, 9.95992876224399], [1.60284948E12, 9.998420221169045], [1.60284954E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284966E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.0, "minX": 1.0, "maxY": 663.0, "series": [{"data": [[8.0, 663.0], [4.0, 273.0], [2.0, 288.0], [1.0, 521.0], [9.0, 501.0], [10.0, 436.18166023165907], [5.0, 321.0], [6.0, 285.0], [3.0, 294.0], [7.0, 274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 436.1279383429672]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7785.166666666667, "minX": 1.60284948E12, "maxY": 1.00991567E7, "series": [{"data": [[1.6028496E12, 9452569.416666666], [1.60284966E12, 7401508.5], [1.60284948E12, 9024264.383333333], [1.60284954E12, 1.00991567E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6028496E12, 9033.7], [1.60284966E12, 7785.166666666667], [1.60284948E12, 8379.55], [1.60284954E12, 9945.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284966E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 414.88133240805, "minX": 1.60284948E12, "maxY": 471.0236966824647, "series": [{"data": [[1.6028496E12, 440.0367647058827], [1.60284966E12, 419.3178984861976], [1.60284948E12, 471.0236966824647], [1.60284954E12, 414.88133240805]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284966E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 410.70645385149237, "minX": 1.60284948E12, "maxY": 466.70537124802513, "series": [{"data": [[1.6028496E12, 436.3595588235296], [1.60284966E12, 415.7061442564559], [1.60284948E12, 466.70537124802513], [1.60284954E12, 410.70645385149237]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284966E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003469812630117975, "minX": 1.60284948E12, "maxY": 0.09794628751974739, "series": [{"data": [[1.6028496E12, 0.022058823529411818], [1.60284966E12, 0.008904719501335718], [1.60284948E12, 0.09794628751974739], [1.60284954E12, 0.003469812630117975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284966E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60284948E12, "maxY": 7622.0, "series": [{"data": [[1.6028496E12, 4987.0], [1.60284966E12, 7547.0], [1.60284948E12, 7550.0], [1.60284954E12, 7622.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6028496E12, 19.0], [1.60284966E12, 23.159997320175172], [1.60284948E12, 20.40299969792366], [1.60284954E12, 24.933998968601223]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6028496E12, 19.473900129795076], [1.60284966E12, 32.12760010719299], [1.60284948E12, 21.0], [1.60284954E12, 26.275800137519838]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6028496E12, 19.0], [1.60284966E12, 28.77999866008758], [1.60284948E12, 21.0], [1.60284954E12, 25.698999828100206]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6028496E12, 13.0], [1.60284966E12, 2.0], [1.60284948E12, 13.0], [1.60284954E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6028496E12, 352.0], [1.60284966E12, 347.0], [1.60284948E12, 345.0], [1.60284954E12, 360.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284966E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 2.0, "maxY": 3798.0, "series": [{"data": [[33.0, 276.5], [2.0, 2112.0], [32.0, 274.0], [34.0, 296.0], [35.0, 229.5], [36.0, 216.5], [38.0, 206.0], [4.0, 3798.0], [5.0, 3267.0], [6.0, 307.5], [7.0, 288.0], [8.0, 241.0], [9.0, 729.5], [10.0, 539.5], [11.0, 571.5], [12.0, 446.5], [13.0, 373.0], [14.0, 623.0], [15.0, 492.0], [16.0, 441.5], [17.0, 290.5], [18.0, 405.5], [19.0, 396.5], [20.0, 404.0], [21.0, 399.0], [22.0, 399.0], [23.0, 377.0], [24.0, 388.0], [25.0, 369.0], [26.0, 358.5], [27.0, 351.5], [28.0, 307.5], [29.0, 311.0], [30.0, 310.5], [31.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 205.0, "minX": 2.0, "maxY": 3796.0, "series": [{"data": [[33.0, 275.0], [2.0, 2110.0], [32.0, 273.5], [34.0, 293.5], [35.0, 229.0], [36.0, 215.5], [38.0, 205.0], [4.0, 3796.0], [5.0, 3256.0], [6.0, 307.0], [7.0, 285.0], [8.0, 240.5], [9.0, 722.5], [10.0, 531.5], [11.0, 559.5], [12.0, 435.5], [13.0, 369.0], [14.0, 621.5], [15.0, 491.0], [16.0, 439.0], [17.0, 290.0], [18.0, 401.0], [19.0, 391.0], [20.0, 401.0], [21.0, 397.0], [22.0, 388.0], [23.0, 371.0], [24.0, 383.5], [25.0, 366.0], [26.0, 354.0], [27.0, 348.0], [28.0, 306.0], [29.0, 307.0], [30.0, 308.0], [31.0, 297.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60284942E12, "maxY": 24.016666666666666, "series": [{"data": [[1.6028496E12, 22.666666666666668], [1.60284966E12, 18.55], [1.60284948E12, 21.15], [1.60284954E12, 24.016666666666666], [1.60284942E12, 0.11666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284966E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.716666666666665, "minX": 1.60284948E12, "maxY": 24.016666666666666, "series": [{"data": [[1.6028496E12, 22.666666666666668], [1.60284966E12, 18.716666666666665], [1.60284948E12, 21.1], [1.60284954E12, 24.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60284966E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.716666666666665, "minX": 1.60284948E12, "maxY": 24.016666666666666, "series": [{"data": [[1.6028496E12, 22.666666666666668], [1.60284966E12, 18.716666666666665], [1.60284948E12, 21.1], [1.60284954E12, 24.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284966E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.716666666666665, "minX": 1.60284948E12, "maxY": 24.016666666666666, "series": [{"data": [[1.6028496E12, 22.666666666666668], [1.60284966E12, 18.716666666666665], [1.60284948E12, 21.1], [1.60284954E12, 24.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60284966E12, "title": "Total Transactions Per Second"}},
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

