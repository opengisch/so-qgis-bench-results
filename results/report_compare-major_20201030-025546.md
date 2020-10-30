# QGIS Benchmark summary compare-major (20201030-025546)


compare different version of QGIS servers using the same settings

_run completed in 02h 09m 23s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201030-025546_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock      | Global  |                612.7 | +0.0%                        |         5891.4 | +0.0%                  |          1407.5 | +3.4%                   |           15 |        15173 |         11187 |            0 |    10463.1 |    6648.4  |     4170.3 |      97.4 |   72.3667 |      13.6 |          0 |
| qgis218-stock      | Global  |                723.1 | +18.0%                       |         6974.7 | +18.4%                 |          1361   | +0.0%                   |          433 |        26127 |         11187 |            0 |    10346.4 |    6770.97 |     4099.7 |      99.9 |   97.5667 |      13.4 |          0 |
| qgis310-stock      | Global  |                814.7 | +33.0%                       |         7903.6 | +34.2%                 |          1907   | +40.1%                  |          405 |        17063 |         11187 |            0 |    10417.6 |    6685.93 |     4124.4 |      94.2 |   73.6667 |      13.1 |          0 |
| qgis314-stock      | Global  |                820.2 | +33.9%                       |         7958.7 | +35.1%                 |          1953   | +43.5%                  |          419 |        13328 |         11187 |            0 |    10655.7 |    6823.1  |     4254.3 |      99.1 |   73.7667 |      13.4 |          0 |
| qgis316-standalone | Global  |               4688.1 | +665.2%                      |        46163.9 | +683.6%                |          1760   | +29.3%                  |           21 |       513860 |         11187 |            0 |    16488.8 |   10467.8  |     4264.3 |      98   |   56.8333 |      13.5 |          0 |

## Aggregated
| name                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_grundplanav_farbig      | somap_grundplanav_farbig |                 66.5 | +0.0%                        |          598.9 | +0.0%                  |           738   | +14.2%                  |            6 |         4834 |           735 |            0 |     6638.7 |     5914.7 |     4457.2 |      97.4 |      70.7 |      34.5 |          0 |
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |                 68.7 | +3.3%                        |          615.2 | +2.7%                  |           646   | +0.0%                   |          219 |         9076 |           735 |            0 |     5969.3 |     5560.4 |     5082.1 |      99.1 |      96.4 |      34.5 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |                 82.6 | +24.2%                       |          756.5 | +26.3%                 |           892   | +38.1%                  |          193 |         3857 |           735 |            0 |     6687.9 |     6125.7 |     4501.2 |      99.1 |      74   |      41.5 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |                 83.2 | +25.1%                       |          766.8 | +28.0%                 |           896   | +38.7%                  |          191 |         3987 |           735 |            0 |     6739.7 |     5933.6 |     4413.9 |      94.2 |      73.8 |      34.5 |          0 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |               1036.9 | +1459.2%                     |        10298.9 | +1619.8%               |           765   | +18.4%                  |            9 |       247000 |           735 |            0 |    11881.6 |    10662.8 |     4744.7 |      98   |      54.1 |      13.6 |          0 |
| qgis316-stock > somap316_grundplanav_sw          | somap_grundplanav_sw     |                382.9 | +0.0%                        |         3744.4 | +0.0%                  |           548.5 | +0.0%                   |            6 |         6200 |          5190 |            0 |    10463.1 |     8633.3 |     5343.1 |      93.5 |      73.3 |      52.6 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |                510.8 | +33.4%                       |         4995.5 | +33.4%                 |           577.5 | +5.3%                   |          209 |        14293 |          5190 |            0 |    10346.4 |     9085.5 |     5316.8 |      99.9 |      98.2 |      13.4 |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |                533.4 | +39.3%                       |         5243.1 | +40.0%                 |           826   | +50.6%                  |          184 |         9184 |          5190 |            0 |    10417.6 |     8786.6 |     5467.6 |      93.4 |      73.8 |      13.1 |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |                540.4 | +41.1%                       |         5310   | +41.8%                 |           860   | +56.8%                  |          193 |         6467 |          5190 |            0 |    10655.7 |     8989.4 |     5859.3 |      95.9 |      73.7 |      13.4 |          0 |
| qgis316-standalone > somap316_grundplanav_sw     | somap_grundplanav_sw     |               3452.6 | +801.7%                      |        33969.7 | +807.2%                |           775   | +41.3%                  |            8 |       263726 |          5190 |            0 |    16488.8 |    15118.2 |     9462.1 |      93.1 |      56.5 |      13.5 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |                143.6 | +0.0%                        |         1364.1 | +0.0%                  |           137.5 | +13.6%                  |            5 |         2758 |          5262 |            0 |     7072   |     5667   |     4099.7 |      99.6 |      98.1 |      51.5 |          0 |
| qgis316-stock > somap316_lk                      | somap_lk                 |                163.3 | +13.7%                       |         1548.1 | +13.5%                 |           121   | +0.0%                   |            3 |         4139 |          5262 |            0 |     7123   |     5397.2 |     4170.3 |      84.8 |      73.1 |      13.6 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |                197.2 | +37.3%                       |         1892.3 | +38.7%                 |           201   | +66.1%                  |           33 |         3004 |          5262 |            0 |     6830   |     5354.2 |     4254.3 |      93.1 |      73.6 |      51.8 |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |                198.1 | +38.0%                       |         1893.7 | +38.8%                 |           185   | +52.9%                  |           30 |         3892 |          5262 |            0 |     7222.8 |     5337.6 |     4124.4 |      88.4 |      73.4 |      21   |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |                198.6 | +38.3%                       |         1895.4 | +38.9%                 |           220   | +81.8%                  |            4 |         3134 |          5262 |            0 |     7493.8 |     5622.4 |     4264.3 |      80.7 |      59.9 |      20.7 |          0 |

## Detail
| name                                                                                                                                                                                                 | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-025546/qgis316-stock/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |                 66.5 | +0.0%                        |          598.9 | +0.0%                  |           738   | +14.2%                  |           735 |            0 |          0 |       814.769 |            6 |         4834 |        1489.4 |       1752.2  |       2973.12 |    12.0984   |              1770.33   |           5.32682  |     6638.7 |     5914.7 |     4457.2 |      97.4 |      70.7 |      34.5 |
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-025546/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |                 68.7 | +3.3%                        |          615.2 | +2.7%                  |           646   | +0.0%                   |           735 |            0 |          0 |       836.952 |          219 |         9076 |        1467.4 |       1724.6  |       3005.2  |    11.6947   |              2046.78   |           5.14909  |     5969.3 |     5560.4 |     5082.1 |      99.1 |      96.4 |      34.5 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-025546/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |                 82.6 | +24.2%                       |          756.5 | +26.3%                 |           892   | +38.1%                  |           735 |            0 |          0 |      1029.3   |          193 |         3857 |        1783.2 |       1985.2  |       2936.48 |     9.58229  |              1402.26   |           4.21901  |     6687.9 |     6125.7 |     4501.2 |      99.1 |      74   |      41.5 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-025546/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |                 83.2 | +25.1%                       |          766.8 | +28.0%                 |           896   | +38.7%                  |           735 |            0 |          0 |      1043.3   |          191 |         3987 |        1799.8 |       1994.8  |       3143.4  |     9.45338  |              1383.5    |           4.16225  |     6739.7 |     5933.6 |     4413.9 |      94.2 |      73.8 |      34.5 |
| [qgis316-standalone > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-025546/qgis316-standalone/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |               1036.9 | +1459.2%                     |        10298.9 | +1619.8%               |           765   | +18.4%                  |           735 |            0 |          0 |     14012.1   |            9 |       247000 |       62804.6 |     101091    |     178453    |     0.712846 |                99.7641 |           0.323607 |    11881.6 |    10662.8 |     4744.7 |      98   |      54.1 |      13.6 |
| [qgis316-stock > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-025546/qgis316-stock/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |                382.9 | +0.0%                        |         3744.4 | +0.0%                  |           548.5 | +0.0%                   |          5190 |            0 |          0 |       721.471 |            6 |         6200 |        1549.8 |       2048.35 |       3067.36 |    13.7681   |              3726.76   |           5.99642  |    10463.1 |     8633.3 |     5343.1 |      93.5 |      73.3 |      52.6 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-025546/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |                510.8 | +33.4%                       |         4995.5 | +33.4%                 |           577.5 | +5.3%                   |          5190 |            0 |          0 |       962.524 |          209 |        14293 |        2193.8 |       2606.7  |       5303.78 |    10.2818   |              3201.3    |           4.47801  |    10346.4 |     9085.5 |     5316.8 |      99.9 |      98.2 |      13.4 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-025546/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |                533.4 | +39.3%                       |         5243.1 | +40.0%                 |           826   | +50.6%                  |          5190 |            0 |          0 |      1010.23  |          184 |         9184 |        1905   |       2335    |       3372.16 |     9.8411   |              2663.46   |           4.28608  |    10417.6 |     8786.6 |     5467.6 |      93.4 |      73.8 |      13.1 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-025546/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |                540.4 | +41.1%                       |         5310   | +41.8%                 |           860   | +56.8%                  |          5190 |            0 |          0 |      1023.11  |          193 |         6467 |        1868.9 |       2300.45 |       3204.45 |     9.7151   |              2629.31   |           4.2312   |    10655.7 |     8989.4 |     5859.3 |      95.9 |      73.7 |      13.4 |
| [qgis316-standalone > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-025546/qgis316-standalone/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |               3452.6 | +801.7%                      |        33969.7 | +807.2%                |           775   | +41.3%                  |          5190 |            0 |          0 |      6545.21  |            8 |       263726 |        3142.6 |      72787    |     154822    |     1.50584  |               392.791  |           0.676422 |    16488.8 |    15118.2 |     9462.1 |      93.1 |      56.5 |      13.5 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201030-025546/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |                143.6 | +0.0%                        |         1364.1 | +0.0%                  |           137.5 | +13.6%                  |          5262 |            0 |          0 |       259.232 |            5 |         2758 |         699   |        963.85 |       1627.92 |    38.2377   |              1946.67   |          19.3694   |     7072   |     5667   |     4099.7 |      99.6 |      98.1 |      51.5 |
| [qgis316-stock > somap316_lk > lk_big.txt](../results/details/compare-major/20201030-025546/qgis316-stock/somap316_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |                163.3 | +13.7%                       |         1548.1 | +13.5%                 |           121   | +0.0%                   |          5262 |            0 |          0 |       294.198 |            3 |         4139 |         785.7 |       1087.85 |       1715.96 |    33.468    |              1583.6    |          16.9533   |     7123   |     5397.2 |     4170.3 |      84.8 |      73.1 |      13.6 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201030-025546/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |                197.2 | +37.3%                       |         1892.3 | +38.7%                 |           201   | +66.1%                  |          5262 |            0 |          0 |       359.607 |           33 |         3004 |         839   |       1130.7  |       1882.33 |    27.5588   |              1303.86   |          13.96     |     6830   |     5354.2 |     4254.3 |      93.1 |      73.6 |      51.8 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201030-025546/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |                198.1 | +38.0%                       |         1893.7 | +38.8%                 |           185   | +52.9%                  |          5262 |            0 |          0 |       359.885 |           30 |         3892 |         911.7 |       1237    |       1981.88 |    27.406    |              1297.34   |          13.8826   |     7222.8 |     5337.6 |     4124.4 |      88.4 |      73.4 |      21   |
| [qgis316-standalone > somap316_lk > lk_big.txt](../results/details/compare-major/20201030-025546/qgis316-standalone/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                198.6 | +38.3%                       |         1895.4 | +38.9%                 |           220   | +81.8%                  |          5262 |            0 |          0 |       360.199 |            4 |         3134 |         938.4 |       1230.85 |       1877.03 |    27.4053   |              1293.8    |          14.2569   |     7493.8 |     5622.4 |     4264.3 |      80.7 |      59.9 |      20.7 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316-stock
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
  qgis316-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```