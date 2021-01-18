import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BoardDetails } from '../cmps/board/BoardDetails'
import { BoardSideNav } from '../cmps/board/BoardSideNav'
import { loadBoards, removeBoard, addBoard } from '../store/actions/boardAction'
import { AppHeader } from '../cmps/AppHeader'

class _BoardApp extends Component {
    state = {
        boardsForDisplay: null
    }

    async componentDidMount() {
        await this.loadBoards()
        const { boards } = this.props
        const { activeBoard } = this.props
        if (activeBoard) {
            this.props.history.push(`/board/${activeBoard._id}`);
            return
        }
        if (!boards || !boards.length) {
            return
        }
        this.props.history.push(`/board/${boards[0]._id}`);
    }




    loadBoards = async () => {
        await this.props.loadBoards()
    }

    onRemove = async (boardId) => {
        const { boards } = this.props
        await this.props.removeBoard(boardId)
        this.props.history.push(`/board/${boards[0]._id}`);
    }
    onAdd = async (board) => {
        await this.props.addBoard(board)
        this.props.history.push(`/board/${this.props.activeBoard._id}`);
        this.loadBoards()
    }

    getBoradsForDisplay = async (filterBy) => {
        let { boards } = this.props
        const regex = new RegExp(filterBy, 'i')
        boards = boards.filter(board => regex.test(board.name))
        this.setState({ boardsForDisplay: boards })
    }

    render() {
        const { boards } = this.props
        const { boardsForDisplay } = this.state
        if (!boards) return <div>Loading no boards...</div>
        return (
            <section className="board-app flex">
                <AppHeader />
                <BoardSideNav
                    boards={boardsForDisplay || boards}
                    getBoradsForDisplay={this.getBoradsForDisplay}
                    onRemove={this.onRemove}
                    onAdd={this.onAdd}
                />
                <Switch>
                    <Route path="/board/:boardId" component={BoardDetails} />
                </Switch>

            </section>
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards,
        activeBoard: state.boardReducer.activeBoard
    };
};
const mapDispatchToProps = {
    loadBoards,
    removeBoard,
    addBoard
}

export const BoardApp = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardApp);