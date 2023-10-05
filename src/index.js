<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

import { MiBarrioBs } from './MiBarrioBs';

ReactDOM.render(<MiBarrioBs />, document.getElementById("root")); 

=======
import { MiBarrioBs } from './MiBarrioBs';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<MiBarrioBs />);

//ReactDOM.render(<MiBarrioBs />, container);
>>>>>>> incluye listas de agregados
