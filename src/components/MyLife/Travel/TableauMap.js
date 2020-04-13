import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line
import tableau from "tableau-api";

import classes from './TableauMap.module.css';

const Map = (props) => {

    let vizContainer = useRef(null);

    useEffect(() => {
        const initViz = () => {
            const vizUrl = 'https://public.tableau.com/views/VisitedStates/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link';
    
            const options = {
                hideTabs: true,
                hideToolbar: true
              };
    
            let viz = new window.tableau.Viz(vizContainer.current, vizUrl, options);
            viz.addEventListener(window.tableau.TableauEventName.MARKS_SELECTION, onMarkSelection);
        }

        const onMarkSelection = (e) => {
            e.getMarksAsync().then((marks) => {
                if(marks.length === 0) {
                    props.updateSelection('');
                }
                else {
                    marks.forEach(mark => {
                      const pairs = mark.getPairs();
                      const pair = pairs.filter(pair => pair.fieldName === 'Name1');
                      props.updateSelection(pair[0].value);
                    });
                }
            })
        }

        const isMapInView = () => {
            return window.pageYOffset >= vizContainer.current.offsetTop;
        }
        
        const init =  () => {
            let viz = window.tableau.VizManager.getVizs()[0];
            if (!viz) {
                initViz();
            }
            else {
                const parent = viz.getParentElement();
                if(parent && isMapInView()) {
                    viz.setFrameSize(parent.clientWidth, parent.clientHeight);
                }
            }
        }

        init();
    }, [props]);

    return (
        <div className={classes.Viz} ref={vizContainer}></div>
    );
}

export default Map;