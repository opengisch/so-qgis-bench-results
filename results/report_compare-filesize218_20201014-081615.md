# QGIS Benchmark summary compare-filesize218 (20201014-081615)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 00m 00s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize218_20201014-081615_plot.html)

## Summary


## Aggregated


## Detail


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
description: 'compare the effect of different QGIS project file size in QGIS 2.18'

test-cases:

  qgis218-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap218_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis218-smallfile:
    inherit: qgis218-bigfile
    template: docker-compose-qgis-2
    projects:
      somap218_lk:
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 2.18
test-cases:
  qgis218-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
    path-prefix: ogc
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis218-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
    inherit: qgis218-bigfile
    path-prefix: ogc
    projects:
      somap218_grundplanav_farbig:
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2

```