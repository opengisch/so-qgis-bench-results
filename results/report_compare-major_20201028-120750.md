# QGIS Benchmark summary compare-major (20201028-120750)


compare different version of QGIS servers using the same settings

_run completed in 00h 07m 20s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201028-120750_plot.html)

## Summary
| name               | group   |   runtime s |   runtime s penalty % |   medianResTime |   medianResTime penalty % |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|-------------|-----------------------|-----------------|---------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock      | Global  |        68.8 |                   0   |          2348   |                       0   |          632 |         6748 |            72 |            0 |     8450   |    7934.07 |     7520.4 |      98.6 |   51.2667 |       5.3 |          0 |
| qgis310-stock      | Global  |        89   |                  29.4 |          3864   |                      64.6 |          490 |         7301 |            72 |            0 |     8435.5 |    8037.4  |     7712.5 |      99.1 |   72.65   |      29.5 |          0 |
| qgis316-stock      | Global  |       100.3 |                  45.8 |          4865.5 |                     107.2 |           62 |         9117 |            72 |            0 |     9020.5 |    7961.67 |     7606.4 |      99.9 |   58.2667 |      14.6 |          0 |
| qgis314-stock      | Global  |       123.2 |                  79.2 |          5785.5 |                     146.4 |         1246 |        10571 |            72 |            0 |     8600.2 |    8114.45 |     7854.8 |      99.9 |   78.55   |      35   |          0 |
| qgis316-standalone | Global  |       644.3 |                 837   |          6927   |                     195   |          763 |       160736 |            72 |            0 |    10972.5 |    8860.33 |     7168.7 |      99.9 |   29.6667 |      16.7 |          0 |
| qgis314-standalone | Global  |       756.7 |                1000.3 |          9099.5 |                     287.5 |          882 |       145737 |            72 |            0 |    12441.6 |    9615.03 |     7557.3 |      99.7 |   31.3    |      15.6 |          0 |

## Aggregated
| name                                             | group                    |   runtime s |   runtime s penalty % |   medianResTime |   medianResTime penalty % |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|-------------|-----------------------|-----------------|---------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |        28.8 |                   0   |          1017   |                       0   |          280 |         2926 |            22 |            0 |     8160   |     7971.8 |     7864.1 |      97.4 |      72.3 |      37.4 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |        39.4 |                  36.9 |          1414.5 |                      39.1 |          134 |         2994 |            22 |            0 |     8435.5 |     8047.6 |     7712.5 |      97.9 |      74.3 |      29.5 |          0 |
| qgis316-stock > somap316_grundplanav_farbig      | somap_grundplanav_farbig |        43.6 |                  51.4 |          1973.5 |                      94.1 |           20 |         3156 |            22 |            0 |     9020.5 |     8273.1 |     7838.6 |      97.9 |      78.5 |      35.2 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |        57.8 |                 101   |          2396   |                     135.6 |          935 |         4310 |            22 |            0 |     8600.2 |     8172.6 |     7854.8 |      99.5 |      79.2 |      35.7 |          0 |
| qgis314-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |       303.6 |                 955.5 |          4081   |                     301.3 |          455 |        62206 |            22 |            0 |     9495.8 |     9174.1 |     7756   |      98.4 |      32.9 |      24   |          0 |
| qgis316-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |       338.2 |                1075.8 |          3245   |                     219.1 |          738 |        74034 |            22 |            0 |     9120.7 |     8823.2 |     7380.1 |      98.7 |      30.6 |      24.5 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |        28.8 |                   0   |          1196.5 |                       0   |          267 |         2741 |            20 |            0 |     8450   |     8310   |     8099.2 |      98.6 |      76.2 |      27.4 |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |        44.1 |                  53   |          2324.5 |                      94.3 |          304 |         3711 |            20 |            0 |     8246.3 |     8027.2 |     7865.3 |      99.1 |      71   |      31.7 |          0 |
| qgis316-stock > somap316_grundplanav_sw          | somap_grundplanav_sw     |        53.4 |                  85.3 |          2848.5 |                     138.1 |           26 |         5525 |            20 |            0 |     8444.4 |     8005.5 |     7832   |      99.9 |      81.7 |      33   |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |        60.2 |                 109.1 |          3262   |                     172.6 |          259 |         5757 |            20 |            0 |     8362.4 |     8056.3 |     7899.4 |      99.9 |      77.9 |      35   |          0 |
| qgis316-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |       301.5 |                 946.4 |          3612.5 |                     201.9 |           11 |        86203 |            20 |            0 |    10972.5 |    10589.1 |     8874.5 |      99.9 |      41.7 |      26.2 |          0 |
| qgis314-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |       447.2 |                1452.5 |          4915   |                     310.8 |          381 |        82897 |            20 |            0 |    12441.6 |    12113.7 |     9945.2 |      99.7 |      45.4 |      29.5 |          0 |
| qgis316-stock > somap316_lk                      | somap_lk                 |         3.3 |                   0   |            43.5 |                       0   |           16 |          436 |            30 |            0 |     7606.4 |     7606.4 |     7606.4 |      14.6 |      14.6 |      14.6 |          0 |
| qgis316-standalone > somap314_lk                 | somap_lk                 |         4.6 |                  39.2 |            69.5 |                      59.8 |           14 |          499 |            30 |            0 |     7168.7 |     7168.7 |     7168.7 |      16.7 |      16.7 |      16.7 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |         5.1 |                  55.1 |           127.5 |                     193.1 |           52 |          504 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |         5.5 |                  66.4 |           125   |                     187.4 |           52 |          596 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis314-standalone > somap314_lk                 | somap_lk                 |         5.8 |                  75.4 |           103.5 |                     137.9 |           46 |          634 |            30 |            0 |     7557.3 |     7557.3 |     7557.3 |      15.6 |      15.6 |      15.6 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |        11.2 |                 237.8 |           134.5 |                     209.2 |           85 |         1081 |            30 |            0 |     7520.4 |     7520.4 |     7520.4 |       5.3 |       5.3 |       5.3 |          0 |

## Detail
| name                                                                                                                                                                                         | group                               |   runtime s |   runtime s penalty % |   medianResTime penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-------------|-----------------------|---------------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis218-stock/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |        28.8 |                   0   |                       0   |            22 |            0 |          0 |      1307.45  |          1017   |          280 |         2926 |        2840.2 |       2920.15 |          2926 |     5.96529  |               943.126  |          2.54203   |     8160   |     7971.8 |     7864.1 |      97.4 |      72.3 |      37.4 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis310-stock/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |        39.4 |                  36.9 |                      39.1 |            22 |            0 |          0 |      1789.86  |          1414.5 |          134 |         2994 |        2945.8 |       2987.4  |          2994 |     4.6729   |               609.31   |          1.99129   |     8435.5 |     8047.6 |     7712.5 |      97.9 |      74.3 |      29.5 |
| [qgis316-stock > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis316-stock/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |        43.6 |                  51.4 |                      94.1 |            22 |            0 |          0 |      1980     |          1973.5 |           20 |         3156 |        3079.8 |       3153.75 |          3156 |     4.06429  |               529.985  |          1.73194   |     9020.5 |     8273.1 |     7838.6 |      97.9 |      78.5 |      35.2 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis314-stock/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |        57.8 |                 101   |                     135.6 |            22 |            0 |          0 |      2627.77  |          2396   |          935 |         4310 |        4217.8 |       4299.5  |          4310 |     3.24532  |               423.142  |          1.38295   |     8600.2 |     8172.6 |     7854.8 |      99.5 |      79.2 |      35.7 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis314-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |       303.6 |                 955.5 |                     301.3 |            22 |            0 |          0 |     13799.7   |          4081   |          455 |        62206 |       61820   |      62200.3  |         62206 |     0.327693 |                39.8124 |          0.144122  |     9495.8 |     9174.1 |     7756   |      98.4 |      32.9 |      24   |
| [qgis316-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201028-120750/qgis316-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |       338.2 |                1075.8 |                     219.1 |            22 |            0 |          0 |     15373.7   |          3245   |          738 |        74034 |       73531.2 |      73963.8  |         74034 |     0.281586 |                34.2168 |          0.123844  |     9120.7 |     8823.2 |     7380.1 |      98.7 |      30.6 |      24.5 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis218-stock/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |        28.8 |                   0   |                       0   |            20 |            0 |          0 |      1440.45  |          1196.5 |          267 |         2741 |        2676.7 |       2738.5  |          2741 |     5.34188  |              1915.1    |          2.23691   |     8450   |     8310   |     8099.2 |      98.6 |      76.2 |      27.4 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis310-stock/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |        44.1 |                  53   |                      94.3 |            20 |            0 |          0 |      2203.8   |          2324.5 |          304 |         3711 |        3491.7 |       3700.95 |          3711 |     3.36757  |              1047.81   |          1.41017   |     8246.3 |     8027.2 |     7865.3 |      99.1 |      71   |      31.7 |
| [qgis316-stock > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis316-stock/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |        53.4 |                  85.3 |                     138.1 |            20 |            0 |          0 |      2668.85  |          2848.5 |           26 |         5525 |        5037.8 |       5503.25 |          5525 |     3.00345  |               934.181  |          1.2577    |     8444.4 |     8005.5 |     7832   |      99.9 |      81.7 |      33   |
| [qgis314-stock > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis314-stock/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |        60.2 |                 109.1 |                     172.6 |            20 |            0 |          0 |      3012.2   |          3262   |          259 |         5757 |        5592.2 |       5753.85 |          5757 |     2.6137   |               813.23   |          1.09449   |     8362.4 |     8056.3 |     7899.4 |      99.9 |      77.9 |      35   |
| [qgis316-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis316-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |       301.5 |                 946.4 |                     201.9 |            20 |            0 |          0 |     15073.4   |          3612.5 |           11 |        86203 |       84950.3 |      86151    |         86203 |     0.221058 |                57.3992 |          0.0955903 |    10972.5 |    10589.1 |     8874.5 |      99.9 |      41.7 |      26.2 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201028-120750/qgis314-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |       447.2 |                1452.5 |                     310.8 |            20 |            0 |          0 |     22362.4   |          4915   |          381 |        82897 |       78566.7 |      82686.9  |         82897 |     0.240171 |                62.3924 |          0.103855  |    12441.6 |    12113.7 |     9945.2 |      99.7 |      45.4 |      29.5 |
| [qgis316-stock > somap316_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis316-stock/somap316_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |         3.3 |                   0   |                       0   |            30 |            0 |          0 |       110.433 |            43.5 |           16 |          436 |         399.9 |        425.55 |           436 |    37.8788   |              1026.7    |         15.4524    |     7606.4 |     7606.4 |     7606.4 |      14.6 |      14.6 |      14.6 |
| [qgis316-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis316-standalone/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         4.6 |                  39.2 |                      59.8 |            30 |            0 |          0 |       153.733 |            69.5 |           14 |          499 |         481.8 |        498.45 |           499 |    32.6797   |               882.478  |         13.7783    |     7168.7 |     7168.7 |     7168.7 |      16.7 |      16.7 |      16.7 |
| [qgis314-stock > somap314_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis314-stock/somap314_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |         5.1 |                  55.1 |                     193.1 |            30 |            0 |          0 |       171.3   |           127.5 |           52 |          504 |         470.5 |        500.15 |           504 |    32.0171   |               867.663  |         13.0611    |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis310-stock > somap310_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis310-stock/somap310_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |         5.5 |                  66.4 |                     187.4 |            30 |            0 |          0 |       183.8   |           125   |           52 |          596 |         585.6 |        595.45 |           596 |    30.5499   |               828.111  |         12.4626    |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis314-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis314-standalone/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         5.8 |                  75.4 |                     137.9 |            30 |            0 |          0 |       193.7   |           103.5 |           46 |          634 |         580   |        616.4  |           634 |    30.1205   |               813.369  |         12.6992    |     7557.3 |     7557.3 |     7557.3 |      15.6 |      15.6 |      15.6 |
| [qgis218-stock > somap218_lk > lk.txt](../results/details/compare-major/20201028-120750/qgis218-stock/somap218_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |        11.2 |                 237.8 |                     209.2 |            30 |            0 |          0 |       373.067 |           134.5 |           85 |         1081 |        1077.9 |       1079.9  |          1081 |    15.9659   |               433.321  |          6.51319   |     7520.4 |     7520.4 |     7520.4 |       5.3 |       5.3 |       5.3 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/results

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
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

  qgis316-standalone:
    active: yes
    inherit: qgis314-standalone
    compose-variables:
      QGIS_VERSION: '3.16'


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
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
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
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis314-standalone:
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
    inherit: qgis314-stock
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
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
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
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
    inherit: qgis314-standalone
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
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
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```