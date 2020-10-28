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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 6736.0, "series": [{"data": [[0.0, 3.0], [0.1, 7.0], [0.2, 10.0], [0.3, 12.0], [0.4, 13.0], [0.5, 13.0], [0.6, 13.0], [0.7, 13.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 17.0], [1.2, 19.0], [1.3, 20.0], [1.4, 24.0], [1.5, 26.0], [1.6, 27.0], [1.7, 28.0], [1.8, 28.0], [1.9, 32.0], [2.0, 34.0], [2.1, 35.0], [2.2, 38.0], [2.3, 43.0], [2.4, 45.0], [2.5, 47.0], [2.6, 53.0], [2.7, 58.0], [2.8, 61.0], [2.9, 65.0], [3.0, 68.0], [3.1, 73.0], [3.2, 77.0], [3.3, 79.0], [3.4, 83.0], [3.5, 91.0], [3.6, 94.0], [3.7, 103.0], [3.8, 107.0], [3.9, 110.0], [4.0, 115.0], [4.1, 120.0], [4.2, 121.0], [4.3, 124.0], [4.4, 125.0], [4.5, 126.0], [4.6, 127.0], [4.7, 130.0], [4.8, 132.0], [4.9, 133.0], [5.0, 133.0], [5.1, 134.0], [5.2, 135.0], [5.3, 135.0], [5.4, 136.0], [5.5, 137.0], [5.6, 138.0], [5.7, 138.0], [5.8, 139.0], [5.9, 140.0], [6.0, 140.0], [6.1, 141.0], [6.2, 141.0], [6.3, 142.0], [6.4, 142.0], [6.5, 143.0], [6.6, 144.0], [6.7, 144.0], [6.8, 145.0], [6.9, 147.0], [7.0, 147.0], [7.1, 148.0], [7.2, 148.0], [7.3, 149.0], [7.4, 150.0], [7.5, 150.0], [7.6, 151.0], [7.7, 151.0], [7.8, 152.0], [7.9, 153.0], [8.0, 153.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 155.0], [8.5, 155.0], [8.6, 156.0], [8.7, 156.0], [8.8, 156.0], [8.9, 157.0], [9.0, 157.0], [9.1, 158.0], [9.2, 158.0], [9.3, 158.0], [9.4, 159.0], [9.5, 160.0], [9.6, 160.0], [9.7, 160.0], [9.8, 161.0], [9.9, 162.0], [10.0, 162.0], [10.1, 163.0], [10.2, 163.0], [10.3, 164.0], [10.4, 164.0], [10.5, 165.0], [10.6, 165.0], [10.7, 166.0], [10.8, 166.0], [10.9, 167.0], [11.0, 167.0], [11.1, 168.0], [11.2, 169.0], [11.3, 169.0], [11.4, 170.0], [11.5, 170.0], [11.6, 171.0], [11.7, 171.0], [11.8, 172.0], [11.9, 172.0], [12.0, 172.0], [12.1, 173.0], [12.2, 174.0], [12.3, 174.0], [12.4, 174.0], [12.5, 175.0], [12.6, 175.0], [12.7, 176.0], [12.8, 177.0], [12.9, 178.0], [13.0, 178.0], [13.1, 179.0], [13.2, 179.0], [13.3, 179.0], [13.4, 180.0], [13.5, 180.0], [13.6, 181.0], [13.7, 181.0], [13.8, 182.0], [13.9, 182.0], [14.0, 182.0], [14.1, 183.0], [14.2, 183.0], [14.3, 184.0], [14.4, 184.0], [14.5, 185.0], [14.6, 185.0], [14.7, 186.0], [14.8, 186.0], [14.9, 186.0], [15.0, 187.0], [15.1, 187.0], [15.2, 187.0], [15.3, 188.0], [15.4, 189.0], [15.5, 189.0], [15.6, 190.0], [15.7, 190.0], [15.8, 191.0], [15.9, 192.0], [16.0, 192.0], [16.1, 193.0], [16.2, 193.0], [16.3, 194.0], [16.4, 194.0], [16.5, 194.0], [16.6, 195.0], [16.7, 195.0], [16.8, 196.0], [16.9, 196.0], [17.0, 197.0], [17.1, 197.0], [17.2, 197.0], [17.3, 198.0], [17.4, 198.0], [17.5, 199.0], [17.6, 199.0], [17.7, 200.0], [17.8, 200.0], [17.9, 201.0], [18.0, 202.0], [18.1, 202.0], [18.2, 203.0], [18.3, 203.0], [18.4, 203.0], [18.5, 204.0], [18.6, 204.0], [18.7, 205.0], [18.8, 205.0], [18.9, 206.0], [19.0, 206.0], [19.1, 206.0], [19.2, 207.0], [19.3, 207.0], [19.4, 208.0], [19.5, 208.0], [19.6, 208.0], [19.7, 209.0], [19.8, 209.0], [19.9, 210.0], [20.0, 210.0], [20.1, 210.0], [20.2, 211.0], [20.3, 212.0], [20.4, 212.0], [20.5, 213.0], [20.6, 213.0], [20.7, 214.0], [20.8, 215.0], [20.9, 215.0], [21.0, 216.0], [21.1, 216.0], [21.2, 217.0], [21.3, 217.0], [21.4, 217.0], [21.5, 218.0], [21.6, 219.0], [21.7, 219.0], [21.8, 219.0], [21.9, 220.0], [22.0, 220.0], [22.1, 221.0], [22.2, 221.0], [22.3, 222.0], [22.4, 222.0], [22.5, 222.0], [22.6, 223.0], [22.7, 223.0], [22.8, 223.0], [22.9, 223.0], [23.0, 224.0], [23.1, 224.0], [23.2, 225.0], [23.3, 225.0], [23.4, 226.0], [23.5, 226.0], [23.6, 227.0], [23.7, 227.0], [23.8, 227.0], [23.9, 227.0], [24.0, 228.0], [24.1, 229.0], [24.2, 229.0], [24.3, 230.0], [24.4, 230.0], [24.5, 231.0], [24.6, 231.0], [24.7, 231.0], [24.8, 232.0], [24.9, 232.0], [25.0, 233.0], [25.1, 233.0], [25.2, 233.0], [25.3, 234.0], [25.4, 234.0], [25.5, 235.0], [25.6, 235.0], [25.7, 236.0], [25.8, 236.0], [25.9, 236.0], [26.0, 237.0], [26.1, 237.0], [26.2, 238.0], [26.3, 238.0], [26.4, 239.0], [26.5, 239.0], [26.6, 239.0], [26.7, 239.0], [26.8, 240.0], [26.9, 240.0], [27.0, 241.0], [27.1, 242.0], [27.2, 242.0], [27.3, 242.0], [27.4, 243.0], [27.5, 243.0], [27.6, 244.0], [27.7, 244.0], [27.8, 245.0], [27.9, 245.0], [28.0, 246.0], [28.1, 246.0], [28.2, 247.0], [28.3, 247.0], [28.4, 247.0], [28.5, 248.0], [28.6, 248.0], [28.7, 249.0], [28.8, 249.0], [28.9, 249.0], [29.0, 250.0], [29.1, 250.0], [29.2, 251.0], [29.3, 251.0], [29.4, 252.0], [29.5, 253.0], [29.6, 253.0], [29.7, 254.0], [29.8, 254.0], [29.9, 255.0], [30.0, 255.0], [30.1, 255.0], [30.2, 256.0], [30.3, 256.0], [30.4, 257.0], [30.5, 257.0], [30.6, 257.0], [30.7, 258.0], [30.8, 258.0], [30.9, 258.0], [31.0, 259.0], [31.1, 259.0], [31.2, 259.0], [31.3, 260.0], [31.4, 260.0], [31.5, 260.0], [31.6, 261.0], [31.7, 261.0], [31.8, 262.0], [31.9, 262.0], [32.0, 263.0], [32.1, 263.0], [32.2, 263.0], [32.3, 264.0], [32.4, 264.0], [32.5, 265.0], [32.6, 265.0], [32.7, 266.0], [32.8, 266.0], [32.9, 266.0], [33.0, 267.0], [33.1, 267.0], [33.2, 267.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 269.0], [33.7, 269.0], [33.8, 270.0], [33.9, 270.0], [34.0, 270.0], [34.1, 271.0], [34.2, 271.0], [34.3, 272.0], [34.4, 272.0], [34.5, 273.0], [34.6, 273.0], [34.7, 273.0], [34.8, 274.0], [34.9, 274.0], [35.0, 274.0], [35.1, 275.0], [35.2, 275.0], [35.3, 276.0], [35.4, 276.0], [35.5, 276.0], [35.6, 276.0], [35.7, 277.0], [35.8, 277.0], [35.9, 278.0], [36.0, 278.0], [36.1, 279.0], [36.2, 279.0], [36.3, 279.0], [36.4, 280.0], [36.5, 280.0], [36.6, 280.0], [36.7, 281.0], [36.8, 281.0], [36.9, 281.0], [37.0, 282.0], [37.1, 282.0], [37.2, 282.0], [37.3, 283.0], [37.4, 283.0], [37.5, 283.0], [37.6, 284.0], [37.7, 284.0], [37.8, 284.0], [37.9, 285.0], [38.0, 285.0], [38.1, 286.0], [38.2, 286.0], [38.3, 286.0], [38.4, 287.0], [38.5, 287.0], [38.6, 287.0], [38.7, 287.0], [38.8, 288.0], [38.9, 288.0], [39.0, 289.0], [39.1, 289.0], [39.2, 289.0], [39.3, 290.0], [39.4, 290.0], [39.5, 291.0], [39.6, 291.0], [39.7, 292.0], [39.8, 292.0], [39.9, 292.0], [40.0, 293.0], [40.1, 293.0], [40.2, 294.0], [40.3, 294.0], [40.4, 294.0], [40.5, 295.0], [40.6, 295.0], [40.7, 296.0], [40.8, 297.0], [40.9, 297.0], [41.0, 297.0], [41.1, 298.0], [41.2, 298.0], [41.3, 298.0], [41.4, 298.0], [41.5, 299.0], [41.6, 299.0], [41.7, 299.0], [41.8, 300.0], [41.9, 300.0], [42.0, 300.0], [42.1, 301.0], [42.2, 301.0], [42.3, 302.0], [42.4, 302.0], [42.5, 302.0], [42.6, 302.0], [42.7, 303.0], [42.8, 304.0], [42.9, 304.0], [43.0, 305.0], [43.1, 305.0], [43.2, 305.0], [43.3, 306.0], [43.4, 306.0], [43.5, 306.0], [43.6, 307.0], [43.7, 307.0], [43.8, 307.0], [43.9, 308.0], [44.0, 308.0], [44.1, 308.0], [44.2, 309.0], [44.3, 310.0], [44.4, 310.0], [44.5, 310.0], [44.6, 311.0], [44.7, 311.0], [44.8, 312.0], [44.9, 312.0], [45.0, 312.0], [45.1, 313.0], [45.2, 313.0], [45.3, 314.0], [45.4, 314.0], [45.5, 315.0], [45.6, 315.0], [45.7, 315.0], [45.8, 316.0], [45.9, 316.0], [46.0, 316.0], [46.1, 317.0], [46.2, 317.0], [46.3, 317.0], [46.4, 318.0], [46.5, 318.0], [46.6, 318.0], [46.7, 319.0], [46.8, 320.0], [46.9, 320.0], [47.0, 320.0], [47.1, 321.0], [47.2, 321.0], [47.3, 322.0], [47.4, 322.0], [47.5, 323.0], [47.6, 323.0], [47.7, 323.0], [47.8, 324.0], [47.9, 324.0], [48.0, 324.0], [48.1, 324.0], [48.2, 325.0], [48.3, 325.0], [48.4, 326.0], [48.5, 327.0], [48.6, 327.0], [48.7, 327.0], [48.8, 328.0], [48.9, 329.0], [49.0, 329.0], [49.1, 329.0], [49.2, 330.0], [49.3, 330.0], [49.4, 330.0], [49.5, 331.0], [49.6, 331.0], [49.7, 331.0], [49.8, 332.0], [49.9, 332.0], [50.0, 332.0], [50.1, 333.0], [50.2, 333.0], [50.3, 333.0], [50.4, 334.0], [50.5, 334.0], [50.6, 335.0], [50.7, 335.0], [50.8, 335.0], [50.9, 335.0], [51.0, 336.0], [51.1, 336.0], [51.2, 337.0], [51.3, 337.0], [51.4, 337.0], [51.5, 338.0], [51.6, 338.0], [51.7, 339.0], [51.8, 339.0], [51.9, 339.0], [52.0, 340.0], [52.1, 340.0], [52.2, 341.0], [52.3, 341.0], [52.4, 342.0], [52.5, 342.0], [52.6, 342.0], [52.7, 343.0], [52.8, 343.0], [52.9, 343.0], [53.0, 344.0], [53.1, 344.0], [53.2, 345.0], [53.3, 345.0], [53.4, 346.0], [53.5, 346.0], [53.6, 346.0], [53.7, 347.0], [53.8, 347.0], [53.9, 347.0], [54.0, 348.0], [54.1, 348.0], [54.2, 349.0], [54.3, 349.0], [54.4, 349.0], [54.5, 350.0], [54.6, 350.0], [54.7, 350.0], [54.8, 351.0], [54.9, 351.0], [55.0, 352.0], [55.1, 352.0], [55.2, 353.0], [55.3, 353.0], [55.4, 353.0], [55.5, 354.0], [55.6, 354.0], [55.7, 354.0], [55.8, 355.0], [55.9, 356.0], [56.0, 357.0], [56.1, 357.0], [56.2, 358.0], [56.3, 358.0], [56.4, 359.0], [56.5, 359.0], [56.6, 360.0], [56.7, 360.0], [56.8, 360.0], [56.9, 361.0], [57.0, 361.0], [57.1, 362.0], [57.2, 363.0], [57.3, 363.0], [57.4, 364.0], [57.5, 364.0], [57.6, 364.0], [57.7, 365.0], [57.8, 365.0], [57.9, 365.0], [58.0, 366.0], [58.1, 366.0], [58.2, 366.0], [58.3, 367.0], [58.4, 367.0], [58.5, 368.0], [58.6, 368.0], [58.7, 368.0], [58.8, 369.0], [58.9, 369.0], [59.0, 370.0], [59.1, 370.0], [59.2, 370.0], [59.3, 370.0], [59.4, 371.0], [59.5, 371.0], [59.6, 372.0], [59.7, 372.0], [59.8, 373.0], [59.9, 373.0], [60.0, 374.0], [60.1, 375.0], [60.2, 375.0], [60.3, 375.0], [60.4, 375.0], [60.5, 376.0], [60.6, 376.0], [60.7, 377.0], [60.8, 377.0], [60.9, 378.0], [61.0, 378.0], [61.1, 379.0], [61.2, 380.0], [61.3, 380.0], [61.4, 380.0], [61.5, 381.0], [61.6, 382.0], [61.7, 382.0], [61.8, 382.0], [61.9, 383.0], [62.0, 383.0], [62.1, 384.0], [62.2, 384.0], [62.3, 385.0], [62.4, 385.0], [62.5, 386.0], [62.6, 386.0], [62.7, 387.0], [62.8, 387.0], [62.9, 388.0], [63.0, 388.0], [63.1, 389.0], [63.2, 389.0], [63.3, 390.0], [63.4, 390.0], [63.5, 391.0], [63.6, 391.0], [63.7, 392.0], [63.8, 393.0], [63.9, 393.0], [64.0, 394.0], [64.1, 395.0], [64.2, 395.0], [64.3, 396.0], [64.4, 397.0], [64.5, 397.0], [64.6, 398.0], [64.7, 398.0], [64.8, 399.0], [64.9, 399.0], [65.0, 400.0], [65.1, 400.0], [65.2, 401.0], [65.3, 401.0], [65.4, 402.0], [65.5, 402.0], [65.6, 402.0], [65.7, 403.0], [65.8, 404.0], [65.9, 404.0], [66.0, 404.0], [66.1, 405.0], [66.2, 405.0], [66.3, 406.0], [66.4, 406.0], [66.5, 407.0], [66.6, 407.0], [66.7, 407.0], [66.8, 408.0], [66.9, 408.0], [67.0, 409.0], [67.1, 409.0], [67.2, 409.0], [67.3, 410.0], [67.4, 411.0], [67.5, 412.0], [67.6, 412.0], [67.7, 413.0], [67.8, 414.0], [67.9, 415.0], [68.0, 416.0], [68.1, 417.0], [68.2, 418.0], [68.3, 419.0], [68.4, 419.0], [68.5, 420.0], [68.6, 421.0], [68.7, 421.0], [68.8, 422.0], [68.9, 423.0], [69.0, 423.0], [69.1, 424.0], [69.2, 424.0], [69.3, 425.0], [69.4, 425.0], [69.5, 426.0], [69.6, 427.0], [69.7, 428.0], [69.8, 429.0], [69.9, 429.0], [70.0, 430.0], [70.1, 431.0], [70.2, 431.0], [70.3, 431.0], [70.4, 432.0], [70.5, 432.0], [70.6, 433.0], [70.7, 433.0], [70.8, 434.0], [70.9, 434.0], [71.0, 434.0], [71.1, 435.0], [71.2, 436.0], [71.3, 436.0], [71.4, 436.0], [71.5, 437.0], [71.6, 437.0], [71.7, 438.0], [71.8, 439.0], [71.9, 439.0], [72.0, 439.0], [72.1, 440.0], [72.2, 441.0], [72.3, 441.0], [72.4, 442.0], [72.5, 443.0], [72.6, 443.0], [72.7, 444.0], [72.8, 444.0], [72.9, 445.0], [73.0, 446.0], [73.1, 446.0], [73.2, 446.0], [73.3, 447.0], [73.4, 448.0], [73.5, 448.0], [73.6, 450.0], [73.7, 450.0], [73.8, 451.0], [73.9, 451.0], [74.0, 452.0], [74.1, 453.0], [74.2, 453.0], [74.3, 454.0], [74.4, 454.0], [74.5, 455.0], [74.6, 455.0], [74.7, 456.0], [74.8, 457.0], [74.9, 458.0], [75.0, 459.0], [75.1, 459.0], [75.2, 460.0], [75.3, 461.0], [75.4, 462.0], [75.5, 463.0], [75.6, 464.0], [75.7, 464.0], [75.8, 465.0], [75.9, 465.0], [76.0, 466.0], [76.1, 467.0], [76.2, 467.0], [76.3, 468.0], [76.4, 469.0], [76.5, 470.0], [76.6, 471.0], [76.7, 472.0], [76.8, 472.0], [76.9, 472.0], [77.0, 473.0], [77.1, 473.0], [77.2, 474.0], [77.3, 475.0], [77.4, 476.0], [77.5, 477.0], [77.6, 478.0], [77.7, 480.0], [77.8, 481.0], [77.9, 482.0], [78.0, 483.0], [78.1, 483.0], [78.2, 484.0], [78.3, 485.0], [78.4, 487.0], [78.5, 488.0], [78.6, 489.0], [78.7, 490.0], [78.8, 490.0], [78.9, 491.0], [79.0, 493.0], [79.1, 493.0], [79.2, 494.0], [79.3, 496.0], [79.4, 497.0], [79.5, 498.0], [79.6, 500.0], [79.7, 500.0], [79.8, 501.0], [79.9, 502.0], [80.0, 504.0], [80.1, 505.0], [80.2, 505.0], [80.3, 506.0], [80.4, 507.0], [80.5, 508.0], [80.6, 509.0], [80.7, 509.0], [80.8, 510.0], [80.9, 511.0], [81.0, 513.0], [81.1, 514.0], [81.2, 515.0], [81.3, 517.0], [81.4, 518.0], [81.5, 518.0], [81.6, 519.0], [81.7, 521.0], [81.8, 522.0], [81.9, 523.0], [82.0, 524.0], [82.1, 525.0], [82.2, 527.0], [82.3, 527.0], [82.4, 528.0], [82.5, 529.0], [82.6, 530.0], [82.7, 531.0], [82.8, 532.0], [82.9, 532.0], [83.0, 533.0], [83.1, 535.0], [83.2, 536.0], [83.3, 538.0], [83.4, 539.0], [83.5, 540.0], [83.6, 541.0], [83.7, 544.0], [83.8, 545.0], [83.9, 546.0], [84.0, 546.0], [84.1, 548.0], [84.2, 549.0], [84.3, 550.0], [84.4, 551.0], [84.5, 552.0], [84.6, 553.0], [84.7, 554.0], [84.8, 555.0], [84.9, 555.0], [85.0, 557.0], [85.1, 558.0], [85.2, 560.0], [85.3, 561.0], [85.4, 562.0], [85.5, 563.0], [85.6, 565.0], [85.7, 566.0], [85.8, 567.0], [85.9, 567.0], [86.0, 569.0], [86.1, 570.0], [86.2, 571.0], [86.3, 573.0], [86.4, 576.0], [86.5, 576.0], [86.6, 579.0], [86.7, 581.0], [86.8, 582.0], [86.9, 583.0], [87.0, 584.0], [87.1, 586.0], [87.2, 587.0], [87.3, 589.0], [87.4, 591.0], [87.5, 592.0], [87.6, 595.0], [87.7, 597.0], [87.8, 599.0], [87.9, 602.0], [88.0, 604.0], [88.1, 608.0], [88.2, 609.0], [88.3, 610.0], [88.4, 611.0], [88.5, 613.0], [88.6, 618.0], [88.7, 622.0], [88.8, 626.0], [88.9, 628.0], [89.0, 629.0], [89.1, 630.0], [89.2, 633.0], [89.3, 636.0], [89.4, 636.0], [89.5, 642.0], [89.6, 643.0], [89.7, 645.0], [89.8, 646.0], [89.9, 648.0], [90.0, 650.0], [90.1, 652.0], [90.2, 653.0], [90.3, 654.0], [90.4, 656.0], [90.5, 657.0], [90.6, 662.0], [90.7, 664.0], [90.8, 666.0], [90.9, 667.0], [91.0, 669.0], [91.1, 675.0], [91.2, 677.0], [91.3, 680.0], [91.4, 682.0], [91.5, 687.0], [91.6, 689.0], [91.7, 692.0], [91.8, 694.0], [91.9, 698.0], [92.0, 700.0], [92.1, 703.0], [92.2, 709.0], [92.3, 711.0], [92.4, 716.0], [92.5, 720.0], [92.6, 725.0], [92.7, 732.0], [92.8, 738.0], [92.9, 742.0], [93.0, 748.0], [93.1, 753.0], [93.2, 761.0], [93.3, 768.0], [93.4, 774.0], [93.5, 777.0], [93.6, 786.0], [93.7, 793.0], [93.8, 801.0], [93.9, 804.0], [94.0, 808.0], [94.1, 813.0], [94.2, 816.0], [94.3, 826.0], [94.4, 829.0], [94.5, 848.0], [94.6, 857.0], [94.7, 867.0], [94.8, 879.0], [94.9, 885.0], [95.0, 893.0], [95.1, 904.0], [95.2, 914.0], [95.3, 919.0], [95.4, 926.0], [95.5, 936.0], [95.6, 944.0], [95.7, 950.0], [95.8, 969.0], [95.9, 978.0], [96.0, 995.0], [96.1, 1000.0], [96.2, 1012.0], [96.3, 1024.0], [96.4, 1034.0], [96.5, 1062.0], [96.6, 1079.0], [96.7, 1097.0], [96.8, 1128.0], [96.9, 1154.0], [97.0, 1176.0], [97.1, 1190.0], [97.2, 1215.0], [97.3, 1236.0], [97.4, 1294.0], [97.5, 1311.0], [97.6, 1346.0], [97.7, 1365.0], [97.8, 1414.0], [97.9, 1505.0], [98.0, 1535.0], [98.1, 1547.0], [98.2, 1572.0], [98.3, 1601.0], [98.4, 1626.0], [98.5, 1679.0], [98.6, 1718.0], [98.7, 1752.0], [98.8, 1805.0], [98.9, 1847.0], [99.0, 1888.0], [99.1, 1933.0], [99.2, 2039.0], [99.3, 2291.0], [99.4, 2974.0], [99.5, 3417.0], [99.6, 3709.0], [99.7, 3963.0], [99.8, 4196.0], [99.9, 5555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1251.0, "series": [{"data": [[0.0, 190.0], [600.0, 215.0], [700.0, 95.0], [800.0, 65.0], [900.0, 54.0], [1000.0, 32.0], [1100.0, 24.0], [1200.0, 14.0], [1300.0, 17.0], [1400.0, 7.0], [1500.0, 20.0], [100.0, 728.0], [1600.0, 14.0], [1700.0, 11.0], [1800.0, 14.0], [1900.0, 6.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2500.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 3.0], [3000.0, 2.0], [200.0, 1251.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 2.0], [3700.0, 1.0], [3600.0, 1.0], [3800.0, 3.0], [3900.0, 2.0], [4000.0, 2.0], [4100.0, 3.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [300.0, 1202.0], [4700.0, 1.0], [5500.0, 2.0], [6300.0, 1.0], [400.0, 760.0], [6600.0, 2.0], [6700.0, 1.0], [500.0, 427.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 109.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4138.0, "series": [{"data": [[0.0, 4138.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 943.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 109.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.937150837988828, "minX": 1.60388082E12, "maxY": 10.0, "series": [{"data": [[1.60388106E12, 9.937150837988828], [1.60388088E12, 10.0], [1.60388094E12, 10.0], [1.60388082E12, 9.984848484848488], [1.603881E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 853.0, "series": [{"data": [[8.0, 425.0], [4.0, 330.0], [2.0, 527.0], [1.0, 696.0], [9.0, 853.0], [10.0, 409.91428571428577], [5.0, 356.0], [6.0, 284.0], [3.0, 297.0], [7.0, 752.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 410.07726396917263]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 881.2, "minX": 1.60388082E12, "maxY": 1.103187845E7, "series": [{"data": [[1.60388106E12, 4905962.35], [1.60388088E12, 9598819.266666668], [1.60388094E12, 1.103187845E7], [1.60388082E12, 1137049.3], [1.603881E12, 9303789.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60388106E12, 4976.216666666666], [1.60388088E12, 9005.083333333334], [1.60388094E12, 10906.633333333333], [1.60388082E12, 881.2], [1.603881E12, 9374.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 377.2676232064883, "minX": 1.60388082E12, "maxY": 450.8939393939393, "series": [{"data": [[1.60388106E12, 385.75139664804493], [1.60388088E12, 436.25794530672545], [1.60388094E12, 377.2676232064883], [1.60388082E12, 450.8939393939393], [1.603881E12, 431.14574314574304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 372.8496568933243, "minX": 1.60388082E12, "maxY": 447.49999999999994, "series": [{"data": [[1.60388106E12, 382.27932960893844], [1.60388088E12, 431.5092387287514], [1.60388094E12, 372.8496568933243], [1.60388082E12, 447.49999999999994], [1.603881E12, 427.22871572871526]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0036075036075036084, "minX": 1.60388082E12, "maxY": 0.7651515151515152, "series": [{"data": [[1.60388106E12, 0.006983240223463689], [1.60388088E12, 0.006651884700665182], [1.60388094E12, 0.006862133499688091], [1.60388082E12, 0.7651515151515152], [1.603881E12, 0.0036075036075036084]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60388082E12, "maxY": 6736.0, "series": [{"data": [[1.60388106E12, 4356.0], [1.60388088E12, 5555.0], [1.60388094E12, 6736.0], [1.60388082E12, 1945.0], [1.603881E12, 6633.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60388106E12, 47.247997264862065], [1.60388088E12, 14.0], [1.60388094E12, 27.4359996175766], [1.60388082E12, 118.30399898529052], [1.603881E12, 13.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60388106E12, 56.1966001367569], [1.60388088E12, 14.0], [1.60388094E12, 28.87960015296936], [1.60388082E12, 122.13440040588378], [1.603881E12, 13.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60388106E12, 52.983998632431025], [1.60388088E12, 14.0], [1.60388094E12, 28.2379998087883], [1.60388082E12, 120.43199949264526], [1.603881E12, 13.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60388106E12, 27.0], [1.60388088E12, 9.0], [1.60388094E12, 3.0], [1.60388082E12, 112.0], [1.603881E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60388106E12, 334.5], [1.60388088E12, 324.0], [1.60388094E12, 332.0], [1.60388082E12, 349.5], [1.603881E12, 340.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 125.5, "minX": 4.0, "maxY": 1468.5, "series": [{"data": [[33.0, 312.0], [32.0, 277.5], [35.0, 266.0], [34.0, 240.5], [37.0, 242.0], [36.0, 272.0], [38.0, 214.5], [39.0, 214.5], [41.0, 217.0], [4.0, 395.5], [5.0, 159.0], [6.0, 451.0], [7.0, 417.5], [8.0, 125.5], [9.0, 1468.5], [10.0, 670.0], [11.0, 590.0], [12.0, 205.5], [13.0, 410.5], [14.0, 523.0], [15.0, 524.0], [16.0, 397.0], [17.0, 601.0], [18.0, 394.5], [19.0, 428.0], [20.0, 398.0], [21.0, 406.5], [22.0, 387.0], [23.0, 364.0], [24.0, 350.5], [25.0, 366.0], [26.0, 356.5], [27.0, 340.0], [28.0, 327.5], [29.0, 312.0], [30.0, 306.0], [31.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 125.5, "minX": 4.0, "maxY": 1468.5, "series": [{"data": [[33.0, 309.0], [32.0, 275.0], [35.0, 262.0], [34.0, 239.5], [37.0, 241.5], [36.0, 266.0], [38.0, 214.0], [39.0, 213.5], [41.0, 216.0], [4.0, 386.0], [5.0, 158.5], [6.0, 451.0], [7.0, 417.0], [8.0, 125.5], [9.0, 1468.5], [10.0, 666.0], [11.0, 589.0], [12.0, 205.5], [13.0, 410.5], [14.0, 515.5], [15.0, 515.0], [16.0, 391.0], [17.0, 600.0], [18.0, 387.5], [19.0, 423.0], [20.0, 396.5], [21.0, 403.5], [22.0, 381.5], [23.0, 359.0], [24.0, 346.5], [25.0, 356.0], [26.0, 352.5], [27.0, 337.0], [28.0, 323.0], [29.0, 308.0], [30.0, 304.5], [31.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3666666666666667, "minX": 1.60388082E12, "maxY": 26.716666666666665, "series": [{"data": [[1.60388106E12, 11.766666666666667], [1.60388088E12, 22.55], [1.60388094E12, 26.716666666666665], [1.60388082E12, 2.3666666666666667], [1.603881E12, 23.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60388082E12, "maxY": 26.716666666666665, "series": [{"data": [[1.60388106E12, 11.933333333333334], [1.60388088E12, 22.55], [1.60388094E12, 26.716666666666665], [1.60388082E12, 2.2], [1.603881E12, 23.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60388106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60388082E12, "maxY": 26.716666666666665, "series": [{"data": [[1.60388106E12, 11.933333333333334], [1.60388088E12, 22.55], [1.60388094E12, 26.716666666666665], [1.60388082E12, 2.2], [1.603881E12, 23.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60388082E12, "maxY": 26.716666666666665, "series": [{"data": [[1.60388106E12, 11.933333333333334], [1.60388088E12, 22.55], [1.60388094E12, 26.716666666666665], [1.60388082E12, 2.2], [1.603881E12, 23.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60388106E12, "title": "Total Transactions Per Second"}},
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

