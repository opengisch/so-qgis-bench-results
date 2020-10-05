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
        data: {"result": {"minY": 2322.0, "minX": 0.0, "maxY": 16999.0, "series": [{"data": [[0.0, 2322.0], [0.1, 2376.0], [0.2, 2390.0], [0.3, 2396.0], [0.4, 2416.0], [0.5, 2420.0], [0.6, 2456.0], [0.7, 2461.0], [0.8, 2466.0], [0.9, 2478.0], [1.0, 2493.0], [1.1, 2509.0], [1.2, 2530.0], [1.3, 2545.0], [1.4, 2565.0], [1.5, 2589.0], [1.6, 2600.0], [1.7, 2616.0], [1.8, 2630.0], [1.9, 2644.0], [2.0, 2659.0], [2.1, 2673.0], [2.2, 2677.0], [2.3, 2685.0], [2.4, 2692.0], [2.5, 2702.0], [2.6, 2706.0], [2.7, 2718.0], [2.8, 2729.0], [2.9, 2743.0], [3.0, 2760.0], [3.1, 2793.0], [3.2, 2809.0], [3.3, 2823.0], [3.4, 2872.0], [3.5, 2914.0], [3.6, 2955.0], [3.7, 2976.0], [3.8, 2983.0], [3.9, 2990.0], [4.0, 3002.0], [4.1, 3024.0], [4.2, 3064.0], [4.3, 3096.0], [4.4, 3127.0], [4.5, 3135.0], [4.6, 3159.0], [4.7, 3184.0], [4.8, 3194.0], [4.9, 3203.0], [5.0, 3221.0], [5.1, 3234.0], [5.2, 3247.0], [5.3, 3260.0], [5.4, 3274.0], [5.5, 3290.0], [5.6, 3307.0], [5.7, 3312.0], [5.8, 3326.0], [5.9, 3354.0], [6.0, 3368.0], [6.1, 3376.0], [6.2, 3394.0], [6.3, 3414.0], [6.4, 3431.0], [6.5, 3462.0], [6.6, 3478.0], [6.7, 3483.0], [6.8, 3496.0], [6.9, 3503.0], [7.0, 3511.0], [7.1, 3527.0], [7.2, 3538.0], [7.3, 3556.0], [7.4, 3569.0], [7.5, 3576.0], [7.6, 3587.0], [7.7, 3598.0], [7.8, 3618.0], [7.9, 3625.0], [8.0, 3633.0], [8.1, 3667.0], [8.2, 3672.0], [8.3, 3686.0], [8.4, 3697.0], [8.5, 3713.0], [8.6, 3727.0], [8.7, 3745.0], [8.8, 3768.0], [8.9, 3791.0], [9.0, 3813.0], [9.1, 3820.0], [9.2, 3829.0], [9.3, 3839.0], [9.4, 3851.0], [9.5, 3859.0], [9.6, 3861.0], [9.7, 3878.0], [9.8, 3890.0], [9.9, 3903.0], [10.0, 3914.0], [10.1, 3933.0], [10.2, 3954.0], [10.3, 3977.0], [10.4, 3994.0], [10.5, 4012.0], [10.6, 4021.0], [10.7, 4031.0], [10.8, 4045.0], [10.9, 4054.0], [11.0, 4073.0], [11.1, 4084.0], [11.2, 4094.0], [11.3, 4113.0], [11.4, 4125.0], [11.5, 4135.0], [11.6, 4140.0], [11.7, 4151.0], [11.8, 4155.0], [11.9, 4173.0], [12.0, 4186.0], [12.1, 4199.0], [12.2, 4220.0], [12.3, 4224.0], [12.4, 4230.0], [12.5, 4236.0], [12.6, 4246.0], [12.7, 4255.0], [12.8, 4272.0], [12.9, 4283.0], [13.0, 4294.0], [13.1, 4308.0], [13.2, 4316.0], [13.3, 4321.0], [13.4, 4330.0], [13.5, 4342.0], [13.6, 4349.0], [13.7, 4375.0], [13.8, 4389.0], [13.9, 4397.0], [14.0, 4409.0], [14.1, 4420.0], [14.2, 4427.0], [14.3, 4430.0], [14.4, 4434.0], [14.5, 4441.0], [14.6, 4450.0], [14.7, 4460.0], [14.8, 4465.0], [14.9, 4473.0], [15.0, 4484.0], [15.1, 4492.0], [15.2, 4505.0], [15.3, 4515.0], [15.4, 4524.0], [15.5, 4530.0], [15.6, 4534.0], [15.7, 4540.0], [15.8, 4545.0], [15.9, 4556.0], [16.0, 4560.0], [16.1, 4565.0], [16.2, 4584.0], [16.3, 4594.0], [16.4, 4598.0], [16.5, 4604.0], [16.6, 4612.0], [16.7, 4622.0], [16.8, 4627.0], [16.9, 4635.0], [17.0, 4645.0], [17.1, 4655.0], [17.2, 4658.0], [17.3, 4664.0], [17.4, 4671.0], [17.5, 4677.0], [17.6, 4686.0], [17.7, 4695.0], [17.8, 4699.0], [17.9, 4709.0], [18.0, 4717.0], [18.1, 4725.0], [18.2, 4733.0], [18.3, 4740.0], [18.4, 4746.0], [18.5, 4750.0], [18.6, 4754.0], [18.7, 4756.0], [18.8, 4760.0], [18.9, 4776.0], [19.0, 4787.0], [19.1, 4791.0], [19.2, 4803.0], [19.3, 4814.0], [19.4, 4820.0], [19.5, 4824.0], [19.6, 4830.0], [19.7, 4844.0], [19.8, 4855.0], [19.9, 4863.0], [20.0, 4871.0], [20.1, 4879.0], [20.2, 4882.0], [20.3, 4890.0], [20.4, 4893.0], [20.5, 4901.0], [20.6, 4904.0], [20.7, 4916.0], [20.8, 4922.0], [20.9, 4925.0], [21.0, 4928.0], [21.1, 4938.0], [21.2, 4942.0], [21.3, 4953.0], [21.4, 4965.0], [21.5, 4970.0], [21.6, 4974.0], [21.7, 4984.0], [21.8, 4989.0], [21.9, 4991.0], [22.0, 5007.0], [22.1, 5013.0], [22.2, 5019.0], [22.3, 5024.0], [22.4, 5034.0], [22.5, 5040.0], [22.6, 5050.0], [22.7, 5053.0], [22.8, 5061.0], [22.9, 5068.0], [23.0, 5072.0], [23.1, 5076.0], [23.2, 5082.0], [23.3, 5087.0], [23.4, 5094.0], [23.5, 5103.0], [23.6, 5117.0], [23.7, 5125.0], [23.8, 5127.0], [23.9, 5135.0], [24.0, 5144.0], [24.1, 5152.0], [24.2, 5154.0], [24.3, 5158.0], [24.4, 5163.0], [24.5, 5170.0], [24.6, 5173.0], [24.7, 5178.0], [24.8, 5188.0], [24.9, 5197.0], [25.0, 5202.0], [25.1, 5207.0], [25.2, 5215.0], [25.3, 5217.0], [25.4, 5220.0], [25.5, 5229.0], [25.6, 5235.0], [25.7, 5248.0], [25.8, 5255.0], [25.9, 5260.0], [26.0, 5264.0], [26.1, 5273.0], [26.2, 5279.0], [26.3, 5280.0], [26.4, 5286.0], [26.5, 5290.0], [26.6, 5300.0], [26.7, 5310.0], [26.8, 5322.0], [26.9, 5326.0], [27.0, 5333.0], [27.1, 5340.0], [27.2, 5343.0], [27.3, 5351.0], [27.4, 5359.0], [27.5, 5363.0], [27.6, 5369.0], [27.7, 5375.0], [27.8, 5383.0], [27.9, 5386.0], [28.0, 5390.0], [28.1, 5394.0], [28.2, 5397.0], [28.3, 5405.0], [28.4, 5408.0], [28.5, 5418.0], [28.6, 5427.0], [28.7, 5429.0], [28.8, 5438.0], [28.9, 5445.0], [29.0, 5456.0], [29.1, 5470.0], [29.2, 5473.0], [29.3, 5481.0], [29.4, 5488.0], [29.5, 5494.0], [29.6, 5498.0], [29.7, 5503.0], [29.8, 5508.0], [29.9, 5515.0], [30.0, 5522.0], [30.1, 5525.0], [30.2, 5526.0], [30.3, 5529.0], [30.4, 5536.0], [30.5, 5542.0], [30.6, 5549.0], [30.7, 5554.0], [30.8, 5561.0], [30.9, 5567.0], [31.0, 5573.0], [31.1, 5580.0], [31.2, 5586.0], [31.3, 5593.0], [31.4, 5595.0], [31.5, 5601.0], [31.6, 5604.0], [31.7, 5609.0], [31.8, 5618.0], [31.9, 5621.0], [32.0, 5625.0], [32.1, 5630.0], [32.2, 5638.0], [32.3, 5641.0], [32.4, 5651.0], [32.5, 5656.0], [32.6, 5665.0], [32.7, 5671.0], [32.8, 5676.0], [32.9, 5683.0], [33.0, 5689.0], [33.1, 5693.0], [33.2, 5695.0], [33.3, 5701.0], [33.4, 5703.0], [33.5, 5708.0], [33.6, 5719.0], [33.7, 5722.0], [33.8, 5728.0], [33.9, 5731.0], [34.0, 5736.0], [34.1, 5743.0], [34.2, 5751.0], [34.3, 5757.0], [34.4, 5766.0], [34.5, 5776.0], [34.6, 5784.0], [34.7, 5786.0], [34.8, 5789.0], [34.9, 5793.0], [35.0, 5802.0], [35.1, 5806.0], [35.2, 5808.0], [35.3, 5813.0], [35.4, 5816.0], [35.5, 5822.0], [35.6, 5826.0], [35.7, 5842.0], [35.8, 5844.0], [35.9, 5848.0], [36.0, 5852.0], [36.1, 5854.0], [36.2, 5861.0], [36.3, 5867.0], [36.4, 5873.0], [36.5, 5879.0], [36.6, 5883.0], [36.7, 5886.0], [36.8, 5887.0], [36.9, 5889.0], [37.0, 5892.0], [37.1, 5897.0], [37.2, 5905.0], [37.3, 5908.0], [37.4, 5916.0], [37.5, 5920.0], [37.6, 5927.0], [37.7, 5933.0], [37.8, 5937.0], [37.9, 5943.0], [38.0, 5947.0], [38.1, 5953.0], [38.2, 5955.0], [38.3, 5960.0], [38.4, 5964.0], [38.5, 5971.0], [38.6, 5974.0], [38.7, 5977.0], [38.8, 5988.0], [38.9, 5994.0], [39.0, 5999.0], [39.1, 6002.0], [39.2, 6007.0], [39.3, 6021.0], [39.4, 6023.0], [39.5, 6029.0], [39.6, 6031.0], [39.7, 6036.0], [39.8, 6041.0], [39.9, 6044.0], [40.0, 6049.0], [40.1, 6051.0], [40.2, 6056.0], [40.3, 6065.0], [40.4, 6070.0], [40.5, 6076.0], [40.6, 6080.0], [40.7, 6085.0], [40.8, 6088.0], [40.9, 6093.0], [41.0, 6095.0], [41.1, 6099.0], [41.2, 6105.0], [41.3, 6108.0], [41.4, 6112.0], [41.5, 6121.0], [41.6, 6125.0], [41.7, 6131.0], [41.8, 6136.0], [41.9, 6145.0], [42.0, 6146.0], [42.1, 6151.0], [42.2, 6159.0], [42.3, 6168.0], [42.4, 6171.0], [42.5, 6178.0], [42.6, 6184.0], [42.7, 6188.0], [42.8, 6195.0], [42.9, 6198.0], [43.0, 6204.0], [43.1, 6208.0], [43.2, 6210.0], [43.3, 6211.0], [43.4, 6216.0], [43.5, 6221.0], [43.6, 6224.0], [43.7, 6230.0], [43.8, 6233.0], [43.9, 6234.0], [44.0, 6239.0], [44.1, 6246.0], [44.2, 6254.0], [44.3, 6259.0], [44.4, 6260.0], [44.5, 6262.0], [44.6, 6271.0], [44.7, 6279.0], [44.8, 6284.0], [44.9, 6291.0], [45.0, 6295.0], [45.1, 6304.0], [45.2, 6308.0], [45.3, 6312.0], [45.4, 6317.0], [45.5, 6319.0], [45.6, 6324.0], [45.7, 6330.0], [45.8, 6333.0], [45.9, 6339.0], [46.0, 6345.0], [46.1, 6351.0], [46.2, 6353.0], [46.3, 6355.0], [46.4, 6361.0], [46.5, 6369.0], [46.6, 6374.0], [46.7, 6385.0], [46.8, 6387.0], [46.9, 6392.0], [47.0, 6406.0], [47.1, 6416.0], [47.2, 6422.0], [47.3, 6431.0], [47.4, 6435.0], [47.5, 6442.0], [47.6, 6450.0], [47.7, 6459.0], [47.8, 6463.0], [47.9, 6470.0], [48.0, 6476.0], [48.1, 6487.0], [48.2, 6489.0], [48.3, 6498.0], [48.4, 6504.0], [48.5, 6511.0], [48.6, 6522.0], [48.7, 6537.0], [48.8, 6539.0], [48.9, 6542.0], [49.0, 6545.0], [49.1, 6557.0], [49.2, 6570.0], [49.3, 6575.0], [49.4, 6582.0], [49.5, 6585.0], [49.6, 6589.0], [49.7, 6595.0], [49.8, 6601.0], [49.9, 6607.0], [50.0, 6612.0], [50.1, 6617.0], [50.2, 6622.0], [50.3, 6628.0], [50.4, 6634.0], [50.5, 6641.0], [50.6, 6645.0], [50.7, 6651.0], [50.8, 6658.0], [50.9, 6661.0], [51.0, 6670.0], [51.1, 6673.0], [51.2, 6681.0], [51.3, 6684.0], [51.4, 6691.0], [51.5, 6695.0], [51.6, 6701.0], [51.7, 6706.0], [51.8, 6715.0], [51.9, 6729.0], [52.0, 6740.0], [52.1, 6752.0], [52.2, 6755.0], [52.3, 6761.0], [52.4, 6767.0], [52.5, 6769.0], [52.6, 6776.0], [52.7, 6780.0], [52.8, 6785.0], [52.9, 6792.0], [53.0, 6804.0], [53.1, 6810.0], [53.2, 6820.0], [53.3, 6826.0], [53.4, 6828.0], [53.5, 6832.0], [53.6, 6837.0], [53.7, 6843.0], [53.8, 6848.0], [53.9, 6851.0], [54.0, 6856.0], [54.1, 6860.0], [54.2, 6867.0], [54.3, 6870.0], [54.4, 6872.0], [54.5, 6876.0], [54.6, 6880.0], [54.7, 6887.0], [54.8, 6893.0], [54.9, 6900.0], [55.0, 6905.0], [55.1, 6910.0], [55.2, 6914.0], [55.3, 6920.0], [55.4, 6931.0], [55.5, 6937.0], [55.6, 6947.0], [55.7, 6952.0], [55.8, 6954.0], [55.9, 6962.0], [56.0, 6967.0], [56.1, 6974.0], [56.2, 6980.0], [56.3, 6983.0], [56.4, 6987.0], [56.5, 6991.0], [56.6, 6996.0], [56.7, 6999.0], [56.8, 7006.0], [56.9, 7013.0], [57.0, 7020.0], [57.1, 7023.0], [57.2, 7029.0], [57.3, 7032.0], [57.4, 7037.0], [57.5, 7044.0], [57.6, 7047.0], [57.7, 7053.0], [57.8, 7061.0], [57.9, 7069.0], [58.0, 7076.0], [58.1, 7081.0], [58.2, 7093.0], [58.3, 7095.0], [58.4, 7096.0], [58.5, 7101.0], [58.6, 7105.0], [58.7, 7120.0], [58.8, 7122.0], [58.9, 7124.0], [59.0, 7130.0], [59.1, 7133.0], [59.2, 7139.0], [59.3, 7151.0], [59.4, 7155.0], [59.5, 7160.0], [59.6, 7167.0], [59.7, 7175.0], [59.8, 7180.0], [59.9, 7183.0], [60.0, 7187.0], [60.1, 7194.0], [60.2, 7196.0], [60.3, 7201.0], [60.4, 7205.0], [60.5, 7208.0], [60.6, 7215.0], [60.7, 7222.0], [60.8, 7229.0], [60.9, 7234.0], [61.0, 7236.0], [61.1, 7240.0], [61.2, 7251.0], [61.3, 7258.0], [61.4, 7266.0], [61.5, 7271.0], [61.6, 7276.0], [61.7, 7282.0], [61.8, 7287.0], [61.9, 7295.0], [62.0, 7304.0], [62.1, 7309.0], [62.2, 7314.0], [62.3, 7316.0], [62.4, 7321.0], [62.5, 7326.0], [62.6, 7337.0], [62.7, 7346.0], [62.8, 7350.0], [62.9, 7355.0], [63.0, 7358.0], [63.1, 7365.0], [63.2, 7367.0], [63.3, 7372.0], [63.4, 7381.0], [63.5, 7383.0], [63.6, 7391.0], [63.7, 7398.0], [63.8, 7403.0], [63.9, 7406.0], [64.0, 7410.0], [64.1, 7418.0], [64.2, 7419.0], [64.3, 7425.0], [64.4, 7431.0], [64.5, 7436.0], [64.6, 7442.0], [64.7, 7444.0], [64.8, 7450.0], [64.9, 7456.0], [65.0, 7465.0], [65.1, 7470.0], [65.2, 7476.0], [65.3, 7480.0], [65.4, 7484.0], [65.5, 7489.0], [65.6, 7493.0], [65.7, 7496.0], [65.8, 7501.0], [65.9, 7507.0], [66.0, 7511.0], [66.1, 7515.0], [66.2, 7523.0], [66.3, 7533.0], [66.4, 7537.0], [66.5, 7541.0], [66.6, 7553.0], [66.7, 7556.0], [66.8, 7564.0], [66.9, 7572.0], [67.0, 7582.0], [67.1, 7591.0], [67.2, 7594.0], [67.3, 7602.0], [67.4, 7611.0], [67.5, 7614.0], [67.6, 7621.0], [67.7, 7628.0], [67.8, 7634.0], [67.9, 7646.0], [68.0, 7649.0], [68.1, 7658.0], [68.2, 7667.0], [68.3, 7674.0], [68.4, 7677.0], [68.5, 7685.0], [68.6, 7691.0], [68.7, 7697.0], [68.8, 7699.0], [68.9, 7705.0], [69.0, 7715.0], [69.1, 7727.0], [69.2, 7732.0], [69.3, 7741.0], [69.4, 7747.0], [69.5, 7753.0], [69.6, 7760.0], [69.7, 7764.0], [69.8, 7769.0], [69.9, 7774.0], [70.0, 7780.0], [70.1, 7784.0], [70.2, 7792.0], [70.3, 7803.0], [70.4, 7812.0], [70.5, 7817.0], [70.6, 7829.0], [70.7, 7840.0], [70.8, 7850.0], [70.9, 7856.0], [71.0, 7864.0], [71.1, 7870.0], [71.2, 7875.0], [71.3, 7879.0], [71.4, 7888.0], [71.5, 7896.0], [71.6, 7900.0], [71.7, 7907.0], [71.8, 7912.0], [71.9, 7919.0], [72.0, 7926.0], [72.1, 7928.0], [72.2, 7941.0], [72.3, 7949.0], [72.4, 7953.0], [72.5, 7961.0], [72.6, 7969.0], [72.7, 7973.0], [72.8, 7982.0], [72.9, 7987.0], [73.0, 7991.0], [73.1, 8009.0], [73.2, 8013.0], [73.3, 8024.0], [73.4, 8033.0], [73.5, 8040.0], [73.6, 8044.0], [73.7, 8052.0], [73.8, 8061.0], [73.9, 8066.0], [74.0, 8071.0], [74.1, 8076.0], [74.2, 8090.0], [74.3, 8097.0], [74.4, 8102.0], [74.5, 8109.0], [74.6, 8111.0], [74.7, 8114.0], [74.8, 8126.0], [74.9, 8135.0], [75.0, 8142.0], [75.1, 8147.0], [75.2, 8154.0], [75.3, 8158.0], [75.4, 8167.0], [75.5, 8183.0], [75.6, 8187.0], [75.7, 8194.0], [75.8, 8204.0], [75.9, 8215.0], [76.0, 8219.0], [76.1, 8225.0], [76.2, 8232.0], [76.3, 8241.0], [76.4, 8247.0], [76.5, 8259.0], [76.6, 8267.0], [76.7, 8271.0], [76.8, 8279.0], [76.9, 8287.0], [77.0, 8295.0], [77.1, 8305.0], [77.2, 8311.0], [77.3, 8320.0], [77.4, 8326.0], [77.5, 8337.0], [77.6, 8346.0], [77.7, 8351.0], [77.8, 8357.0], [77.9, 8364.0], [78.0, 8366.0], [78.1, 8375.0], [78.2, 8385.0], [78.3, 8394.0], [78.4, 8401.0], [78.5, 8410.0], [78.6, 8418.0], [78.7, 8425.0], [78.8, 8437.0], [78.9, 8447.0], [79.0, 8458.0], [79.1, 8472.0], [79.2, 8490.0], [79.3, 8499.0], [79.4, 8511.0], [79.5, 8515.0], [79.6, 8528.0], [79.7, 8534.0], [79.8, 8553.0], [79.9, 8561.0], [80.0, 8569.0], [80.1, 8581.0], [80.2, 8589.0], [80.3, 8593.0], [80.4, 8600.0], [80.5, 8606.0], [80.6, 8619.0], [80.7, 8631.0], [80.8, 8639.0], [80.9, 8651.0], [81.0, 8666.0], [81.1, 8672.0], [81.2, 8681.0], [81.3, 8696.0], [81.4, 8705.0], [81.5, 8712.0], [81.6, 8723.0], [81.7, 8742.0], [81.8, 8755.0], [81.9, 8764.0], [82.0, 8774.0], [82.1, 8782.0], [82.2, 8796.0], [82.3, 8802.0], [82.4, 8809.0], [82.5, 8826.0], [82.6, 8845.0], [82.7, 8854.0], [82.8, 8860.0], [82.9, 8868.0], [83.0, 8884.0], [83.1, 8894.0], [83.2, 8901.0], [83.3, 8915.0], [83.4, 8922.0], [83.5, 8929.0], [83.6, 8951.0], [83.7, 8962.0], [83.8, 8967.0], [83.9, 8976.0], [84.0, 8987.0], [84.1, 8991.0], [84.2, 9002.0], [84.3, 9014.0], [84.4, 9018.0], [84.5, 9034.0], [84.6, 9037.0], [84.7, 9048.0], [84.8, 9056.0], [84.9, 9069.0], [85.0, 9081.0], [85.1, 9091.0], [85.2, 9100.0], [85.3, 9110.0], [85.4, 9123.0], [85.5, 9141.0], [85.6, 9150.0], [85.7, 9165.0], [85.8, 9175.0], [85.9, 9188.0], [86.0, 9194.0], [86.1, 9200.0], [86.2, 9214.0], [86.3, 9219.0], [86.4, 9227.0], [86.5, 9239.0], [86.6, 9250.0], [86.7, 9266.0], [86.8, 9285.0], [86.9, 9298.0], [87.0, 9310.0], [87.1, 9321.0], [87.2, 9327.0], [87.3, 9357.0], [87.4, 9368.0], [87.5, 9382.0], [87.6, 9402.0], [87.7, 9413.0], [87.8, 9424.0], [87.9, 9435.0], [88.0, 9446.0], [88.1, 9472.0], [88.2, 9486.0], [88.3, 9499.0], [88.4, 9521.0], [88.5, 9541.0], [88.6, 9553.0], [88.7, 9576.0], [88.8, 9587.0], [88.9, 9597.0], [89.0, 9610.0], [89.1, 9621.0], [89.2, 9638.0], [89.3, 9647.0], [89.4, 9661.0], [89.5, 9672.0], [89.6, 9690.0], [89.7, 9710.0], [89.8, 9724.0], [89.9, 9731.0], [90.0, 9749.0], [90.1, 9759.0], [90.2, 9768.0], [90.3, 9776.0], [90.4, 9795.0], [90.5, 9812.0], [90.6, 9829.0], [90.7, 9841.0], [90.8, 9860.0], [90.9, 9873.0], [91.0, 9895.0], [91.1, 9919.0], [91.2, 9929.0], [91.3, 9941.0], [91.4, 9954.0], [91.5, 9969.0], [91.6, 9983.0], [91.7, 9995.0], [91.8, 10015.0], [91.9, 10023.0], [92.0, 10044.0], [92.1, 10060.0], [92.2, 10077.0], [92.3, 10099.0], [92.4, 10114.0], [92.5, 10141.0], [92.6, 10161.0], [92.7, 10186.0], [92.8, 10215.0], [92.9, 10232.0], [93.0, 10246.0], [93.1, 10272.0], [93.2, 10293.0], [93.3, 10341.0], [93.4, 10357.0], [93.5, 10382.0], [93.6, 10392.0], [93.7, 10409.0], [93.8, 10431.0], [93.9, 10472.0], [94.0, 10508.0], [94.1, 10526.0], [94.2, 10548.0], [94.3, 10597.0], [94.4, 10626.0], [94.5, 10640.0], [94.6, 10656.0], [94.7, 10724.0], [94.8, 10773.0], [94.9, 10790.0], [95.0, 10818.0], [95.1, 10883.0], [95.2, 10907.0], [95.3, 10926.0], [95.4, 10946.0], [95.5, 10969.0], [95.6, 11007.0], [95.7, 11050.0], [95.8, 11076.0], [95.9, 11119.0], [96.0, 11149.0], [96.1, 11178.0], [96.2, 11204.0], [96.3, 11227.0], [96.4, 11233.0], [96.5, 11255.0], [96.6, 11299.0], [96.7, 11316.0], [96.8, 11409.0], [96.9, 11465.0], [97.0, 11527.0], [97.1, 11563.0], [97.2, 11624.0], [97.3, 11724.0], [97.4, 11795.0], [97.5, 11838.0], [97.6, 11885.0], [97.7, 11986.0], [97.8, 12082.0], [97.9, 12157.0], [98.0, 12275.0], [98.1, 12361.0], [98.2, 12453.0], [98.3, 12501.0], [98.4, 12594.0], [98.5, 12649.0], [98.6, 12733.0], [98.7, 12936.0], [98.8, 12986.0], [98.9, 13073.0], [99.0, 13187.0], [99.1, 13334.0], [99.2, 13464.0], [99.3, 13670.0], [99.4, 13889.0], [99.5, 14127.0], [99.6, 14397.0], [99.7, 14626.0], [99.8, 15073.0], [99.9, 15634.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 112.0, "series": [{"data": [[2300.0, 17.0], [2400.0, 38.0], [2500.0, 28.0], [2600.0, 45.0], [2700.0, 37.0], [2800.0, 14.0], [2900.0, 26.0], [3000.0, 19.0], [3100.0, 29.0], [3300.0, 35.0], [3200.0, 35.0], [3400.0, 32.0], [3500.0, 46.0], [3600.0, 36.0], [3700.0, 27.0], [3800.0, 47.0], [3900.0, 30.0], [4000.0, 44.0], [4200.0, 48.0], [4300.0, 47.0], [4100.0, 44.0], [4500.0, 67.0], [4600.0, 70.0], [4400.0, 63.0], [4800.0, 67.0], [4700.0, 72.0], [5000.0, 77.0], [5100.0, 77.0], [4900.0, 77.0], [5200.0, 85.0], [5300.0, 87.0], [5400.0, 73.0], [5500.0, 96.0], [5600.0, 93.0], [5700.0, 87.0], [5800.0, 112.0], [6000.0, 108.0], [5900.0, 99.0], [6100.0, 94.0], [6300.0, 96.0], [6200.0, 112.0], [6500.0, 74.0], [6600.0, 94.0], [6400.0, 74.0], [6800.0, 100.0], [6700.0, 70.0], [6900.0, 96.0], [7000.0, 91.0], [7100.0, 95.0], [7200.0, 88.0], [7400.0, 105.0], [7300.0, 91.0], [7500.0, 77.0], [7600.0, 81.0], [7900.0, 76.0], [7800.0, 69.0], [7700.0, 75.0], [8100.0, 72.0], [8000.0, 68.0], [8500.0, 55.0], [8400.0, 48.0], [8600.0, 50.0], [8200.0, 68.0], [8300.0, 69.0], [8700.0, 47.0], [8900.0, 51.0], [9000.0, 54.0], [9200.0, 43.0], [8800.0, 48.0], [9100.0, 47.0], [9300.0, 35.0], [9500.0, 32.0], [9700.0, 42.0], [9400.0, 37.0], [9600.0, 38.0], [9800.0, 28.0], [9900.0, 39.0], [10100.0, 23.0], [10200.0, 24.0], [10000.0, 29.0], [10500.0, 17.0], [10400.0, 18.0], [10600.0, 16.0], [10700.0, 18.0], [10300.0, 22.0], [10900.0, 22.0], [11200.0, 22.0], [11100.0, 19.0], [11000.0, 12.0], [10800.0, 10.0], [11600.0, 4.0], [11400.0, 8.0], [11500.0, 12.0], [11700.0, 9.0], [11300.0, 9.0], [11900.0, 7.0], [12100.0, 7.0], [11800.0, 10.0], [12200.0, 5.0], [12000.0, 3.0], [12500.0, 7.0], [12300.0, 5.0], [12400.0, 8.0], [12600.0, 8.0], [12700.0, 3.0], [13100.0, 6.0], [12900.0, 7.0], [13200.0, 2.0], [13000.0, 5.0], [12800.0, 3.0], [13300.0, 4.0], [13800.0, 3.0], [13400.0, 7.0], [13600.0, 2.0], [13700.0, 2.0], [14000.0, 2.0], [14100.0, 3.0], [14300.0, 4.0], [13900.0, 1.0], [14400.0, 2.0], [14800.0, 2.0], [14500.0, 2.0], [14600.0, 3.0], [15000.0, 2.0], [15600.0, 4.0], [15500.0, 1.0], [16900.0, 2.0], [16500.0, 1.0], [16600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5190.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5190.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.157635467980306, "minX": 1.60190586E12, "maxY": 40.0, "series": [{"data": [[1.60190598E12, 40.0], [1.60190628E12, 40.0], [1.60190658E12, 40.0], [1.60190592E12, 40.0], [1.6019067E12, 36.157635467980306], [1.60190604E12, 40.0], [1.60190634E12, 40.0], [1.60190664E12, 40.0], [1.60190646E12, 40.0], [1.6019061E12, 40.0], [1.6019064E12, 40.0], [1.60190622E12, 40.0], [1.60190652E12, 40.0], [1.60190586E12, 40.0], [1.60190616E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019067E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6762.105590062106, "minX": 1.0, "maxY": 11178.0, "series": [{"data": [[33.0, 8170.0], [32.0, 9621.0], [2.0, 11178.0], [35.0, 7676.0], [34.0, 9095.0], [37.0, 9687.0], [36.0, 9868.0], [39.0, 7316.0], [38.0, 7447.0], [40.0, 6762.105590062106], [3.0, 9612.0], [4.0, 9304.0], [5.0, 7194.0], [6.0, 10017.0], [7.0, 7217.0], [8.0, 7291.0], [9.0, 10640.0], [10.0, 7649.0], [11.0, 6970.0], [12.0, 7606.0], [13.0, 6988.0], [14.0, 7782.0], [15.0, 9765.0], [16.0, 7545.0], [1.0, 10717.0], [17.0, 10271.0], [18.0, 10714.0], [19.0, 7337.0], [20.0, 7465.0], [21.0, 7396.0], [22.0, 10939.0], [23.0, 7916.0], [24.0, 7926.0], [25.0, 8100.0], [26.0, 8261.0], [27.0, 10228.0], [28.0, 9486.0], [29.0, 10792.0], [30.0, 9569.0], [31.0, 7702.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84973993450205, 6776.887882874196]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1523.85, "minX": 1.60190586E12, "maxY": 2128994.433333333, "series": [{"data": [[1.60190598E12, 1090531.6833333333], [1.60190628E12, 1753081.2], [1.60190658E12, 1608924.2166666666], [1.60190592E12, 1521688.0833333333], [1.6019067E12, 938555.0166666667], [1.60190604E12, 2128994.433333333], [1.60190634E12, 1469131.65], [1.60190664E12, 1601682.15], [1.60190646E12, 1752413.0166666666], [1.6019061E12, 1975421.25], [1.6019064E12, 1143721.8166666667], [1.60190622E12, 1707937.1833333333], [1.60190652E12, 1994325.8333333333], [1.60190586E12, 1725297.5], [1.60190616E12, 1561872.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190598E12, 2873.266666666667], [1.60190628E12, 1945.6666666666667], [1.60190658E12, 2765.133333333333], [1.60190592E12, 2525.1833333333334], [1.6019067E12, 1523.85], [1.60190604E12, 2686.6833333333334], [1.60190634E12, 2681.4], [1.60190664E12, 3038.616666666667], [1.60190646E12, 2634.0], [1.6019061E12, 2831.266666666667], [1.6019064E12, 2622.7], [1.60190622E12, 2645.4666666666667], [1.60190652E12, 2888.65], [1.60190586E12, 2196.0], [1.60190616E12, 2726.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019067E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5983.229426433918, "minX": 1.60190586E12, "maxY": 8778.832061068699, "series": [{"data": [[1.60190598E12, 6054.969773299748], [1.60190628E12, 8778.832061068699], [1.60190658E12, 6519.565934065932], [1.60190592E12, 6706.323782234958], [1.6019067E12, 8456.472906403935], [1.60190604E12, 6946.336158192094], [1.60190634E12, 6733.797872340425], [1.60190664E12, 5983.229426433918], [1.60190646E12, 6599.796089385476], [1.6019061E12, 6282.434316353889], [1.6019064E12, 6756.479108635101], [1.60190622E12, 6774.227272727272], [1.60190652E12, 6361.404199475064], [1.60190586E12, 7582.009900990097], [1.60190616E12, 6733.275766016716]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019067E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5981.39152119701, "minX": 1.60190586E12, "maxY": 8775.69465648856, "series": [{"data": [[1.60190598E12, 6053.604534005035], [1.60190628E12, 8775.69465648856], [1.60190658E12, 6517.442307692303], [1.60190592E12, 6704.25787965616], [1.6019067E12, 8454.26108374384], [1.60190604E12, 6943.409604519777], [1.60190634E12, 6731.898936170208], [1.60190664E12, 5981.39152119701], [1.60190646E12, 6597.458100558659], [1.6019061E12, 6279.978552278822], [1.6019064E12, 6754.99164345404], [1.60190622E12, 6771.968750000002], [1.60190652E12, 6358.884514435694], [1.60190586E12, 7579.333333333335], [1.60190616E12, 6731.208913649019]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019067E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07231920199501243, "minX": 1.60190586E12, "maxY": 2.1089108910891086, "series": [{"data": [[1.60190598E12, 0.11335012594458424], [1.60190628E12, 0.16412213740458018], [1.60190658E12, 0.08791208791208789], [1.60190592E12, 0.1375358166189112], [1.6019067E12, 0.08866995073891631], [1.60190604E12, 0.11864406779661028], [1.60190634E12, 0.10106382978723404], [1.60190664E12, 0.07231920199501243], [1.60190646E12, 0.10335195530726256], [1.6019061E12, 0.11796246648793576], [1.6019064E12, 0.10863509749303618], [1.60190622E12, 0.12215909090909097], [1.60190652E12, 0.0813648293963255], [1.60190586E12, 2.1089108910891086], [1.60190616E12, 0.11420612813370484]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019067E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2322.0, "minX": 1.60190586E12, "maxY": 16999.0, "series": [{"data": [[1.60190598E12, 14155.0], [1.60190628E12, 16999.0], [1.60190658E12, 10597.0], [1.60190592E12, 12596.0], [1.6019067E12, 11465.0], [1.60190604E12, 11724.0], [1.60190634E12, 15676.0], [1.60190664E12, 11310.0], [1.60190646E12, 11533.0], [1.6019061E12, 11229.0], [1.6019064E12, 14658.0], [1.60190622E12, 12667.0], [1.60190652E12, 10915.0], [1.60190586E12, 14120.0], [1.60190616E12, 11227.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190598E12, 2384.909999525547], [1.60190628E12, 4964.530981627703], [1.60190658E12, 3558.854999738932], [1.60190592E12, 3558.099998831749], [1.6019067E12, 5145.339984679222], [1.60190604E12, 3165.679997968674], [1.60190634E12, 3884.50599622488], [1.60190664E12, 2634.067997508049], [1.60190646E12, 4133.461999828815], [1.6019061E12, 2686.9799973249437], [1.6019064E12, 2418.2399999141694], [1.60190622E12, 2385.9119952869414], [1.60190652E12, 2678.105992076397], [1.60190586E12, 3013.1919531059266], [1.60190616E12, 2592.2309999144077]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190598E12, 2386.701000189781], [1.60190628E12, 5033.884107348919], [1.60190658E12, 3559.8405001044275], [1.60190592E12, 3562.5100004673004], [1.6019067E12, 5199.01880200386], [1.60190604E12, 3173.3480008125307], [1.60190634E12, 3898.756601510048], [1.60190664E12, 2643.4748009967802], [1.60190646E12, 4134.108200068474], [1.6019061E12, 2697.0780010700228], [1.6019064E12, 2418.5640000343324], [1.60190622E12, 2403.7032018852233], [1.60190652E12, 2708.016603169441], [1.60190586E12, 3185.1520034790037], [1.60190616E12, 2592.554100034237]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190598E12, 2385.9049997627735], [1.60190628E12, 5003.060490813851], [1.60190658E12, 3559.402499869466], [1.60190592E12, 3560.5499994158745], [1.6019067E12, 5177.469992339611], [1.60190604E12, 3169.939998984337], [1.60190634E12, 3892.42299811244], [1.60190664E12, 2639.2939987540244], [1.60190646E12, 4133.820999914407], [1.6019061E12, 2692.5899986624718], [1.6019064E12, 2418.4199999570847], [1.60190622E12, 2395.795997643471], [1.60190652E12, 2694.7229960381983], [1.60190586E12, 3111.535976552963], [1.60190616E12, 2592.4104999572037]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190598E12, 2376.0], [1.60190628E12, 4561.0], [1.60190658E12, 3498.0], [1.60190592E12, 3253.0], [1.6019067E12, 4882.0], [1.60190604E12, 3055.0], [1.60190634E12, 3551.0], [1.60190664E12, 2518.0], [1.60190646E12, 3933.0], [1.6019061E12, 2361.0], [1.6019064E12, 2407.0], [1.60190622E12, 2322.0], [1.60190652E12, 2446.0], [1.60190586E12, 2362.0], [1.60190616E12, 2545.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190598E12, 5666.0], [1.60190628E12, 8670.0], [1.60190658E12, 6636.0], [1.60190592E12, 6289.0], [1.6019067E12, 8437.0], [1.60190604E12, 6899.5], [1.60190634E12, 6051.5], [1.60190664E12, 5864.0], [1.60190646E12, 6296.0], [1.6019061E12, 6196.0], [1.6019064E12, 6443.0], [1.60190622E12, 7089.0], [1.60190652E12, 6370.0], [1.60190586E12, 7105.0], [1.60190616E12, 7120.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019067E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2660.5, "minX": 1.0, "maxY": 9663.0, "series": [{"data": [[2.0, 8778.5], [8.0, 6198.0], [9.0, 5428.5], [10.0, 5520.5], [11.0, 4927.0], [3.0, 7896.0], [12.0, 4478.0], [13.0, 4047.0], [14.0, 5564.0], [15.0, 4029.0], [4.0, 8090.5], [1.0, 9663.0], [16.0, 2660.5], [17.0, 3925.0], [5.0, 7410.0], [6.0, 6933.0], [7.0, 6522.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 8128.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2660.5, "minX": 1.0, "maxY": 9660.5, "series": [{"data": [[2.0, 8772.0], [8.0, 6198.0], [9.0, 5427.0], [10.0, 5520.5], [11.0, 4927.0], [3.0, 7895.0], [12.0, 4475.0], [13.0, 4047.0], [14.0, 5564.0], [15.0, 4029.0], [4.0, 8083.5], [1.0, 9660.5], [16.0, 2660.5], [17.0, 3925.0], [5.0, 7409.0], [6.0, 6933.0], [7.0, 6521.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 8128.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.6019058E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190598E12, 6.616666666666666], [1.60190628E12, 4.366666666666666], [1.60190658E12, 6.066666666666666], [1.60190592E12, 5.816666666666666], [1.6019067E12, 2.716666666666667], [1.60190604E12, 5.9], [1.60190634E12, 6.266666666666667], [1.60190664E12, 6.683333333333334], [1.60190646E12, 5.966666666666667], [1.6019058E12, 0.55], [1.6019061E12, 6.216666666666667], [1.6019064E12, 5.983333333333333], [1.60190622E12, 5.866666666666666], [1.60190652E12, 6.35], [1.60190586E12, 5.166666666666667], [1.60190616E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019067E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190586E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190598E12, 6.616666666666666], [1.60190628E12, 4.366666666666666], [1.60190658E12, 6.066666666666666], [1.60190592E12, 5.816666666666666], [1.6019067E12, 3.3833333333333333], [1.60190604E12, 5.9], [1.60190634E12, 6.266666666666667], [1.60190664E12, 6.683333333333334], [1.60190646E12, 5.966666666666667], [1.6019061E12, 6.216666666666667], [1.6019064E12, 5.983333333333333], [1.60190622E12, 5.866666666666666], [1.60190652E12, 6.35], [1.60190586E12, 5.05], [1.60190616E12, 5.966666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60190616E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019067E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190586E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190598E12, 6.616666666666666], [1.60190628E12, 4.366666666666666], [1.60190658E12, 6.066666666666666], [1.60190592E12, 5.816666666666666], [1.6019067E12, 3.3833333333333333], [1.60190604E12, 5.9], [1.60190634E12, 6.266666666666667], [1.60190664E12, 6.683333333333334], [1.60190646E12, 5.966666666666667], [1.6019061E12, 6.216666666666667], [1.6019064E12, 5.983333333333333], [1.60190622E12, 5.866666666666666], [1.60190652E12, 6.35], [1.60190586E12, 5.05], [1.60190616E12, 5.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60190616E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019067E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190586E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190598E12, 6.616666666666666], [1.60190628E12, 4.366666666666666], [1.60190658E12, 6.066666666666666], [1.60190592E12, 5.816666666666666], [1.6019067E12, 3.3833333333333333], [1.60190604E12, 5.9], [1.60190634E12, 6.266666666666667], [1.60190664E12, 6.683333333333334], [1.60190646E12, 5.966666666666667], [1.6019061E12, 6.216666666666667], [1.6019064E12, 5.983333333333333], [1.60190622E12, 5.866666666666666], [1.60190652E12, 6.35], [1.60190586E12, 5.05], [1.60190616E12, 5.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60190616E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019067E12, "title": "Total Transactions Per Second"}},
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

