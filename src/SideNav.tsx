import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import * as Mui from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PostIcon from '@material-ui/icons/List';
import ComponentBase from './Base/ComponentBase';
// import RouterLink from './Components/RouterLink';
import Theme from './Base/Theme';
import { Medium } from './Services/medium';

interface SideNavState {
	feedUpdated: boolean;
}

export class SideNav extends ComponentBase<{}, SideNavState> {
	private readonly drawerWidth = Theme.spacing(28);
	public constructor(props: {}) {
		super(props);
		this.state = {
			feedUpdated: false,
		};
	}

	public componentDidMount(): void {
		Medium.fetchPosts()
			.then((feed) => {
				Medium.updatePosts(feed);
				setTimeout(() =>{ this.setState({ feedUpdated: true }); }, 600);
			})
			.catch((reason) => { console.error(reason); });
	}

	private openUrlInNewTab(url: string): void {
		const win = window.open(url, '_blank');
		win && win.focus();
	}

	private createPostsLinks(): JSX.Element[] {
		if (!Medium.posts) return [];

		const posts: JSX.Element[] = [];
		Medium.posts.forEach((post, ind) => {
			posts.push(
				<Mui.ListItem key={ind} title={post.title} button={true} onClick={() => { this.openUrlInNewTab(post.url); }}>
					<Mui.ListItemIcon style={{minWidth: 36}}><PostIcon/></Mui.ListItemIcon>
					<Mui.ListItemText
						primary={<div>{post.shortTitle}</div>}
						primaryTypographyProps={{ variant: "subtitle2" }}
						secondary={<div>{post.date.toLocaleString()}</div>}
						secondaryTypographyProps={{ variant: "caption" }}
					/>
				</Mui.ListItem>
			);
		});
		return posts;
	}

	private getProgressRing(): JSX.Element {
		return (
			<Mui.ListItem>
				<Mui.ListItemIcon style={{minWidth: 36}}>
					<Mui.CircularProgress/>
				</Mui.ListItemIcon>
			</Mui.ListItem>
		);
	}

	public render(): JSX.Element {
		const drawerBase: React.CSSProperties = {
			width: this.drawerWidth,
			whiteSpace: 'nowrap',
		};

		const drawerPaper: React.CSSProperties = {
			width: this.drawerWidth,
		};

		return (
			<nav aria-label="mailbox folders">
				<Mui.Drawer variant="permanent" style={drawerBase} PaperProps={{style: drawerPaper}}>
					<Mui.List style={{ flexGrow: 1 }}>
						{/* <RouterLink to={{ pathname: "/" }}> */}
						<Mui.ListItem button={true}>
							<Mui.ListItemIcon style={{minWidth: 36}}><HomeIcon/></Mui.ListItemIcon>
							<Mui.ListItemText primary="Home" />
						</Mui.ListItem>
						{/* </RouterLink> */}
						<Mui.ListItem button={true} onClick={() => { this.openUrlInNewTab("https://www.linkedin.com/in/rteshnizi/"); }}>
							<Mui.ListItemIcon style={{minWidth: 36}}><FontAwesomeIcon icon={faLinkedin}/></Mui.ListItemIcon>
							<Mui.ListItemText primary="LinkedIn" />
						</Mui.ListItem>
						<Mui.ListItem button={true} onClick={() => { this.openUrlInNewTab("https://scholar.google.com/citations?user=s10QCcoAAAAJ&hl=en"); }}>
							<Mui.ListItemIcon style={{minWidth: 36}}><FontAwesomeIcon icon={faGraduationCap}/></Mui.ListItemIcon>
							<Mui.ListItemText primary="Google Scholar" />
						</Mui.ListItem>
						<Mui.ListSubheader>Posts</Mui.ListSubheader>
						{this.state.feedUpdated ? this.createPostsLinks() : this.getProgressRing() }
					</Mui.List>
				</Mui.Drawer>
			</nav>
		);
	}
}
